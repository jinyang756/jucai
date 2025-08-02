import type { VercelRequest, VercelResponse } from '@vercel/node';

// 确保文件有默认导出


// =======================================================
// Lark应用信息
// 您可以在Lark开放平台的“凭证与基础信息”中找到这些值。
// =======================================================
const APP_ID = 'cli_a80170d16c385029';
const APP_SECRET = 'AfbOzT8LmJ4rfKIs256O9bO4BcXQ30Os';
const VERIFICATION_TOKEN = 'VGtaaMkfEY09OBkTUOJ0adYa17CoVIr1';
const LARK_DOC_FOLDER_TOKEN = ''; // 留空表示创建在根目录

// 这个函数用于处理来自Lark的请求
export default async function feishuCallback(req: VercelRequest, res: VercelResponse) {
    // 确保只处理 POST 请求，因为Lark的回调都是 POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const payload = req.body;
        console.log('Received payload:', JSON.stringify(payload, null, 2));

        // =======================================================
        // 第一步：验证请求来源
        // 确保请求是合法的，并且来自Lark
        // =======================================================
        if (payload.header?.token !== VERIFICATION_TOKEN) {
            console.error('Token verification failed!');
            return res.status(401).json({ error: 'Unauthorized' });
        }

        // =======================================================
        // 第二步：处理 URL 验证请求
        // Lark在配置回调地址时会发送一个验证请求
        // =======================================================
        if (payload.type === 'url_verification') {
            console.log('URL verification request received.');
            return res.status(200).json({ challenge: payload.challenge });
        }
        
        // =======================================================
        // 第三步：处理具体的事件消息
        // 当用户与机器人互动时，Lark会发送事件消息
        // =======================================================
        if (payload.header?.event_type === 'im.message.receive_v1') {
            const message = payload.event?.message;
            
            if (!message) {
                console.error('No message in event payload');
                return res.status(400).json({ error: 'Invalid event payload: missing message' });
            }

            // 解析消息内容
            let userText = '';
            try {
                const contentObj = JSON.parse(message.content);
                userText = contentObj.text || '';
            } catch (e) {
                userText = message.content;
            }
            
            // 检查用户输入是否是创建文章的指令，例如“创建文章: <标题>”
            if (userText.includes('创建文章')) {
                // 提取文章标题和内容
                const titleMatch = userText.match(/创建文章[:：]\s*(.+)/);
                if (!titleMatch || !titleMatch[1]) {
                    console.error('Invalid article title format:', userText);
                    return res.status(400).json({ error: '请使用格式：创建文章: <标题>' });
                }
                
                const title = titleMatch[1].trim();
                const content = '这是通过智能客服创建的文章内容。'; // 这里可以从聊天状态中获取真实内容

                console.log(`User wants to create an article: Title - "${title}"`);
                
                // TODO: 在这里添加调用Lark云文档 API 的逻辑
                // 您需要调用LarkAPI来创建或更新一个文档
                // 这部分代码需要使用您的 APP_ID, APP_SECRET 和 title, content
                
                // 示例：向Lark云文档 API 发起请求（此代码仅为示意，需要替换为真实逻辑）
                // const accessToken = await getAccessToken(APP_ID, APP_SECRET);
                // const apiResponse = await fetch('https://open.larksuite.com/open-apis/doc/v2/create', { ... });
                
                // 模拟成功响应
                try {
                    // 获取访问令牌
                    const accessToken = await getAccessToken(APP_ID, APP_SECRET);
                    console.log('Got access token:', accessToken.substring(0, 10) + '...');
                    
                    // 创建Lark文档
                    const docResult = await createFeishuDoc(accessToken, title, content);
                    console.log('Created document result:', docResult);
                    
                    // 返回成功消息
                    const successMessage = `文章《${title}》已成功在飞书文档中创建，文档ID: ${docResult.doc_token}`;
                    return res.status(200).json({ success: true, message: successMessage, doc_token: docResult.doc_token });
                } catch (error) {
                    console.error('Error creating document:', error);
                    return res.status(500).json({ success: false, error: '创建文章失败: ' + (error as Error).message });
                }
            }
        }
        
        // 如果请求类型不匹配，返回 200 状态码，表示已收到但无需处理
        return res.status(200).json({ success: true, message: 'Event received but no action taken.' });

    } catch (error) {
        console.error('Error processing feishu callback:', error);
        return res.status(500).json({ success: false, error: 'Internal Server Error', details: (error as Error).message });
    }
}

// 获取Lark API 访问令牌
async function getAccessToken(appId: string, appSecret: string): Promise<string> {
    try {
        const response = await fetch('https://open.larksuite.com/open-apis/auth/v3/tenant_access_token/internal', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                app_id: appId,
                app_secret: appSecret
            })
        });
        
        const data = await response.json();
        
        if (!response.ok || !data.tenant_access_token) {
            throw new Error(`Failed to get access token: ${data.msg || 'Unknown error'}`);
        }
        
        return data.tenant_access_token;
    } catch (error) {
        console.error('Error getting access token:', error);
        throw error;
    }
}

// 创建Lark文档
async function createFeishuDoc(accessToken: string, title: string, content: string): Promise<any> {
    try {
        // 构建文档内容结构
        const docContent = {
            title: title,
            content: [
                {
                    "obj": "paragraph",
                    "paragraph": {
                        "elements": [
                            {
                                "obj": "text",
                                "text": {
                                    "content": content
                                }
                            }
                        ]
                    }
                }
            ]
        };
        
        // 构建请求体
        const requestBody: any = {
            title: title,
            content: docContent
        };
        
        // 如果提供了文件夹token，则添加到请求体
        if (LARK_DOC_FOLDER_TOKEN) {
                requestBody.folder_token = LARK_DOC_FOLDER_TOKEN;
            }
        
        const response = await fetch('https://open.larksuite.com/open-apis/docs/v2/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify(requestBody)
        });
        
        const data = await response.json();
        
        if (!response.ok || !data.data) {
            throw new Error(`Failed to create document: ${data.msg || 'Unknown error'}`);
        }
        
        return data.data;
    } catch (error) {
        console.error('Error creating document:', error);
        throw error;
    }
}

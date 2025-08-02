// 定义智能客服知识库条目类型
export interface KnowledgeEntry {
  keywords: string[];
  response: string;
  replies: string[];
}

// 定义消息类型
export interface Message {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  timestamp: number;
  isRead: boolean;
}

// 定义基础用户信息类型
export interface UserInfo {
  userId?: string;
  name?: string;
  role?: string;
  permissions?: string[];
  articleTitle?: string;
  articleDescription?: string;
  articleContent?: string;
  updateField?: 'title' | 'description' | 'content';
  updateContent?: string;
  articleId?: string;
}

// 定义会话上下文类型
export interface ChatContext {
  sessionId: string;
  currentTopic: string | null;
  lastActiveTime: number;
  messages: Message[];
  userInfo: UserInfo | null;
  requestCount?: number;
  lastRequestTime?: number;
}

// 定义文章类型
export interface Article {
  id: string;
  title: string;
  description: string;
  content: string;
  publishDate: string;
  lastModified: string;
  coverImage: string | null;
  column: '聚财策略' | '行业研究' | '市场动态' | '投资技巧' | '日斗专栏';
  tags: string[];
}

// 定义智能客服配置类型
export interface ChatbotConfig {
  enableContext: boolean;
  contextTimeout: number; // 毫秒
  maxMessages: number;
  enableTypingIndicator: boolean;
  typingDelay: number; // 毫秒
  maxRequestRetries?: number;
  rateLimit?: number;
}

// 定义意图识别结果类型
export interface IntentResult {
  intent: string;
  confidence: number;
  entities: Record<string, string | string[]>;
  customResponse?: string;
}
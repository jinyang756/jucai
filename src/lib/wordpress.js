// src/lib/wordpress.js
import apiFetch from '@wordpress/api-fetch';

// 配置WordPress API基础URL - 重要：请将此URL替换为您实际的WordPress站点URL
// 格式应为: https://您的域名/wp-json
const WORDPRESS_API_URL = 'https://your-actual-wordpress-site.com/wp-json';

// 调试标志 - 生产环境中设置为false
const DEBUG_MODE = true;

// 强制错误日志 - 即使在DEBUG_MODE关闭时也会显示关键错误
const FORCE_ERROR_LOG = true;

// 日志工具函数
export function logDebug(...args) {
  if (DEBUG_MODE) {
    console.debug('[WP DEBUG]', ...args);
  }
}

export function logError(...args) {
  if (FORCE_ERROR_LOG || DEBUG_MODE) {
    console.error('[WP ERROR]', ...args);
  }
}

export function logWarning(...args) {
  if (DEBUG_MODE) {
    console.warn('[WP WARNING]', ...args);
  }
}

export async function fetchPodcasts() {
  logDebug('[WP API] 开始获取播客列表...');
  
  // 检查URL是否仍为默认值
  if (WORDPRESS_API_URL.includes('your-actual-wordpress-site.com')) {
    const errorMsg = '[WP API] 严重错误: 请立即替换默认的WordPress API URL为您的实际站点URL';
    logError(errorMsg);
    // 在开发环境中抛出错误以引起注意
    if (import.meta.env.DEV) throw new Error(errorMsg);
    return [];
  }
  
  try {
    const endpoint = `${WORDPRESS_API_URL}/wp/v2/podcasts`;
    logDebug('[WP API] 请求URL:', endpoint);
    
    const response = await fetch(endpoint);
    logDebug('[WP API] 响应状态:', response.status);
    
    // 记录完整响应头以便调试
    if (DEBUG_MODE) {
      const headers = Array.from(response.headers.entries());
      logDebug('[WP API] 响应头:', headers);
    }
    
    if (!response.ok) {
      handleApiError(response);
      return [];
    }
    
    const podcasts = await response.json();
    logDebug('[WP API] 成功获取播客数据:', podcasts);
    logDebug('[WP API] 找到播客数量:', podcasts.length);
    
    // 检查返回数据是否为空
    if (!podcasts.length) {
      logWarning('[WP API] 警告: 未找到任何播客。请确认:');
      logWarning('[WP API] 1. WordPress中是否有发布的播客文章');
      logWarning('[WP API] 2. 播客文章是否设置为"公开"状态');
    }
    
    return podcasts;
  } catch (error) {
    logError('[WP API] 获取播客失败:', error);
    return [];
  }
}

export async function fetchPodcastBySlug(slug) {
  logDebug(`[WP API] 开始获取播客: ${slug}`);
  
  // 检查URL是否仍为默认值
  if (WORDPRESS_API_URL.includes('your-actual-wordpress-site.com')) {
    const errorMsg = '[WP API] 严重错误: 请立即替换默认的WordPress API URL为您的实际站点URL';
    logError(errorMsg);
    // 在开发环境中抛出错误以引起注意
    if (import.meta.env.DEV) throw new Error(errorMsg);
    return null;
  }
  
  try {
    const endpoint = `${WORDPRESS_API_URL}/wp/v2/podcasts?slug=${slug}`;
    logDebug('[WP API] 请求URL:', endpoint);
    
    const response = await fetch(endpoint);
    logDebug('[WP API] 响应状态:', response.status);
    
    if (!response.ok) {
      handleApiError(response);
      return null;
    }
    
    const podcasts = await response.json();
    logDebug(`[WP API] 找到 ${podcasts.length} 个匹配播客`);
    
    if (podcasts.length === 0) {
      logWarning(`[WP API] 警告: 未找到slug为${slug}的播客`);
    }
    
    return podcasts.length > 0 ? podcasts[0] : null;
  } catch (error) {
    console.error(`[WP API] 获取播客 ${slug} 失败:`, error);
    return null;
  }
}
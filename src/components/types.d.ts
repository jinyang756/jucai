// 定义智能客服知识库条目类型
export interface KnowledgeEntry {
  keywords: string[];
  response: string;
  replies: string[];
}
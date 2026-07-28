export interface AnimeSubscription {
  id: string;
  title: string;
  filterText: string;
  /** 排除关键词，逗号分隔；标题包含任一关键词则跳过，例如：先行版,预告 */
  excludeText?: string;
  source: 'acgrip' | 'mikan' | 'dmhy' | 'nyaa';
  enabled: boolean;
  lastCheckTime: number;
  lastEpisode: number;
  createdAt: number;
  updatedAt: number;
  createdBy: string;
}

export type AnimeSubscriptionDownloadTool = 'aria2' | 'qBittorrent' | 'Transmission';

export interface AnimeSubscriptionConfig {
  Enabled: boolean;
  DownloadTool?: AnimeSubscriptionDownloadTool;
  Subscriptions: AnimeSubscription[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
}

export interface DocumentItem {
  id: string;
  title: string;
  year: string;
  category: 'KOREA' | 'JAPAN';
  summary: string;
  fact: string;
}

export interface MapItem {
  id: string;
  title: string;
  year: string;
  source: string;
  description: string;
  factHighlight: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  badge: string;
  cuteIcon: string;
}

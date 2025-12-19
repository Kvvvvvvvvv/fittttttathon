export type EventCategory = "championship" | "workshop" | "retreat";
export type QuickOptionType = "events" | "recruitment" | "general";
export type SocialPlatform = "whatsapp" | "instagram" | "email";

export interface FacultyMember {
  id: string;
  name: string;
  image: string;
  title?: string;
}

export interface Offering {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ProblemSolution {
  id: string;
  icon: string;
  problem: string;
  solution: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
  category: EventCategory;
}

export interface InstagramHighlight {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Stat {
  id: string;
  number: string;
  label: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export interface QuickOption {
  id: string;
  label: string;
  value: QuickOptionType;
}
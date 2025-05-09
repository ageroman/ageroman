export interface Team {
  id: string;
  name: string;
  logo: string;
  primaryColor: string;
  secondaryColor: string;
  description: string;
  foundedYear: number;
}

export interface Player {
  id: string;
  name: string;
  position: string;
  teamId: string;
  imageUrl: string;
  jerseyNumber: number;
  stats: {
    matches: number;
    tries: number;
    conversions: number;
    penalties: number;
  };
  bio: string;
}

export interface Match {
  id: string;
  homeTeamId: string;
  awayTeamId: string;
  date: string;
  venue: string;
  status: 'upcoming' | 'live' | 'completed';
  score?: {
    homeTeam: number;
    awayTeam: number;
  };
  highlights?: string[];
}

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  author: string;
  publishDate: string;
  tags: string[];
  relatedTeamIds: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  favoriteTeamId?: string;
  profileImage?: string;
  subscriptionStatus: 'free' | 'premium';
}
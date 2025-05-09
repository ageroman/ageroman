import { Team, Player, Match, NewsArticle } from '../types';

export const teams: Team[] = [
  {
    id: 't1',
    name: 'Kenya Simbas',
    logo: 'https://images.pexels.com/photos/2307/lion-animal-wilderness-african.jpg?auto=compress&cs=tinysrgb&w=600',
    primaryColor: '#E03C31',
    secondaryColor: '#000000',
    description: 'The Kenya national rugby union team represents Kenya in men\'s international rugby union competitions. The team is also known as the Simbas, which is the Swahili word for lion.',
    foundedYear: 1970
  },
  {
    id: 't2',
    name: 'Kenya Sevens',
    logo: 'https://images.pexels.com/photos/847306/pexels-photo-847306.jpeg?auto=compress&cs=tinysrgb&w=600',
    primaryColor: '#1A8753',
    secondaryColor: '#FFB81C',
    description: 'The Kenya national rugby sevens team competes in the World Rugby Sevens Series, the Rugby World Cup Sevens, and the Commonwealth Games.',
    foundedYear: 1997
  },
  {
    id: 't3',
    name: 'Kabras Sugar RFC',
    logo: 'https://images.pexels.com/photos/939702/pexels-photo-939702.jpeg?auto=compress&cs=tinysrgb&w=600',
    primaryColor: '#FFB81C',
    secondaryColor: '#000000',
    description: 'Kabras Sugar Rugby Football Club is a Kenyan rugby club based in Kakamega. The club plays in the Kenya Cup, the top level of rugby in Kenya.',
    foundedYear: 2011
  },
  {
    id: 't4',
    name: 'Kenya Harlequins',
    logo: 'https://images.pexels.com/photos/50713/football-ball-sport-soccer-50713.jpeg?auto=compress&cs=tinysrgb&w=600',
    primaryColor: '#2D3E50',
    secondaryColor: '#E74C3C',
    description: 'Kenya Harlequin Football Club, commonly known as Quins, is a rugby club based in Nairobi, Kenya. It is one of the oldest rugby clubs in Kenya.',
    foundedYear: 1952
  }
];

export const players: Player[] = [
  {
    id: 'p1',
    name: 'Collins Injera',
    position: 'Wing',
    teamId: 't2',
    imageUrl: 'https://images.pexels.com/photos/1978505/pexels-photo-1978505.jpeg?auto=compress&cs=tinysrgb&w=600',
    jerseyNumber: 11,
    stats: {
      matches: 271,
      tries: 279,
      conversions: 0,
      penalties: 0
    },
    bio: 'Collins Injera is a Kenyan rugby sevens player. He is Kenya\'s all-time highest try scorer in the World Rugby Sevens Series and is second in the world behind England\'s Dan Norton.'
  },
  {
    id: 'p2',
    name: 'Andrew Amonde',
    position: 'Forward',
    teamId: 't2',
    imageUrl: 'https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=600',
    jerseyNumber: 8,
    stats: {
      matches: 358,
      tries: 113,
      conversions: 0,
      penalties: 0
    },
    bio: 'Andrew Amonde is a Kenyan rugby sevens player. He has captained the Kenya Sevens team and has represented Kenya at multiple Commonwealth Games and Rugby World Cup Sevens tournaments.'
  },
  {
    id: 'p3',
    name: 'Billy Odhiambo',
    position: 'Center',
    teamId: 't2',
    imageUrl: 'https://images.pexels.com/photos/1325766/pexels-photo-1325766.jpeg?auto=compress&cs=tinysrgb&w=600',
    jerseyNumber: 12,
    stats: {
      matches: 232,
      tries: 121,
      conversions: 0,
      penalties: 0
    },
    bio: 'Billy "The Kid" Odhiambo is a Kenyan rugby sevens player known for his speed and agility. He has been a key player for the Kenya Sevens team in international tournaments.'
  },
  {
    id: 'p4',
    name: 'Oscar Ayodi',
    position: 'Flanker',
    teamId: 't1',
    imageUrl: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600',
    jerseyNumber: 7,
    stats: {
      matches: 187,
      tries: 78,
      conversions: 0,
      penalties: 0
    },
    bio: 'Oscar Ayodi is a Kenyan rugby player who has represented Kenya in both sevens and fifteens rugby. He is known for his work rate and defensive abilities.'
  },
  {
    id: 'p5',
    name: 'Darwin Mukidza',
    position: 'Full-back',
    teamId: 't4',
    imageUrl: 'https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=600',
    jerseyNumber: 15,
    stats: {
      matches: 145,
      tries: 45,
      conversions: 120,
      penalties: 85
    },
    bio: 'Darwin Mukidza is a Kenyan rugby player who plays for Kenya Harlequins and the Kenya national team. He is known for his goal-kicking abilities and leadership on the field.'
  }
];

export const matches: Match[] = [
  {
    id: 'm1',
    homeTeamId: 't1',
    awayTeamId: 't3',
    date: '2025-07-15T14:00:00Z',
    venue: 'RFUEA Ground, Nairobi',
    status: 'upcoming'
  },
  {
    id: 'm2',
    homeTeamId: 't2',
    awayTeamId: 't4',
    date: '2025-07-16T15:30:00Z',
    venue: 'Impala Club, Nairobi',
    status: 'upcoming'
  },
  {
    id: 'm3',
    homeTeamId: 't3',
    awayTeamId: 't4',
    date: '2025-07-10T13:00:00Z',
    venue: 'Kakamega Showground',
    status: 'completed',
    score: {
      homeTeam: 27,
      awayTeam: 15
    },
    highlights: [
      'https://images.pexels.com/photos/163444/sport-tack-men-run-163444.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/159555/football-american-football-running-back-player-159555.jpeg?auto=compress&cs=tinysrgb&w=600'
    ]
  },
  {
    id: 'm4',
    homeTeamId: 't1',
    awayTeamId: 't2',
    date: '2025-07-13T16:00:00Z',
    venue: 'Kasarani Stadium, Nairobi',
    status: 'live',
    score: {
      homeTeam: 14,
      awayTeam: 10
    }
  }
];

export const news: NewsArticle[] = [
  {
    id: 'n1',
    title: 'Kenya Sevens Qualify for 2026 World Cup',
    excerpt: 'The Kenya Sevens team has qualified for the 2026 Rugby World Cup Sevens after a stellar performance in the Africa Cup.',
    content: 'The Kenya Sevens team has secured their spot in the 2026 Rugby World Cup Sevens after a dominant performance in the Africa Cup held in South Africa. The team went unbeaten throughout the tournament, showcasing their skill and determination.\n\nCaptain Nelson Oyoo expressed his pride in the team\'s performance, stating, "This is a result of hard work and dedication from every player and staff member. We are excited to represent Kenya on the world stage once again."\n\nThe Rugby World Cup Sevens will be held in Australia, and Kenya will be hoping to improve on their previous performances in the tournament.',
    imageUrl: 'https://images.pexels.com/photos/163398/football-american-game-runner-163398.jpeg?auto=compress&cs=tinysrgb&w=600',
    author: 'Michael Kwambo',
    publishDate: '2025-07-10T09:15:00Z',
    tags: ['Kenya Sevens', 'World Cup', 'Qualification'],
    relatedTeamIds: ['t2']
  },
  {
    id: 'n2',
    title: 'Kabras Sugar Clinch Fifth Consecutive Kenya Cup Title',
    excerpt: 'Kabras Sugar RFC defeated Kenya Harlequins in a thrilling final to win their fifth consecutive Kenya Cup title.',
    content: 'Kabras Sugar RFC continued their dominance in Kenyan rugby by securing their fifth consecutive Kenya Cup title with a hard-fought victory over Kenya Harlequins at the Kakamega Showground.\n\nThe match was a tense affair, with both teams showing tremendous skill and determination. Kabras Sugar eventually emerged victorious with a score of 28-24, thanks to a late try by their captain Dan Sikuta.\n\nKabras Sugar head coach Jerome Muller praised his team\'s resilience, saying, "The boys showed great character today. Quins pushed us all the way, but our experience in these big matches helped us get over the line."\n\nThis victory further cements Kabras Sugar\'s status as the dominant force in Kenyan club rugby.',
    imageUrl: 'https://images.pexels.com/photos/47730/the-ball-stadion-horn-corner-47730.jpeg?auto=compress&cs=tinysrgb&w=600',
    author: 'Daniel Okwayo',
    publishDate: '2025-07-08T14:30:00Z',
    tags: ['Kabras Sugar', 'Kenya Cup', 'Kenya Harlequins'],
    relatedTeamIds: ['t3', 't4']
  },
  {
    id: 'n3',
    title: 'Kenya Simbas Announce Squad for Africa Cup',
    excerpt: 'The Kenya Simbas have named a strong squad for the upcoming Africa Cup, which serves as a qualifier for the 2026 Rugby World Cup.',
    content: 'The Kenya Rugby Union has announced a 32-man squad for the upcoming Africa Cup, which will be held in Madagascar next month. The tournament serves as a qualifier for the 2026 Rugby World Cup.\n\nThe squad features a blend of experienced players and promising young talent, with several players from the Kenya Sevens program included. The team will be captained by veteran lock Malcolm Onsando.\n\nKenya Simbas head coach Paul Odera expressed confidence in his squad, stating, "We have selected a strong group of players who we believe can secure qualification for the World Cup. The blend of youth and experience in the squad gives us a good balance."\n\nThe Africa Cup will be a challenging tournament, with teams like Namibia, Zimbabwe, and Algeria also vying for World Cup qualification.',
    imageUrl: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=600',
    author: 'Linda Adhiambo',
    publishDate: '2025-07-05T11:45:00Z',
    tags: ['Kenya Simbas', 'Africa Cup', 'World Cup Qualification'],
    relatedTeamIds: ['t1']
  }
];
import { Article, Category } from '../types';

// Mock Data
const MOCK_ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Lok Sabha Election 2024: PM Modi addresses massive rally in Varanasi, outlines vision for next 5 years',
    summary: 'Prime Minister Narendra Modi on Tuesday addressed a massive gathering in Varanasi...',
    content: 'Prime Minister Narendra Modi on Tuesday addressed a massive gathering in Varanasi, highlighting the achievements of his government over the past decade. He emphasized infrastructure growth, digital revolution, and social welfare schemes. "This election is about continuity and taking India to new heights," PM Modi stated amidst loud cheers. Opposition parties, however, have criticized the speech, claiming lack of focus on unemployment.',
    imageUrl: 'https://picsum.photos/800/450?random=1',
    category: 'Politics',
    publishedAt: '2024-05-21T10:00:00Z',
    author: 'Bureau'
  },
  {
    id: '2',
    title: 'IPL 2024: Virat Kohli smashes another century, RCB qualifies for playoffs in dramatic fashion',
    summary: 'Royal Challengers Bengaluru secured a playoff spot after a thrilling victory against CSK...',
    content: 'In a do-or-die match, Virat Kohli once again proved his mettle by scoring a magnificent century off 58 balls. The innings propelled RCB to a massive total. The bowlers then held their nerve to restrict CSK, ensuring RCB a spot in the top 4. Fans erupted in joy at the Chinnaswamy Stadium.',
    imageUrl: 'https://picsum.photos/800/450?random=2',
    category: 'Cricket',
    publishedAt: '2024-05-20T22:30:00Z',
    author: 'Sports Desk'
  },
  {
    id: '3',
    title: 'Stock Market Live: Sensex surges 500 points, Nifty crosses 22,500 mark amid global cues',
    summary: 'Indian benchmark indices opened on a strong note on Wednesday tracking positive global cues...',
    content: 'The BSE Sensex surged over 500 points in early trade, led by gains in banking and IT stocks. The Nifty 50 also reclaimed the 22,500 level. Analysts attribute the rally to cooling US inflation data and strong domestic earnings reports.',
    imageUrl: 'https://picsum.photos/800/450?random=3',
    category: 'Business',
    publishedAt: '2024-05-22T09:15:00Z',
    author: 'Biz News'
  },
  {
    id: '4',
    title: 'Weather Update: Heavy rainfall predicted in Kerala and Karnataka, Orange alert issued',
    summary: 'IMD has issued an orange alert for several districts in Kerala as pre-monsoon showers intensify...',
    content: 'The India Meteorological Department (IMD) has predicted heavy to very heavy rainfall in parts of Kerala and coastal Karnataka over the next 48 hours. Fishermen have been advised not to venture into the sea. Disaster management teams are on standby.',
    imageUrl: 'https://picsum.photos/800/450?random=4',
    category: 'Nation',
    publishedAt: '2024-05-22T08:00:00Z',
    author: 'Weather Bureau'
  },
  {
    id: '5',
    title: 'Cannes 2024: Aishwarya Rai Bachchan stuns in golden gown, internet divided over the look',
    summary: 'Bollywood diva Aishwarya Rai Bachchan made her second appearance on the Cannes red carpet...',
    content: 'Aishwarya Rai Bachchan walked the red carpet at the 77th Cannes Film Festival in a custom Falguni Shane Peacock gown. While many fans praised her confidence and aura, some fashion critics were divided on the choice of outfit. The actress waved to the paparazzi and posed with her signature elegance.',
    imageUrl: 'https://picsum.photos/800/450?random=5',
    category: 'Entertainment',
    publishedAt: '2024-05-18T14:20:00Z',
    author: 'Ent Desk'
  },
   {
    id: '6',
    title: 'Tech News: Google announces new AI features for Android at I/O event',
    summary: 'Google showcased Gemini Nano and other AI integrations coming to Android 15...',
    content: 'At the annual I/O developer conference, Google announced a slew of AI features powered by its Gemini model. These include better context awareness in Google Assistant, on-device fraud detection, and generative AI wallpapers. The updates will roll out with Android 15 later this year.',
    imageUrl: 'https://picsum.photos/800/450?random=6',
    category: 'Technology',
    publishedAt: '2024-05-15T18:00:00Z',
    author: 'Tech Staff'
  },
  {
    id: '7',
    title: 'Horoscope Today: Check astrological predictions for Aries, Taurus, Gemini',
    summary: 'Find out what the stars have in store for you today...',
    content: 'Aries: Today is a good day for financial investments. Taurus: Avoid unnecessary arguments with family. Gemini: Health needs attention, drink plenty of water.',
    imageUrl: 'https://picsum.photos/800/450?random=7',
    category: 'Astrology',
    publishedAt: '2024-05-22T06:00:00Z',
    author: 'Astro Team'
  }
];

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Home', slug: '/' },
  { id: '2', name: 'Nation', slug: 'nation' },
  { id: '3', name: 'Cricket', slug: 'cricket' },
  { id: '4', name: 'Entertainment', slug: 'entertainment' },
  { id: '5', name: 'Business', slug: 'business' },
  { id: '6', name: 'Astrology', slug: 'astrology' },
  { id: '7', name: 'Technology', slug: 'technology' },
  { id: '8', name: 'Lifestyle', slug: 'lifestyle' },
];

export const getTopStories = async (): Promise<Article[]> => {
  // Simulate API delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_ARTICLES);
    }, 500);
  });
};

export const getArticleById = async (id: string): Promise<Article | undefined> => {
   return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_ARTICLES.find(a => a.id === id));
    }, 300);
  });
};

export const getArticlesByCategory = async (category: string): Promise<Article[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(MOCK_ARTICLES.filter(a => a.category.toLowerCase() === category.toLowerCase()));
        }, 500);
    });
};
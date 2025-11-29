import React, { useEffect, useState } from 'react';
import { SEO } from '../components/SEO';
import { getTopStories } from '../services/newsService';
import { Article } from '../types';
import { NewsCard } from '../components/NewsCard';

export const HomePage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  // Simulating getStaticProps or getServerSideProps data fetching behavior
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTopStories();
        setArticles(data);
      } catch (error) {
        console.error("Failed to fetch articles", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#cc0000]"></div>
        </div>
    );
  }

  const featuredArticle = articles[0];
  const topStories = articles.slice(1, 4);
  const sidebarStories = articles.slice(4);

  return (
    <>
      <SEO 
        title="Latest Hindi News" 
        description="Read latest Hindi News, Breaking News in Hindi, Cricket News, Bollywood News, Politics News and more on LiveHindustan Clone." 
      />
      
      <main className="container mx-auto px-4 py-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Top Stories List (Hidden on Mobile, visible on LG) */}
            <div className="hidden lg:block lg:col-span-3">
                 <div className="bg-white p-4 border rounded shadow-sm">
                    <h2 className="text-lg font-black border-l-4 border-[#cc0000] pl-2 mb-4 uppercase">Top News</h2>
                    <div className="flex flex-col gap-4">
                        {topStories.map(article => (
                            <NewsCard key={article.id} article={article} variant="compact" />
                        ))}
                    </div>
                 </div>
            </div>

            {/* Center Column: Featured Story & Main Feed */}
            <div className="col-span-1 lg:col-span-6">
                {featuredArticle && <NewsCard article={featuredArticle} variant="featured" />}
                
                {/* Mobile only Top Stories list */}
                <div className="lg:hidden mb-8">
                     {topStories.map(article => (
                        <NewsCard key={article.id} article={article} variant="compact" />
                     ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    {articles.slice(2, 6).map(article => (
                        <NewsCard key={`std-${article.id}`} article={article} variant="standard" />
                    ))}
                </div>
            </div>

            {/* Right Column: Sidebar / Trending */}
            <div className="col-span-1 lg:col-span-3 space-y-8">
                {/* Trending Widget */}
                <div className="bg-white border rounded shadow-sm overflow-hidden">
                    <div className="bg-gray-100 p-3 border-b">
                        <h2 className="text-lg font-bold text-gray-800">Trending Now</h2>
                    </div>
                    <div className="p-4">
                        {sidebarStories.map((article, idx) => (
                            <div key={article.id} className="flex gap-3 mb-4 last:mb-0 items-center">
                                <span className="text-3xl font-black text-gray-200">{idx + 1}</span>
                                <NewsCard article={article} variant="sidebar" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Ad Placeholder */}
                <div className="bg-gray-200 h-64 flex items-center justify-center text-gray-400 text-sm font-semibold rounded">
                    Advertisement
                </div>

                {/* Web Stories / Visual Widget */}
                <div className="bg-black text-white p-4 rounded">
                     <h2 className="text-lg font-bold mb-4 border-l-4 border-[#cc0000] pl-2">Web Stories</h2>
                     <div className="grid grid-cols-2 gap-2">
                        <div className="aspect-[9/16] bg-gray-800 rounded"></div>
                        <div className="aspect-[9/16] bg-gray-800 rounded"></div>
                     </div>
                </div>
            </div>
        </div>

        {/* Section: Entertainment */}
        <section className="mt-12 border-t pt-8">
             <div className="flex justify-between items-center mb-6">
                 <h2 className="text-2xl font-black text-[#cc0000] uppercase">Entertainment</h2>
                 <button className="text-sm font-bold text-gray-600 hover:text-[#cc0000]">View All &rarr;</button>
             </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                 {articles.filter(a => a.category === 'Entertainment' || true).slice(0, 4).map(article => (
                     <NewsCard key={`ent-${article.id}`} article={article} variant="standard" />
                 ))}
             </div>
        </section>

      </main>
    </>
  );
};
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleById, getTopStories } from '../services/newsService';
import { Article } from '../types';
import { SEO } from '../components/SEO';
import { NewsCard } from '../components/NewsCard';

export const ArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      window.scrollTo(0, 0); // Reset scroll on navigation
      if (id) {
        const data = await getArticleById(id);
        const allStories = await getTopStories();
        setArticle(data || null);
        setRelatedArticles(allStories.filter(a => a.id !== id).slice(0, 5));
      }
      setLoading(false);
    };
    fetchData();
  }, [id]);

  if (loading) {
     return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#cc0000]"></div>
        </div>
    );
  }

  if (!article) {
    return <div className="container mx-auto p-8 text-center">Article not found.</div>;
  }

  return (
    <>
      <SEO title={article.title} description={article.summary} />
      
      <main className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Main Article Content */}
              <article className="col-span-1 lg:col-span-8 bg-white p-0 md:p-6 rounded shadow-sm">
                  {/* Breadcrumb */}
                  <div className="text-sm text-gray-500 mb-4">
                      Home <span className="mx-1">/</span> {article.category} <span className="mx-1">/</span> {article.title}
                  </div>

                  <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 leading-tight">
                      {article.title}
                  </h1>

                  <div className="flex items-center text-sm text-gray-500 mb-6 border-b pb-4">
                      <span className="font-bold text-[#cc0000] mr-2">{article.author}</span>
                      <span>| Published: {new Date(article.publishedAt).toLocaleDateString()}</span>
                  </div>

                  <div className="mb-6">
                      <img 
                        src={article.imageUrl} 
                        alt={article.title} 
                        className="w-full h-auto rounded object-cover max-h-[500px]"
                      />
                      <p className="text-xs text-gray-400 mt-2 italic">Image for representation only.</p>
                  </div>

                  <div className="prose max-w-none text-gray-800 leading-relaxed text-lg">
                      <p className="font-bold mb-4">{article.summary}</p>
                      <p>{article.content}</p>
                      <p className="mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                      <div className="my-8 p-4 bg-gray-50 border-l-4 border-[#cc0000]">
                          <p className="italic font-medium">"This is a highlighted quote from the article meant to draw the reader's attention to a specific point."</p>
                      </div>
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                  </div>

                  {/* Tags (Mock) */}
                  <div className="mt-8 flex flex-wrap gap-2">
                      {['News', 'India', article.category, 'Update'].map(tag => (
                          <span key={tag} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-gray-200">
                              #{tag}
                          </span>
                      ))}
                  </div>
              </article>

              {/* Sidebar */}
              <aside className="col-span-1 lg:col-span-4 space-y-8">
                  <div className="bg-white p-4 border rounded shadow-sm">
                      <h3 className="text-xl font-bold mb-4 border-b pb-2">Must Read</h3>
                      <div className="flex flex-col gap-4">
                          {relatedArticles.map(rel => (
                              <NewsCard key={rel.id} article={rel} variant="compact" />
                          ))}
                      </div>
                  </div>

                  <div className="sticky top-24">
                        <div className="bg-blue-50 p-6 rounded text-center border border-blue-100">
                            <h4 className="font-bold text-lg mb-2">Subscribe to Newsletter</h4>
                            <p className="text-sm text-gray-600 mb-4">Get the latest news delivered to your inbox.</p>
                            <input type="email" placeholder="Your email address" className="w-full p-2 border rounded mb-2" />
                            <button className="w-full bg-[#cc0000] text-white font-bold py-2 rounded hover:bg-red-700 transition">Subscribe</button>
                        </div>
                  </div>
              </aside>
          </div>
      </main>
    </>
  );
};
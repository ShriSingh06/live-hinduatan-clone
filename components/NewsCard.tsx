import React from 'react';
import { Article } from '../types';
import { Link } from 'react-router-dom';

interface NewsCardProps {
  article: Article;
  variant?: 'featured' | 'standard' | 'compact' | 'sidebar';
}

export const NewsCard: React.FC<NewsCardProps> = ({ article, variant = 'standard' }) => {
  if (variant === 'featured') {
    return (
        <Link to={`/article/${article.id}`} className="group block mb-6">
            <div className="relative overflow-hidden rounded-lg shadow-md aspect-video">
                <img 
                    src={article.imageUrl} 
                    alt={article.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent p-4 md:p-6 text-white">
                    <span className="bg-[#cc0000] text-xs font-bold px-2 py-1 rounded mb-2 inline-block">
                        {article.category}
                    </span>
                    <h2 className="text-xl md:text-3xl font-bold leading-tight group-hover:text-red-200 transition-colors">
                        {article.title}
                    </h2>
                </div>
            </div>
        </Link>
    );
  }

  if (variant === 'compact') {
      return (
          <Link to={`/article/${article.id}`} className="group flex gap-3 mb-4 items-start border-b pb-4 last:border-0 border-gray-100">
              <div className="w-24 h-16 flex-shrink-0 overflow-hidden rounded">
                  <img 
                      src={article.imageUrl} 
                      alt={article.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                      loading="lazy"
                  />
              </div>
              <div>
                  <h3 className="text-sm font-semibold line-clamp-2 leading-snug group-hover:text-[#cc0000]">
                      {article.title}
                  </h3>
              </div>
          </Link>
      );
  }

  if (variant === 'sidebar') {
    return (
        <Link to={`/article/${article.id}`} className="group block mb-4 border-b border-gray-100 pb-2 last:border-0">
             <h3 className="text-sm font-bold text-gray-800 leading-snug group-hover:text-[#cc0000]">
                {article.title}
            </h3>
            <span className="text-[10px] text-gray-500 mt-1 block uppercase">{article.category}</span>
        </Link>
    );
  }

  // Standard
  return (
    <Link to={`/article/${article.id}`} className="group block mb-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100">
        <div className="aspect-[16/9] overflow-hidden">
             <img 
                src={article.imageUrl} 
                alt={article.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
            />
        </div>
        <div className="p-4">
             <span className="text-[#cc0000] text-xs font-bold uppercase tracking-wider mb-1 block">
                {article.category}
            </span>
            <h3 className="text-lg font-bold leading-tight mb-2 group-hover:text-[#cc0000] transition-colors">
                {article.title}
            </h3>
            <p className="text-gray-600 text-sm line-clamp-2">
                {article.summary}
            </p>
        </div>
    </Link>
  );
};
import React, { useEffect } from 'react';
import { SEOProps } from '../types';

export const SEO: React.FC<SEOProps> = ({ title, description }) => {
  useEffect(() => {
    document.title = `${title} | LiveHindustan Clone`;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    return () => {
        // Cleanup if necessary, though usually not needed for title in SPA as next page overwrites
    };
  }, [title, description]);

  return null;
};
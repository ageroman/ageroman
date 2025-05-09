import React from 'react';
import { news } from '../data/mockData';
import { Card, CardBody } from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';

export default function NewsPage() {
  // Format date for display
  const formatPublishDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };
  
  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="heading-2 text-gray-900 mb-4">
            Rugby <span className="text-primary">News</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest news, stories, and developments in Kenyan rugby.
          </p>
        </div>
        
        {/* Featured Article */}
        <div className="mb-12">
          <div className="bg-white rounded-xl overflow-hidden shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-auto overflow-hidden">
                <img 
                  src={news[0].imageUrl} 
                  alt={news[0].title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="primary">{news[0].tags[0]}</Badge>
                  <span className="text-sm text-gray-500">{formatPublishDate(news[0].publishDate)}</span>
                </div>
                
                <h2 className="text-2xl font-bold mb-4">{news[0].title}</h2>
                <p className="text-gray-600 mb-6">{news[0].excerpt}</p>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">By {news[0].author}</span>
                  <Button variant="primary">
                    Read Full Article
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* News Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.slice(1).map((article) => (
            <Card key={article.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="h-48 overflow-hidden">
                <img 
                  src={article.imageUrl} 
                  alt={article.title} 
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardBody className="flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="primary">{article.tags[0]}</Badge>
                  <span className="text-sm text-gray-500">{formatPublishDate(article.publishDate)}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-2 line-clamp-2">{article.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                
                <div className="mt-auto flex justify-between items-center">
                  <span className="text-sm text-gray-500">By {article.author}</span>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-primary border-primary hover:bg-primary/10"
                  >
                    Read More
                  </Button>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
        
        {/* Load More Button */}
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            Load More Articles
          </Button>
        </div>
      </div>
    </div>
  );
}
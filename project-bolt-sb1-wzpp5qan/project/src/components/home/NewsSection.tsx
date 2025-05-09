import React from 'react';
import { news } from '../../data/mockData';
import { Card, CardBody } from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { ChevronRight } from 'lucide-react';

export default function NewsSection() {
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="heading-3 text-gray-900">
            Latest <span className="text-primary">Rugby News</span>
          </h2>
          <Button 
            variant="outline" 
            className="flex items-center"
            onClick={() => console.log('View all news')}
          >
            View All <ChevronRight size={16} className="ml-1" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article) => (
            <Card key={article.id} className="h-full hover:shadow-lg transition-shadow">
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
      </div>
    </section>
  );
}
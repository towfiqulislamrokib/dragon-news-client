import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewssummaryCard from '../../Shared/NewssummaryCard/NewssummaryCard';

const Category = () => {

  const categoryNews = useLoaderData();
    
    return (
        <div>
          <h4>This category has news {categoryNews.length}</h4>
          {
            categoryNews.map(news => <NewssummaryCard
             key={news._id}
             news={news}
            ></NewssummaryCard>)
          }
        </div>
    );
};

export default Category;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewssummaryCard from '../../Shared/NewssummaryCard/NewssummaryCard';

const Home = () => {
    const allnews = useLoaderData();
    return (
        <div>
            <h2>This is home news: {allnews.length}</h2>
            {
            allnews.map( news => <NewssummaryCard
            key={news._id}
            news = {news}
            >

            </NewssummaryCard>)
        }
        </div>
        
    );
};

export default Home;
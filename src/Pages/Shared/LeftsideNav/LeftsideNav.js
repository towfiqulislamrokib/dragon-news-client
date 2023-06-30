import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Leftsidenav = () => {
    const [categories, setCategories] = useState([]);
    useEffect( () => {
        fetch('https://dragon-news-server-psi-henna.vercel.app/news-categories')
        .then(res => res.json())
        .then( data => setCategories(data));
    } ,[])
    return (
        <div>
            <h4>All categories</h4>
            <div>
                {
                    categories.map(category => <p
                    key={category.id}>
                    <Link to={`/category/${category.id}`}>{category.name}</Link>
                

                    </p>)
                }
            </div>
        </div>
    );
};

export default Leftsidenav;
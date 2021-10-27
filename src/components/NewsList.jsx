import React from 'react'
import News from './News';


const NewsList = ({news}) =>  ( 
    <div className="row">
        {news.map(notice => (
            <News 
            key={notice.url}
            notice={notice}
            />
        ))}
    </div>
);


 
export default NewsList;
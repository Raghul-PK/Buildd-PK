import React from 'react';

import CardBottomBar from './CardBottomBar';
import CardTopBar from './CardTopBar';

const CaseStudiesCard = (props) => {
  const {post_data} = props;

  return (
    <div className="post-card">
        <CardTopBar author={post_data.card_content.author} coins={post_data.coins}/>

        <div className='case-card'>
            <img id='case-img' src={post_data.card_content.img_path} alt={post_data.card_content.img_alt_text} />
            <div id='case-details'>
                <p className='title'>{post_data.card_content.title}</p>
                <p className='abstract'>{post_data.card_content.abstract}</p>
            </div>
        </div>
        
        <CardBottomBar likes={post_data.likes_count} bookmarks={post_data.bookmarks_count} comments={post_data.comments_count}/>
    </div>
  )
}

export default CaseStudiesCard

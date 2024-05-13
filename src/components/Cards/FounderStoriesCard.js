import React from 'react';

import CardBottomBar from './CardBottomBar';
import CardTopBar from './CardTopBar';

const FounderStoriesCard = (props) => {
  const {post_data} = props;

  return (
    <div className="post-card">
        <CardTopBar author={post_data.card_content.author} coins={post_data.coins}/>

        <div className='founder-card'>
            <img id='founder-img' src={post_data.card_content.img_path} alt={post_data.card_content.img_alt_text} />
            <div id='founder-details'>
                <p className='name'>{post_data.card_content.name}</p>
                <p className='designation'>{post_data.card_content.designation}</p>
                <p className='abstract'>{post_data.card_content.abstract}</p>
            </div>
        </div>
        
        <CardBottomBar likes={post_data.likes_count} bookmarks={post_data.bookmarks_count} comments={post_data.comments_count}/>
    </div>
  )
}

export default FounderStoriesCard

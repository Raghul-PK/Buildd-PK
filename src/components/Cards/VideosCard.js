import React from 'react';

import CardBottomBar from './CardBottomBar';
import CardTopBar from './CardTopBar';

import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';

const VideosCard = (props) => {
  const {post_data} = props;

  return (
    <div className="post-card">
        <CardTopBar author={post_data.card_content.author} coins={post_data.coins}/>

        <div className='shorts-card'>
            <img src={post_data.card_content.img_path} alt={post_data.card_content.img_alt_text} />
            <PlayCircleFilledOutlinedIcon className='top-img' style={{ color: '#FEFFC1', fontSize: '5rem', position: 'absolute', top:'50%', left: '50%', transform: 'translate(-50%, -50%)'}}/>
        </div>
        
        <CardBottomBar likes={post_data.likes_count} bookmarks={post_data.bookmarks_count} comments={post_data.comments_count}/>
    </div>
  )
}

export default VideosCard

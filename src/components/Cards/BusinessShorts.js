import React from 'react';

import CardBottomBar from './CardBottomBar';
import CardTopBar from './CardTopBar';

import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';

const BusinessShortsCard = () => {
  return (
    <div className="post-card">
        <CardTopBar/>

        <div className='shorts-card'>
            <img src="images/postCards/BusinessShorts/VideoThumbnail.jpg" alt={""} />
            <PlayCircleFilledOutlinedIcon className='top-img' style={{ color: '#FEFFC1', fontSize: '5rem', position: 'absolute', top:'50%', left: '50%', transform: 'translate(-50%, -50%)'}}/>
        </div>
        
        <CardBottomBar/>
    </div>
  )
}

export default BusinessShortsCard

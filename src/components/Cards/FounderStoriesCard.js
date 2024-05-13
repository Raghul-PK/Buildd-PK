import React from 'react';

import CardBottomBar from './CardBottomBar';
import CardTopBar from './CardTopBar';

const FounderStoriesCard = () => {
  return (
    <div className="post-card">
        <CardTopBar/>

        <div className='founder-card'>
            <img id='founder-img' src="images/postCards/FounderStories/RishabhJalan.jpg" alt={"Rishabh Jalan"} />
            <div id='founder-details'>
                <p className='name'>Rishabh Jalan</p>
                <p className='designation'>Founder, ZyngAI</p>
                <p className='abstract'>Built a successful company after attempting to build 3 companies during his college times</p>
            </div>
        </div>
        
        <CardBottomBar/>
    </div>
  )
}

export default FounderStoriesCard

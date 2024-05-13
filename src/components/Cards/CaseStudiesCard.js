import React from 'react';

import CardBottomBar from './CardBottomBar';
import CardTopBar from './CardTopBar';

const CaseStudiesCard = () => {
  return (
    <div className="post-card">
        <CardTopBar/>

        <div className='case-card'>
            <img id='case-img' src="images/postCards/CaseStudies/Zerodha.png" alt={"Zerodha"} />
            <div id='case-details'>
                <p className='title'>How Zerodha transformed a 145-year old broking industry ?</p>
                <p className='abstract'>Zerodha, a unicorn, bootstrapped startup saw record high revenue in FY22. It’s profits jumped by 50% with ZERO marketing spend. So, how did they do this ? Let’s  find out !</p>
            </div>
        </div>
        
        <CardBottomBar/>
    </div>
  )
}

export default CaseStudiesCard

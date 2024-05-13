import React from 'react'

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const CardTopBar = (props) => {
  const {author, coins} = props;

  return (
    <div className="post-card-top-bar">
        <div id="author">
            <PersonOutlineOutlinedIcon style={{ fontSize: '2rem' }}/>
            <p>{author}</p>
        </div>
        <div id="coins">
            <p style={{ fontSize: '1.5rem', marginRight:'2px' }}>Claim</p>
            <MonetizationOnOutlinedIcon style={{ fontSize: '2rem' }}/>
            <p style={{ fontSize: '1.5rem' }}>{coins}</p>
        </div>
    </div>
  )
}

export default CardTopBar

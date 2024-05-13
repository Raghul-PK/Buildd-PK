import React from 'react'

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const CardTopBar = () => {
  return (
    <div className="post-card-top-bar">
        <div id="author">
            <PersonOutlineOutlinedIcon style={{ fontSize: '2rem' }}/>
            <p>Karthik Sridharan</p>
        </div>
        <div id="coins">
            <p style={{ fontSize: '1.5rem', marginRight:'2px' }}>Claim</p>
            <MonetizationOnOutlinedIcon style={{ fontSize: '2rem' }}/>
            <p style={{ fontSize: '1.5rem' }}>75</p>
        </div>
    </div>
  )
}

export default CardTopBar

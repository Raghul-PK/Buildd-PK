import React from 'react'

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';

const CardBottomBar = () => {
  return (
    <div className="post-card-bottom-bar">
        <div id="likeButton">
            <FavoriteBorderIcon style={{ fontSize: '2rem' }}/>
            <p style={{ fontSize: '1.5rem' }}>347</p>
        </div>
        <div id="BookmarkButton">
            <BookmarkBorderIcon style={{ fontSize: '2rem' }}/>
            <p style={{ fontSize: '1.5rem' }}>20</p>
        </div>
        <div id="CommentButton">
            <CommentOutlinedIcon style={{ fontSize: '2rem' }}/>
            <p style={{ fontSize: '1.5rem' }}>10</p>
        </div>
    </div>
  )
}

export default CardBottomBar

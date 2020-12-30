import React from 'react'
import "./SwipeButtons.css"
import ReplayIcon from '@material-ui/icons/Replay';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';

function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <IconButton className='repeat_Btn'>
                <ReplayIcon fontSize='large'/>
            </IconButton>
            <IconButton className='left_Btn'>
                <CloseIcon fontSize='large'/>
            </IconButton>
            <IconButton className='star_Btn'>
                <StarRateIcon fontSize='large'/>
            </IconButton>
            <IconButton className='right_Btn'>
                <FavoriteIcon fontSize='large'/>
            </IconButton>
            <IconButton className='lightning_Btn'>
                <FlashOnIcon fontSize='large'/>
            </IconButton>
        </div>
    )
}

export default SwipeButtons

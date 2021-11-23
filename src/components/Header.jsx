import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Badge } from "@mui/material";
import { ChatBubbleOutlineRounded, ForumOutlined } from "@mui/icons-material";
import '../style/App.css';


export const Header = ({ name, chatLength, chartsCount }) => {

    return (
        <AppBar position='absolute'>
            <Toolbar >
                <Typography variant='h5' className='text-focus-in'>
                    Hi! This`s {name} chat
                    <Typography variant='h6' component='span'>😀</Typography>
                </Typography>
                <IconButton
                    color='inherit'
                    sx={{ flexGrow: 1, justifyContent: 'right', borderRadius: 0 }}
                    className='text-focus-in corrections'
                >
                    <Badge
                        className='chatIcon'
                        color='secondary'
                        badgeContent={chartsCount}>
                        <ForumOutlined />
                    </Badge>
                    <Badge
                        color='secondary'
                        badgeContent={chatLength}>
                        <ChatBubbleOutlineRounded />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar >
    )
}
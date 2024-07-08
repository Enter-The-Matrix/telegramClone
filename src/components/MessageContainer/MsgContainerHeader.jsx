import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import axios from 'axios';

export default function MsgContainerHeader({ chatId }) {
    const [chatData, setChatData] = useState(null); 
    const [senderName, setSenderName] = useState("Unknown User"); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${chatId}`);
                setChatData(response.data); 
                if (response.data && response.data.data && response.data.data.length > 0) {
                    for (let i = 0; i < response.data.data.length; i++) {
                        if (response.data.data[i].sender_id !== 1) {
                            setSenderName(response.data.data[i].sender.name || "Unknown User");
                            break;
                        }
                    }
                }
            } catch (error) {
                console.error('Error fetching chat data:', error);
            }
        };

        fetchData(); 
    }, [chatId]);

    return (
        <Box sx={{ width: '100%' }}>
            <AppBar position="static" sx={{ maxHeight: '55px', backgroundColor: '#212121', justifyContent: 'center' }}>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <div className='flex flex-row justify-center items-center gap-4 '>
                        <Avatar alt={senderName} src="/static/images/avatar/1.jpg"
                            className='cursor-pointer'
                            sx={{ width: 40, height: 40 }}
                        />
                        <div className='flex flex-col'>
                            <div className='text-xs font-semibold sm:text-sm'>
                                {senderName}
                            </div>
                            <div className='text-xs font-light sm:text-sm'>
                                last seen recently
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-row justify-center items-center gap-4 sm:gap-6'>
                        <div className='cursor-pointer rounded-full'>
                            <LocalPhoneOutlinedIcon />
                        </div>
                        <div className='cursor-pointer hidden sm:block'>
                            <SearchIcon />
                        </div>
                        <div className='cursor-pointer'>
                            <MoreVertIcon />
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import './sidebar.css';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';

function Sidebar({ onSelectUser, clearSelection }) {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        const fetchChats = async () => {
            try {
                const response = await axios.get('https://devapi.beyondchats.com/api/get_all_chats?page=1');
                setUsers(response.data.data.data);
            } catch (error) {
                console.error("There was an error fetching the users!", error);
            }
        };

        fetchChats();
    }, []);

    useEffect(() => {
        if (clearSelection) {
            setSelectedUser(null);
        }
    }, [clearSelection]);

    const handleUserClick = (user) => {
        if (selectedUser && selectedUser.id === user.id) {
            setSelectedUser(null);
        } else {
            setSelectedUser(user);
            onSelectUser(user);
        }
    };

    const formatDate = (dateTimeString) => {
        const dateTime = new Date(dateTimeString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = dateTime.toLocaleDateString(undefined, options);
        const time = dateTime.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
        return { date, time };
    };

    return (
        <div className='py-2 px-2 overflow-y-scroll custom-scrollbar'>
            {users.length > 0 ? (
                users.map(user => (
                    <div key={user.id}
                         className={`flex flex-row justify-between items-center py-2 px-4 cursor-pointer 
                                     ${selectedUser && selectedUser.id === user.id ? 'bg-[#8774E1] rounded-lg' : ''}
                                     ${selectedUser && selectedUser.id !== user.id ? 'hover:bg-[#2B2B2B] hover:rounded-lg' : ''}`}
                         onClick={() => handleUserClick(user)}>
                        <div className='flex flex-row gap-2'>
                            <Avatar alt={user.creator?.name||"-"} src="/static/images/avatar/1.jpg"
                            sx={{ width: 55, height: 55 }}/>
                            <div className='text-white'>{user.creator.name || user.created_by}</div>
                        </div>
                        <div className='text-white text-xs'>
                            {formatDate(user.updated_at).date} <br/>
                            {formatDate(user.updated_at).time}
                        </div>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
            <div className="absolute bottom-4 right-4">
                <Fab color="secondary" aria-label="edit">
                    <EditIcon/>
                </Fab>
            </div>
        </div>
    );
}

export default Sidebar;

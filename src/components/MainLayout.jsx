import React, { useState } from 'react';
import SidebarHeader from './Sidebar/SidebarHeader';
import MsgContainerHeader from './MessageContainer/MsgContainerHeader';
import messageContainerBg from '../assets/msgBg.jpg';
import Sidebar from './Sidebar/Sidebar';
import MsgContainerFooter from './MessageContainer/MsgContainerFooter';
import MessageContainer from './MessageContainer/MsgContainer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function MainLayout() {
    const [selectedContact, setSelectedContact] = useState(null);
    const [clearSelection, setClearSelection] = useState(false);
    const [messages, setMessages] = useState([]);

    const handleBackClick = () => {
        setSelectedContact(null);
        setClearSelection(true);
    };

    const handleUserSelect = (user) => {
        setSelectedContact(user);
        setClearSelection(false);
    };

    const handleSendMessage = (message) => {
        const newMessage = {
            sender_id: 1, // Assuming the current user has sender_id 1
            message,
            created_at: new Date().toISOString(),
        };
        setMessages([...messages, newMessage]);
    };

    return (
        <div className="flex w-full h-screen gap-[0.6px] bg-black">
            {/* Sidebar */}
            <div className={`flex flex-col w-full sm:max-w-[450px] sm:min-w-[300px] bg-[#212121] ${selectedContact && 'hidden sm:flex'}`}>
                <SidebarHeader />
                <Sidebar onSelectUser={handleUserSelect} clearSelection={clearSelection} />
            </div>
            {/* Message Container */}
            <div className={`flex flex-col h-full w-full bg-center bg-cover sm:w-full sm:min-w-[800px] bg-blue-500 ${!selectedContact && 'hidden sm:flex'}`}
                style={{ backgroundImage: `url(${messageContainerBg})` }}>
                {selectedContact && (
                    <>
                        <div className="flex border-l-2 border-black flex-row justify-center bg-[#212121] items-center">
                            <div className="sm:hidden">
                                <ArrowBackIcon sx={{ fontSize: '2.5rem', color: 'white' }} onClick={handleBackClick} className="static z-10 top-4 left-4 text-3xl p-2 rounded" />
                            </div>
                            <MsgContainerHeader chatId={selectedContact.id} />
                        </div>
                        <div className="flex flex-col flex-grow overflow-y-auto">
                            <div className="w-full flex justify-center items-center sm:px-28 text-white flex-grow">
                                <MessageContainer chatId={selectedContact.id} messages={messages} />
                            </div>
                        </div>
                        <div className="w-full">
                            <MsgContainerFooter onSendMessage={handleSendMessage} />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default MainLayout;

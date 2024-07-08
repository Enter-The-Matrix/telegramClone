import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

function MessageContainer({ chatId, messages }) {
  const [chatData, setChatData] = useState([]);
  const messageEndRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${chatId}`);
        setChatData(response.data.data);
      } catch (error) {
        console.error('Error fetching chat data:', error);
      }
    };

    fetchData();
  }, [chatId]);

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatData, messages]);

  const formatDate = (dateTimeString) => {
    const dateTime = new Date(dateTimeString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = dateTime.toLocaleDateString(undefined, options);
    const time = dateTime.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    return { date, time };
  };

  const combinedMessages = [...chatData, ...messages];

  return (
    <div className="h-full overflow-y-auto">
      {combinedMessages.map((chat, index) => (
        <div key={index} className={`chat ${chat.sender_id === 1 ? 'chat-end' : 'chat-start'}`}>
          <div className="chat-header">
            <time className="text-xs opacity-80">{`${formatDate(chat.created_at).date} at ${formatDate(chat.created_at).time}`}</time>
          </div>
          <div className={`chat-bubble text-white ${chat.sender_id === 1 ? 'bg-[#8774E1]' : ''}`}>
            {chat.message}
          </div>
        </div>
      ))}
      <div ref={messageEndRef} />
    </div>
  );
}

export default MessageContainer;

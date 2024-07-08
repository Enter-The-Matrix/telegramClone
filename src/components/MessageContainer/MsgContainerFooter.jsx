import React, { useState } from 'react';
import SentimentSatisfiedAltSharpIcon from '@mui/icons-material/SentimentSatisfiedAltSharp';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import NavigationRoundedIcon from '@mui/icons-material/NavigationRounded';
import MicIcon from '@mui/icons-material/Mic';

function MsgContainerFooter({ onSendMessage }) {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSendClick = () => {
        if (inputValue.trim() !== '') {
            onSendMessage(inputValue);
            setInputValue('');
        }
    };

    return (
        <div className="flex justify-center w-full">
            <div className="flex items-center bg-gray-800 p-2 rounded-lg w-full max-w-3xl">
                <button className="text-gray-400 ml-2">
                    <SentimentSatisfiedAltSharpIcon />
                </button>
                <input
                    type="text"
                    placeholder="Message"
                    value={inputValue}
                    onChange={handleInputChange}
                    className="bg-transparent flex-grow ml-2 text-gray-300 placeholder-gray-500 outline-none resize-none overflow-hidden"
                />
                <button className="ml-2 p-2 text-gray-400 rounded-full" style={{ transform: 'rotate(45deg)' }}>
                    <AttachFileIcon />
                </button>
                <button
                    onClick={handleSendClick}
                    className="ml-4 p-2 text-white rounded-full bg-[#8774E1] hover:bg-[#7c6ad4]"
                >
                    {inputValue ? (
                        <NavigationRoundedIcon style={{ fontSize: '25px' }} className="transform rotate-90" />
                    ) : (
                        <MicIcon style={{ fontSize: '25px' }} />
                    )}
                </button>
            </div>
        </div>
    );
}

export default MsgContainerFooter;

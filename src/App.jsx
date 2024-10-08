import React, { useState } from 'react';
import ChatBotStart from './components/chat-bot-start';
import ChatBotApp from './components/chat-bot-app';
import {v4 as uuidv4} from 'uuid';

const App = () => {
  const [isChatting, setIsChatting] = useState(false);
  const [chats, setChats] = useState([]);
  const [activeChat, setActiveChat] = useState(null);

  const handleStartChat = () => {
    setIsChatting(true);

    if (chats.length === 0) {
      createNewChat();
    }
  }

  const handleGoBack = () => {
    setIsChatting(false);
  }

  const createNewChat = () => {
    const newChat = {
      id: uuidv4(),
      displayId:`Chat ${new Date().toLocaleDateString("en-US")} 
        ${new Date().toLocaleTimeString()}`,
      messages: [],
    }
    const updatedChats = [newChat, ...chats];
    setChats(updatedChats);
    setActiveChat(newChat.id);
  }

  return (
    <div className="container">
      {isChatting ?
        (<ChatBotApp 
            onGoBack={handleGoBack} 
            chats={chats} 
            setChats={setChats}
            activeChat={activeChat}
            setActiveChat={setActiveChat}
            onNewChat={createNewChat}
        />) :
        (<ChatBotStart onStartChat={handleStartChat}></ChatBotStart>)}

    </div>
  )
}

export default App;
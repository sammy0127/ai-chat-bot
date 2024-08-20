import React, {useState} from 'react';
import ChatBotStart from './components/chat-bot-start';
import ChatBotApp from './components/chat-bot-app';

const App = () => {
  const [isChatting, setIsChatting] = useState(false);

  const handleStartChat = () => {
    setIsChatting(true);
  }

  const handleGoBack = () => {
    setIsChatting(false);
  }
  return (
    <div className="container">
      {isChatting? 
        (<ChatBotApp onGoBack={handleGoBack}></ChatBotApp>): 
        (<ChatBotStart onStartChat={handleStartChat}></ChatBotStart>)}

    </div>
  )
}

export default App;
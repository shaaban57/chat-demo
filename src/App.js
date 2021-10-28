import './App.css';
import {ChatEngine} from "react-chat-engine"
import ChatFeed from "./Components/ChatFeed"
import LoginForm from './Components/LoginForm';
const App=()=> {
  if(!localStorage.getItem('username')) return <LoginForm />
  return (
      <ChatEngine
      height="100vh"
      projectID="3bb73102-e21c-464f-830f-e3b4fd91c83b"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
      />
    
  );
}

export default App;

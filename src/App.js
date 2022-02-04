import "./App.css";
import TextInput from './TextInput';
import {useState} from 'react';
import Message from './Message';
import Camera from 'react-snap-pic';

// this is a Component called App
function App() {
  //useState creates a magic variable
  // here it's called "messages"
  // the initial value is an empty array []
  // "setMessages" is a function that is used to update "messages"
  const [messages, setMessages] = useState([]);

  // "setShowCamera" is a function that is used to update "showCamera"
  const [showCamera, setShowCamera] = useState(false);

  //"sendMessage" runs whenever we click the send button
  function sendMessage(text) {
    if (!text) return;
    //we'll create a new message object
    const newMessage = {
      text,
      time: Date.now(),
      user: "Valerie", 
    };
    // set the "messages" to be a new array
    // that contains the new message + all the old messages (the ... )
    setMessages([newMessage, ...messages]);
  }

  function takePicture(img){
    console.log(img);
    setShowCamera(false);
  }

  //every time state changes, React "re-renders"
  // so this console.log will run again
  console.log(messages);



  // we retrun the HTML
  return (
    <div className="App">
      <header className="header"> 
          <div className="logo" />
          <span className="title">CHATTER!</span>
      </header>
      <div className = "messages"> 
        {messages.map((msg, i)=>{
          // loop over every message in the "messages" array
          // and return a Message component
          // "key" needs to be a unique value for each item
          return <Message {...msg} key ={i}/>;
        })}
      </div>
      <div>
        {showCamera && <Camera takePicture= {takePicture} />}
      </div>
      {/* the sendMessage prop on TextInput = the sendMessage function */}
      <TextInput sendMessage={sendMessage} showCamera = {()=>setShowCamera(true)} />
    </div>
  );
}

export default App;

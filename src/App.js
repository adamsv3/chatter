import "./App.css";
import TextInput from './TextInput';
import {useState} from 'react';
import Message from './Message';
import Camera from 'react-snap-pic';
import NamePicker from './NamePicker';
import {useDB, db} from './db';

// this is a Component called App
function App() {

  const messages = useDB(); 

  // "setShowCamera" is a function that is used to update "showCamera"
  let [showCamera, setShowCamera] = useState(false);

  var img = new Image(); 
  var div = document.getElementById('chatterLogo'); 
  img.onload = function() { 
    div.appendChild(img) 
  };

  let [username, setUsername] = useState('');


  //"sendMessage" runs whenever we click the send button
  function sendMessage(text) {
    if (!text.trim()) return;
    //we'll create a new message object
    const newMessage = {
      text,
      time: Date.now(),
      user: username, 
    };
    // set the "messages" to be a new array
    // that contains the new message + all the old messages (the ... )
    db.send(newMessage)
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
          <div className="logo">
          </div>
          <span className="title">CHATTER!</span>
          <NamePicker setUsername = {setUsername} />
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

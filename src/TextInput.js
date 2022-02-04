import "./TextInput.css";
import { useState} from "react";
import { FiSend, FiCamera } from "react-icons/fi";


function TextInput(props) {
    const [text, setText] = useState("");

    function send() {
        props.sendMessage(text);
        setText("");
    }
    
    function onKeyPress(e){
        if (e.key==='Enter') {
            send();
        }
    }

    return (
        <footer className = "footer">
            <button
                className = "camera"
                onClick={props.showCamera}
                style={{left:10, right:'auto'}}>
                <FiCamera style={{height:30, width:30}} />
            </button>
            <input 
                className = "text-input" 
                value={text} 
                onChange={(e) => setText(e.target.value)}
                onKeyPress={onKeyPress}
            />
            <button className = "send" onClick={send}> 
                <FiSend style = {{height:30, width:30}}/>
            </button>
        </footer>
    );
}

export default TextInput;
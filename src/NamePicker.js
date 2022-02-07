// import "./NamePicker.css";
// import { useState} from "react";

// function NamePicker (props){
//     // const[EditName, setEditName] = useState(false);
//     const [name, setName] = useState('');

//     function naming(){
        
//     }

//     return (
//         <div>
//             <input className = "username">
//             </input>
//             <button className ="button">
//                 OK
//             </button>
//         </div>
//     )
// }

// function TextInput(props) {
//     const [text, setText] = useState("");

//     function send() {
//         props.sendMessage(text);
//         setText("");
//     }
    
//     function onKeyPress(e){
//         if (e.key==='Enter') {
//             send();
//         }
//     }

//     return (
//         <footer className = "footer">
//             <button
//                 className = "camera"
//                 onClick={props.showCamera}
//                 style={{left:10, right:'auto'}}>
//                 <FiCamera style={{height:30, width:30}} />
//             </button>
//             <input 
//                 className = "text-input" 
//                 value={text} 
//                 onChange={(e) => setText(e.target.value)}
//                 onKeyPress={onKeyPress}
//             />
//             <button className = "send" onClick={send}> 
//                 <FiSend style = {{height:30, width:30}}/>
//             </button>
//         </footer>
//     );
// }
import "./NamePicker.css";
import { useState} from "react";
import { FiEdit } from 'react-icons/fi'

function NamePicker(props) {
    
    const [editName, setEditName] = useState(false) 
    const [name, setName] = useState("")

    if(editName === false) {
        return <div className= "username">
            <p id="placeholder">{name}</p>
            Change Username
            <FiEdit
                onClick={()=> {
                    setEditName(true)
                    props.onSend("")
                }}
                id="profile"
            />
        </div>

    } else if (editName === true) {
        return <div className= "username">
            <input size="12"
            value={name}
            className = "input"
            id="header-input"
            placeholder="Add User"
            onChange={e=> {
                setName(e.target.value)
            }}

            onKeyPress={(e) => {
            if (e.key === "Enter" && (name)) {
                props.onSend(name)
                setEditName(false)
                setName('')
                localStorage.setItem('name',name)
            }}}/>   

            <FiEdit 
                onClick={()=> {
                    if(name) {
                        props.onSend(name)
                        setName('')
                        setEditName(false)
                        localStorage.setItem('name',name)
                    }}}
                id="profile"
            />
        </div>
    }
}




export default NamePicker;
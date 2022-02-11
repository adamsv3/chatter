import "./NamePicker.css";
import { useState} from "react";
import { FiEdit, FiSend } from 'react-icons/fi'



// the component declaration
// by convention we name it with a captial first letter
export default function NamePicker(props) {
    
    const [showInput, setShowInput] = useState(false) 
    const [name, setName] = useState("")


    function ok(){
        props.setUsername(name);
        setShowInput(false);
    }

    if (showInput) {
        return(
        <div className = "name-picker">
            <input className = "name-picker-input"
                onChange = {(e) => setName(e.target.value)}
                value = {name}
            />
            <button className = "name-picker-button" onClick = {ok}> OK </button>
        </div>)
    }
    return (
        <div className = "name-picker">
            <span className = "name-picker-name">
                {name || 'Set Username:'}
            </span>
            <FiEdit size = "24" onClick = {() => setShowInput(true)} />
        </div>
    )
    }

    
// The following is what I tried to do at first with NamePicker, wanted to keep it in here as reference
    // if(editName === false) {
    //     return <div className= "id">
    //         Change Username
    //         <button className="button">
    //             <FiEdit
    //                 style = {{height:20, width:20}}
    //                 onClick={()=> {
    //                     setEditName(true)
    //                 }}
    //             />
    //         </button>
    //     </div>

    // } else if (editName === true) {
    //     return <div className = "id">
    //         <input
    //             className = "username"
    //             placeholder="Add User"
    //             value = {name}
    //             onChange={e => setName(e.target.value)}
    //             onKeyPress={(e) => {
    //             if (e.key === "Enter") {
    //                 setEditName(false)
    //                 setName(name)
    //             }}}
    //         />   

    //         <button className ="button">
    //             <FiSend
    //                 style = {{height:30, width:30}}
    //                 onClick={(e)=> {
    //                         setName(e.target.value)
    //                         setEditName(false)
    //                     }}
    //             />  
    //         </button>

    //     </div>
    // }


{/* <input 
className = "text-input" 
value={text} 
onChange={(e) => setText(e.target.value)}
onKeyPress={onKeyPress}
/> */}

import React from "react";

class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};        
    }
    render() {
        return(
        <header className="header"> 
            <div className="logo" />
            <span className="title">CHATTER!</span>
      </header>
        );
    }
}

export default Header
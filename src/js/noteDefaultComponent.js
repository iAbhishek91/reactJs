import React from 'react';
import '../css/index.css';
//import createReactClass from 'create-react-class';
class DefaultNotepad extends React.Component{
   constructor(){
       super();
       this.handleDisableModeChange = this.handleDisableModeChange.bind(this);
       this.state = {disabledMode:true,name:"Edit"};
    };
    handleDisableModeChange(){
        console.log("abhishek");
        this.setState({
            disabledMode:this.state.name == "Edit"?false:true,
            name:this.state.name == "Edit"?"Update":"Edit"});
    };
    clear(){
        console.log("Hi, I am delete");
    };
    render(){
        return(
            <div className="defaultNotepad">
                <textarea refs="newText" disabled={this.state.disabledMode} defaultValue = {this.props.children}></textarea>
                <br/>
                <button onClick={this.handleDisableModeChange} className={`button-info${this.props.buttonId}`}>{this.state.name}</button>
                <button onClick={this.clear} className="buton-danger">Clear</button>
            </div>
        );
    };
};
export default DefaultNotepad;
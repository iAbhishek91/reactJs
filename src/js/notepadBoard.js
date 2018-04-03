import React from 'react';
import ReactDom from 'react-dom';
import Note from './noteDefaultComponent';
import data from './data';
//import createReactClass from 'create-react-class';
//{this.state.comments.map(note)}
class Board extends React.Component{
    constructor(){
        super();
        this.modifyNotes = this.modifyNotes.bind(this);
        this.addButton = React.createRef();
        this.deleteButton = React.createRef();
        this.state={noOfNotes:[
            "data",
            "information",
            "knowledge"
        ]}
    };
    modifyNotes(){
        console.log(this.addButton.value());
        console.log(this.deleteButton.value());
        this.setState({
            noOfNotes:this.state.noOfNotes.push("Abhishek"),
        });
        console.log(this.state.noOfNotes);
    };
    render(){
        return(
            <div className="board">
                <button ref={this.addButton} onClick={this.modifyNotes}>Add Notes</button>
                <button ref={this.deleteButton} onClick={this.modifyNotes}>Delete Notes</button>
                <br/><br/><br/>
                <div className="board">
                {
                    data.map((text,i) => {
                        return(<Note key={i}>{text}</Note>)
                    })
                }
                </div>
            </div>
        );
    };
};
export default Board;
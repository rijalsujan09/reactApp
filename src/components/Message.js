import React, {Component} from 'react'

class Message extends Component {
    constructor(){
       super() 
       this.state = {
        message:"Welcome Visitor"
       }}

     changeMessage =() => {
        this.setState(
            {message:"Thank You For Subscribing"}
            )
       }
       reset =() => {
        this.setState(
            {message:"Welcome Visitor"}
            )
       }
   

    render() { 
        return (
           <div>
             <h1>{this.state.message}</h1>
             <button onClick={()=>this.changeMessage()}
             >Subscribe</button>
             <br/>
             <button onClick={()=>this.reset()}
             >Reset</button>
           </div>
        );
    }
}
 
export default Message;

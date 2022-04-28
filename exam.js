
import { Component } from "react";

class HttpEx extends Component
{
    constructor()
    {
        super()
        this.state={status:'',userid:'',emailid:'',number:[],alphabet:[],rollno:0}
       
    }

    //CALLBACK method
   
   


    sendData=(e)=>
    {
        fetch("http://localhost:8080/bfhl/add", {
            "method": "POST",
            "headers":{'Content-Type':'application/json'},
            "body": JSON.stringify({
                is_success: true,
                "user_id": this.user_id, 
                "email" : this.emailid, 
                "roll_number":this.roll_number, 
                "numbers": this.number,
                "alphabets": this.alphabet
           })
          })
         
    }

    


    render()
    {
     
        return <div>
         
        

        <input type="text" onBlur={(event)=>{this.setState({name:event.target.value})} }  placeholder="enter product name"/>
        <input type="text" placeholder="enter product desc" onBlur={(event)=>{this.setState({desc:event.target.value})}}/>
        <input type="text" placeholder="enter product cost" onBlur={(event)=>{this.setState({cost:event.target.value})}}/>
        <button onClick={this.sendData}>add</button>
        
        </div>
    }
}

export default HttpEx
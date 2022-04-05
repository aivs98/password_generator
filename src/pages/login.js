import React, { Component } from "react";
import "./login.css";
import axios from 'axios'
import Password from '../components/password/index'


export default class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uname: "",
      pass: "",
      name:'',
      mail:'',
      isauth: false,
      isSignUp:false
    };
  }
  handleUsername = (e) => {
    this.setState({ uname: e.target.value });
  };
  handlePass = (e) => {
    this.setState({ pass: e.target.value });
  };
  handleName=(e)=>{
    this.setState({name:e.target.value})
  }
  handleMail=(e)=>
  {this.setState({mail:e.target.value})}
  
  callSignup=()=>
  {this.setState({isSignUp:true})}

  checkReq = (e) => {
    
    e.preventDefault();
    console.log(e);
    let req = {
      user_id: this.state.uname,
      user_password: this.state.pass
    };

    console.log(req);
    axios
      .post("http://localhost:3000/logincheck", req)
      .then((resp) => {
        alert(resp.data.message);
        
        // this.setState(iresp.data.message);
        if(resp.data.message==='Success')
        {
        alert(resp.data.alert)
        this.setState({isauth:true})
        }
      })
      .catch((err) => {
        console.log(err);
      });
 };

 register=(e)=>
 {
   e.preventDefault()
   let req={
     user_id:this.state.uname,
     user_password:this.state.pass,
     user_name:this.state.name,
     user_mail:this.state.mail
   }
   console.log(req)
   axios
   .post("http://localhost:3000/signup", req)
   .then((resp)=>{
     alert (resp.data.message)
   })
 }

  render() {
    if (this.state.isauth)
      return <Password logout={() => this.setState({ isauth: false })} />;
    if(this.state.isSignUp)
    {
      return(
        <div className='signupcon'>
          <form>
            <div className="uname">
              <label>
                Name :
              </label>
              <input value={this.state.name} onChange={this.handleName} className="input"/>
            </div>
            <div className="uname">
            <label>
                E-mail Id :
              </label>
              <input value={this.state.mail} onChange={this.handleMail} className="input"/>
            </div>
            <div className="uname">
            <label>
                Username :
              </label>
              <input value={this.state.uname} onChange={this.handleUsername} className="input"/>
            </div>
            <div className="uname">
            <label>
                Password :
              </label>
              <input value={this.state.pass} onChange={this.handlePass} className="input"/>
            </div>
          </form>
          <button onClick={this.register}>SignUp</button>
          <div>
            <h4>Already have an account?</h4>
            <button onClick={()=>{this.setState({isSignUp:false})}}>SignIn</button>
          </div>
        </div>
      )
    }
    
    return (
      <div className="login">
        <form>
          <div className="uname">
            {" "}
            <label className="uname1">Enter Username :</label>
            <input
            className="input"
              type={"text"}
              value={this.state.uname}
              onChange={this.handleUsername}
            />
          </div>
          <div>
            <label className="pass">Enter Password :</label>
            <input className="input" type={"password"} onChange={this.handlePass} />
          </div>
          <button className="btn" onClick={this.checkReq}>
            Login
          </button>
          <div className="signup">
            <h4>Don't have an account?</h4>
            <button className="signupbutton" onClick={this.callSignup}>Register</button>
          </div>
        </form>
      </div>
    );
  }
}

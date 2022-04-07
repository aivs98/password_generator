import React, { Component } from "react";
import "./login.css";
import axios from "axios";
import Password from "../components/password/index";
import {connect} from 'react-redux'

class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uname: "",
      pass: "",
      name: "",
      mail: "",
      
      isSignUp: false,
    };
  }
  handleUsername = (e) => {
    this.setState({ uname: e.target.value });
    
  };
  handlePass = (e) => {
    this.setState({ pass: e.target.value });
   
  };
  handleName = (e) => {
    this.setState({ name: e.target.value });
    
  };
  handleMail = (e) => {
    this.setState({ mail: e.target.value });
    
  };

  callSignup = () => {
    this.setState({ isSignUp: true });
  };

  checkReq = (e) => {
    e.preventDefault();
    
    let req = {
      user_id: this.state.uname,
      user_password: this.state.pass,
    };

    console.log(req);
    axios
      .post("http://localhost:3000/logincheck", req)
      .then((resp) => {
        alert(resp.data.message);
        console.log(resp.data.data.user_name)
        if (resp.data.message === "Success") {
          
          this.props.dispatch({type: "NAME", payload :resp.data.data.user_name})
          alert(`Welcome ${this.props.name}`);
          

          this.props.dispatch({type: "AUTH", payload :true})
         
        }
      })
      .catch((err) => {
        console.log("HELLO WORLD", err);
      });
  };

  register = (e) => {
    e.preventDefault();
    let req = {
      user_id: this.props.uname,
      user_password: this.props.pass,
      user_name: this.props.name,
      user_mail: this.props.mail,
    };
    console.log(req);
    axios.post("http://localhost:3000/signup/reg", req).then((resp) => {
      console.log("hello", resp);
      
        alert(resp.data.message);
      

      this.setState({ isSignUp: false });
    });
  };

  render() {
    if (this.props.isauth)
      return <Password logout={() =>  this.props.dispatch({type: "AUTH", payload :false})} />;

    if (this.state.isSignUp) {
      return (
        <div className="signupcon">
          <form>
            <div className="uname">
              <label>Name :</label>
              <input
                value={this.state.name}
                onChange={this.handleName}
                className="input"
              />
            </div>
            <div className="uname">
              <label>E-mail Id :</label>
              <input
                value={this.state.mail}
                onChange={this.handleMail}
                className="input"
              />
            </div>
            <div className="uname">
              <label>Username :</label>
              <input
                value={this.state.uname}
                onChange={this.handleUsername}
                className="input"
              />
            </div>
            <div className="uname">
              <label>Password :</label>
              <input
                value={this.state.pass}
                onChange={this.handlePass}
                className="input"
              />
            </div>
          </form>
          <button className="btn" onClick={this.register}>SignUp</button>
          <div className="signupLogin">
            <h4>Already have an account?</h4>
            <button className="signupbutton"
              onClick={() => {
                this.setState({ isSignUp: false });
              }}
            >
              SignIn
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="logincon">
       
        <div className="login">
          <form>
            <div className="uname">
              <label>Enter Username :</label>
              <input
                className="input"
                type={"text"}
                value={this.state.uname}
                onChange={this.handleUsername}
              />
            </div>
            <div className="uname">
              <label>Enter Password :</label>
              <input
                className="input"
                type={"password"}
                onChange={this.handlePass}
              />
            </div>
            <div className="btnwrap">
              <button className="btn" onClick={this.checkReq}>
                Login
              </button>
            </div>
            <div className="signup">
              <h4>Don't have an account?</h4>
              <button className="signupbutton" onClick={this.callSignup}>
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps =(state) =>{
  return{
      uname: state.uname,
      pass: state.pass,
      name: state.name,
      mail: state.mail,
      isauth: state.isauth
  }
      
  
}

export default connect (mapStateToProps) (login)

import React from 'react';
import { Redirect } from 'react-router-dom'
import { registerUser, getAllUsers, loginUser } from '../../settings/fetchAgent';
import  settings  from '../../settings/settings';
import { setCookies, removeCookies } from '../../settings/cookies';

//////////////////
//CONTEXT IMPORT//
import {bookContext} from '../../settings/bookContext';
//////////////////

class LogIn extends React.Component <any,any>{
    constructor(props:any){
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.redirect = this.redirect.bind(this);

        this.state = {
            userName: "",
            password: "",
            inputType: 'password',
            redirect: false
        }
    }
    redirect(){
        this.setState({redirect: true});
    }
    async handleLogin(){
        const urlLogin = settings.serverUrl+'/book/login';
        const userName = this.state.userName;
        const password = this.state.password;
        const context = this.context;

        const obj = {
            userName: userName,
            userPassword: password
        }

        const response = await loginUser(obj, urlLogin);
        
        if(response.userName === false && response.userPassword === false){
            alert('Wrong username! Try again.');
            this.setState({userName: "", password:""});
        }   
        else if(response.userName === true && response.userPassword === false){
            alert('Wrong password! Try again.');
            this.setState({password:""});
        }
        else if(response.userName === true && response.userPassword === true){
            //login + redirect to main
            alert('Login was successful!');
            await context.setUser(userName);

            removeCookies("userName");
            removeCookies("isLogged");  
            removeCookies("path");

            await setCookies({userName: userName, isLogged: true});
            await context.actualiseBooks();
            this.redirect();
        }
    }
    async handleRegister(){
        const urlAll =settings.serverUrl+'/book/allUsers';
        const urlRegister=settings.serverUrl+'/book/register'
        const userName = this.state.userName;
        const password = this.state.password;
        const obj = {
            userName: userName,
            password: password,
            url: urlRegister
        }

        //name validation
        let userArray:any = await getAllUsers(urlAll); //user data
        let duplicitUser:any = 1;
        //valid input
        if(userName !== "" && password !== ""){
            await userArray.forEach((user:any) =>{
                let dbUserName = user.userName;
                dbUserName = dbUserName.toLowerCase();
                let compareUsername = userName;
                compareUsername = compareUsername.toLowerCase();
    
                if(dbUserName === compareUsername){
                    duplicitUser = 1;
                    this.handleDuplicitUser(duplicitUser);
                } else {
                    duplicitUser = 0;
                }
            });
        } else {
            alert("Pleas fill your username and password.");
        }
        //ready to register user
        if(duplicitUser === 0){
            const response = await registerUser(obj);
            alert("Registration was successful!");
            //change context of login and redirect
            const context = await this.context;
            await context.setUser(response.userName);
            //setcookies
            removeCookies("userName");
            removeCookies("isLogged");  
            removeCookies("path");
            await setCookies({userName: response.userName, isLogged: true});
            await context.actualiseBooks();    
            this.redirect();     
        }
    }

    handleDuplicitUser(duplicitUser:boolean) {
        if(duplicitUser === true){
            alert("This name already exists. Please choose another one.");
            this.setState({userName: "", password: ""})
        }
    }
    handleName(e:any){
        let value = e.target.value;
        this.setState(()=>{
            return {userName: value}
        })
    }
    handlePassword(e:any){
       let value = e.target.value;
       this.setState(()=>{
           return {password: value}
       })
    }
    showPassword(e:any){
        if(this.state.inputType === 'password'){
            this.setState(()=>{
                return{inputType: 'text'}
            })
        } else {
            this.setState(()=>{
                return{inputType: 'password'}
            })
        }
    }

    render() {
        if(this.state.redirect === false){ 
        return (
            <section className="logIn">
                <div className="loginForm_container">
                     <label htmlFor="name" id="name">Name:</label><br/>
                     <input type="text" value={this.state.userName} id="nameInput" onChange={(e)=>{this.handleName(e);}} required/><br/>
                     <label htmlFor="password" id="password">Password:</label><br/>
                     <input type={this.state.inputType} value={this.state.password} id="passwordInput"  onChange={(e)=>{this.handlePassword(e)}}  required/><br/>
                     <input id="showpassword" type="checkbox" onChange={(e)=>{this.showPassword(e)}}/>Show Password
                     <div className="button_section">
                         <button className="login" onClick={this.handleLogin}>Login</button>
                         <button className="register" onClick={()=>{this.handleRegister()}}>Register</button>
                     </div>
                </div>
            </section>
        )} else {
            return (<Redirect to="/bookApp"></Redirect>);
        }
    }
}

LogIn.contextType = bookContext;

export { LogIn };
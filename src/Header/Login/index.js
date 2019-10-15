import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <ul>
                <li><i className="fa fa-phone" aria-hidden="true" /> (+000) 009 455 4088</li>
                <li><a href="#myModalLogin" className="login" data-toggle="modal" data-target="#myModalLogin">Login</a></li>
                <li><a href="#myModalRegister" className="login reg" data-toggle="modal" data-target="#myModalRegister">Register</a></li>
            </ul>
        );
    }
}

export default Login;
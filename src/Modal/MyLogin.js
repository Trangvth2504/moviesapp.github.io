import React, { Component } from 'react';

class MyLogin extends Component {
    render() {
        return (
            <div className="modal fade" id="myModalLogin" tabIndex={-1} role="dialog">
                <div className="modal-dialog">
                    {/* Modal content*/}
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">×</button>
                            <h4>Login</h4>
                            <div className="login-form">
                                <form action="/" method="post">
                                    <input type="email" name="email" placeholder="E-mail" required />
                                    <input type="password" name="password" placeholder="Password" required />
                                    <div className="tp">
                                        <input type="submit" defaultValue="LOGIN NOW" />
                                    </div>
                                    <div className="forgot-grid">
                                        <div className="log-check">
                                            <label className="checkbox"><input type="checkbox" name="checkbox" />Remember me</label>
                                        </div>
                                        <div className="forgot">
                                            <a href="/" data-toggle="modal" data-target="#myModal2">Forgot Password?</a>
                                        </div>
                                        <div className="clearfix" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default MyLogin;
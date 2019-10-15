import React, { Component } from 'react';

class MyRegister extends Component {
    render() {
        return (
            <div className="modal fade" id="myModalRegister" tabIndex={-1} role="dialog">
                <div className="modal-dialog">
                    {/* Modal content*/}
                    <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">×</button>
                        <h4>Register</h4>
                        <div className="login-form">
                        <form action="#/" method="post">
                            <input type="text" name="name" placeholder="Name" required />
                            <input type="email" name="email" placeholder="E-mail" required />
                            <input type="password" name="password" placeholder="Password" required />
                            <input type="password" name="conform password" placeholder="Confirm Password" required />
                            <div className="signin-rit">
                            <span className="agree-checkbox">
                                <label className="checkbox"><input type="checkbox" name="checkbox" />I agree to your <a className="w3layouts-t" href="#/" target="_blank">Terms of Use</a> and <a className="w3layouts-t" href="#/" target="_blank">Privacy Policy</a></label>
                            </span>
                            </div>
                            <div className="tp">
                            <input type="submit" defaultValue="REGISTER NOW" />
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

export default MyRegister;
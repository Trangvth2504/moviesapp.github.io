import React, { Component } from 'react';
import Login from '../Login';
import SocialHeader from '../Social';
import MyLogin from '../../Modal/MyLogin';
import MyRegister from '../../Modal/MyRegister';

class HeaderBottom extends Component {
    render() {
        return (
            <div className="w3_agilits_banner_bootm">
                <div className="w3_agilits_inner_bottom">
                    <div className="col-md-6 wthree_agile_login">
                        <Login />
                    </div>
                    <div className="col-md-6 wthree_share_agile">
                        <SocialHeader />
                    </div>
                </div>
                <MyLogin />
                <MyRegister />
            </div>
        );
    }
}

export default HeaderBottom;
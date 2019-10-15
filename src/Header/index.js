import React, { Component } from 'react';
import Logo from './Logo';
import Menu from './Menu';
import Search from './Search';
import Login from './Login';
import MyLogin from '../Modal/MyLogin';
import MyRegister from '../Modal/MyRegister';
import SocialHeader from './Social';

class Header extends Component {
    render() {
        return (
            <header id="header">
                <div className="header-container">
                    <div className="header-top">
                        <Logo />
                        <Menu />
                        <Search />
                    </div>
                    <div className="w3_agilits_banner_bootm">
                        <div className="w3_agilits_inner_bottom">
                            <div className="col-md-6 wthree_agile_login">
                                <Login />
                            </div>
                            <div className="col-md-6 wthree_share_agile">
                                <SocialHeader />
                            </div>
                        </div>
                    </div>
                </div>
                <MyLogin />
                <MyRegister />
            </header>
        );
    }
}

export default Header;
import React, { Component } from 'react';
import Logo from './Logo';
import Menu from './Menu';
import Search from './Search';

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
                </div>
            </header>
        );
    }
}

export default Header;
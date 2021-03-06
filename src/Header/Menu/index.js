import React, { Component } from 'react';


class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    </button>
                </div>
                {/* navbar-header */}
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                    <li className="active"><a href="index.html">Home</a></li>
                    <li className="dropdown">
                        <a href="#/" className="dropdown-toggle" data-toggle="dropdown">Genre <b className="caret" /></a>
                        <ul className="dropdown-menu multi-column columns-3">
                        <li>
                            <div className="col-sm-4">
                            <ul className="multi-column-dropdown">
                                <li><a href="genre.html">Action</a></li>
                                <li><a href="genre.html">Biography</a></li>
                                <li><a href="genre.html">Crime</a></li>
                                <li><a href="genre.html">Family</a></li>
                                <li><a href="horror.html">Horror</a></li>
                                <li><a href="genre.html">Romance</a></li>
                                <li><a href="genre.html">Sports</a></li>
                                <li><a href="genre.html">War</a></li>
                            </ul>
                            </div>
                            <div className="col-sm-4">
                            <ul className="multi-column-dropdown">
                                <li><a href="genre.html">Adventure</a></li>
                                <li><a href="comedy.html">Comedy</a></li>
                                <li><a href="genre.html">Documentary</a></li>
                                <li><a href="genre.html">Fantasy</a></li>
                                <li><a href="genre.html">Thriller</a></li>
                            </ul>
                            </div>
                            <div className="col-sm-4">
                            <ul className="multi-column-dropdown">
                                <li><a href="genre.html">Animation</a></li>
                                <li><a href="genre.html">Costume</a></li>
                                <li><a href="genre.html">Drama</a></li>
                                <li><a href="genre.html">History</a></li>
                                <li><a href="genre.html">Musical</a></li>
                                <li><a href="genre.html">Psychological</a></li>
                            </ul>
                            </div>
                            <div className="clearfix" />
                        </li>
                        </ul>
                    </li>
                    <li><a href="series.html">tv - series</a></li>
                    <li><a href="news.html">news</a></li>
                    <li className="dropdown">
                        <a href="#/" className="dropdown-toggle" data-toggle="dropdown">Country <b className="caret" /></a>
                        <ul className="dropdown-menu multi-column columns-3">
                        <li>
                            <div className="col-sm-4">
                            <ul className="multi-column-dropdown">
                                <li><a href="genre.html">Asia</a></li>
                                <li><a href="genre.html">France</a></li>
                                <li><a href="genre.html">Taiwan</a></li>
                                <li><a href="genre.html">United States</a></li>
                            </ul>
                            </div>
                            <div className="col-sm-4">
                            <ul className="multi-column-dropdown">
                                <li><a href="genre.html">China</a></li>
                                <li><a href="genre.html">HongCong</a></li>
                                <li><a href="genre.html">Japan</a></li>
                                <li><a href="genre.html">Thailand</a></li>
                            </ul>
                            </div>
                            <div className="col-sm-4">
                            <ul className="multi-column-dropdown">
                                <li><a href="genre.html">Euro</a></li>
                                <li><a href="genre.html">India</a></li>
                                <li><a href="genre.html">Korea</a></li>
                                <li><a href="genre.html">United Kingdom</a></li>
                            </ul>
                            </div>
                            <div className="clearfix" />
                        </li>
                        </ul>
                    </li>
                    <li><a href="list.html">A - z list</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                <div className="clearfix"> </div>	
            </nav>
        );
    }
}

export default Menu;
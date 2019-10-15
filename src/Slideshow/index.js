import React, { Component } from 'react';

class Slideshow extends Component {
    render() {
        return (
            <div id="demo-1" data-zs-src='["/assets/images/2.jpg", "/assets/images/1.jpg", "/assets/images/3.jpg","/assets/images/4.jpg"]'>
                {/*/banner-info*/}
                <div className="baner-info">
                    <h3>Latest <span>On</span>Line <span>Mo</span>vies</h3>
                    <h4>In space no one can hear you scream.</h4>
                    <a className="w3_play_icon1" href="#small-dialog1">
                        Watch Trailer
                    </a>
                </div>
                {/*/banner-ingo*/}

            </div>
        );
    }
}

export default Slideshow;
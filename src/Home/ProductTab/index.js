import React, { Component } from 'react';

class ProductTab extends Component {
    render() {
        return (
            <div className="agileinfo_tabs">
                {/*/tab-section*/}
                <div id="horizontalTab">
                    <ul className="resp-tabs-list">
                        <li>Recent</li>
                        <li>Popularity</li>
                        <li>Top Rating </li>
                    </ul>
                    <div className="resp-tabs-container">
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductTab;
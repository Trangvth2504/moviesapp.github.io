import React, { Component } from 'react';
import ProductTab from './ProductTab';

class HomeContent extends Component {
    render() {
        return (
            <div className="w3_content_agilleinfo_inner">
                <div className="agile_featured_movies">
                    <ProductTab />
                </div>
            </div>
        );
    }
}

export default HomeContent;
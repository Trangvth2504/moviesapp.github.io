import React, { Component } from 'react';

class ItemProduct extends Component {
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
           items: [
                { 
                    id: 1, 
                    image: '/assets/images/11.jpg', 
                    name: Force 2, 
                    desc: 'Presenting the official trailer of Force 2 starring John Abraham, Sonakshi Sinha and Tahir Raj Bhasin. A film by Abhinay Deo JA entertainment Pvt. Ltd....', 
                    date: 'Sep 29 2016 ', 
                    tags: 'Drama'
                },
                { 
                    id: 2, 
                    image: '/assets/images/m1.jpg', 
                    name: Swiss Army Man, 
                    desc: 'Presenting the official trailer of Force 2 starring John Abraham, Sonakshi Sinha and Tahir Raj Bhasin. A film by Abhinay Deo JA entertainment Pvt. Ltd....', 
                    date: 'Sep 29 2016 ', 
                    tags: 'Drama'
                }
           ]
        }
    }

    _renderProductFullInfo() {
        return this.state.items.map((item, index) => {
           const { id, image, name, desc, date, tags } = items //destructuring
            return (
              
            )
        })
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default ItemProduct;
import React, { Component } from 'react';
import Header from '../../components/Navheader/index'
import Footer from '../../components/footernav/footernav'
class Order extends Component{
    render(){
        return(
            <div>
                <Header></Header>
                <div className="order-lists">
                    <div className="order-item">
                        <div className="item-top">
                            <div className="item-left">
                                <img alt=""></img>
                            </div>
                            <div className="item-right"></div>
                        </div>
                        <div className="item-bottom">
                            <div>去评价</div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}

export default Order
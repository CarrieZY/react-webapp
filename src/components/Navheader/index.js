import React, { Component } from 'react';
import './index.scss'
class Navheader extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            title:'头部标题'
         };
    }
    render() {
        return (
        <div className="header">
            <i className="header-icon iconfont icon-back"></i>
            {this.state.title}
        </div>
        )
    }
}

export default Navheader
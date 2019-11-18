import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.scss'

class Footer extends Component{
    render(){
        return(
            <div className="footer">
                <Link to="/" className='footer-item'>
                    <span className="iconfont icon-shouye"></span>
                    <span>首页</span>
                </Link>
                <Link to="/Order" className='footer-item'>
                    <span className="iconfont icon-dingdan"></span>
                    <span>订单</span>
                </Link>
                <div className='footer-item'>
                    <span className="iconfont icon-gerenzhongxin"></span>
                    <span>我的</span>    
                </div> 
            </div>
        )
    }
}

export default Footer
import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router';

class Header extends Component {
    renderSignButton(){
        if (this.props.authenticated){
            return (
                <li className="nav-item">
                    <Link className="nav-link" to="/signout">Signout</Link>
                </li>
            )
        }else{
            return (
                [
                    <li className="nav-item active" key="1">
                        <Link to="/signin" className="nav-link">Signin</Link>
                    </li>,
                    <li className="nav-item" key="2">
                        <Link to="/signup" className="nav-link">SignUp</Link>
                    </li>
                ]
            )
        }
    }
    render() {
        return (
            <nav className="navbar navbar-light bg-faded navbar-toggleable-xl navbar-inverse fixed-top">
            <Link className="navbar-brand" to="/">Athons</Link>
                <span  className="float-left">
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/hack">Hack</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/secret">Secret</Link>
                        </li>
                    </ul>
                </span>
                <span className="pull-xs-right">
                    <ul className="nav navbar-nav">
                        {this.renderSignButton()}
                    </ul>
                </span>
                </nav>
        )
    }
}

function mapStateToProps({auth}){
    return {
        authenticated: auth.authenticated
    }
}

export default connect(mapStateToProps, actions)(Header)
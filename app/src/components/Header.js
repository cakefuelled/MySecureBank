import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';


class Header extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    /*componentWillMount() {
        //Important! If your component is navigating based on some global state(from say componentWillReceiveProps)
        //always reset that global state back to null when you REMOUNT
        this.props.resetMe();
    }*/

    componentWillReceiveProps(nextProps) {
        if(nextProps.deletedPost.error) {
            alert('Could not delete. Please try again.');
        } else if(nextProps.deletedPost.post && !nextProps.deletedPost.error) {
            this.context.router.push('/');
        }
    }

    renderLinks() {
        const { type } = this.props;
        if(type === 'main') {
            return (
                <ul className="nav navbar-nav navbar-right">
                    <li style={{paddingRight: '20px'}} role="presentation">
                        <Link style={{color:'#3385ff',  fontSize: '18px'}} to="/">
                            Home
                        </Link>
                    </li>
                </ul>
            );
        }
    };

    render() {
        return (
            <nav className="navbar navbar-default navbar-static-top">
                <div id="navbar" className="navbar-collapse collapse">
                    {this.renderLinks()}
                </div>
            </nav>
        );
    }
}

export default Header
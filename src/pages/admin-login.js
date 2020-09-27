import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'


class Admin extends Component {
    render() {
        const { history } = this.props;
        return(
            <div className="site-body">
                <div className="wrapper admin-site">
                    <form className="login-page box">
                        <div>
                            <h2 className='h3 title-center m-b-xsm'>Hello there!</h2>
                            <p className='m-b-md title-center'>Welcome to realgist, Please Login to enjoy all our great features</p>
                        </div>
                        <div className="input-wrapper">
                            <div className="login-form__field--input">
                                <label className="sr-only">Email Address</label>
                                <input type="email" placeholder="Email Address*" />
                            </div>
                            <div className="login-form__field--input">
                                <label className="sr-only">Password</label>
                                <input type="text" placeholder="Password" />
                            </div>
                            <div className="sign_in_button clear" onClick={() => {history.push('/create-blog')}}>
                                <input type="submit" value="Sign In" id="mc-embedded-subscribe" className="button" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(Admin);
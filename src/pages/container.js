import React, {Component} from 'react';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';

// components
import SideBar from '../components/sidebar';
import Home from '../components/home';
import SearchPage from '../components/search_page';
import SubscriblePage from '../components/subscribe-page';

class Container extends Component {
    render() {
        const {match} = this.props
        return(
            <div className="site-body">
                <div className="wrapper">
                    <Switch>
                        <Redirect exact from={`/`} to={`${match.path}home`} />
                        <Route path={`${match.path}home`} component={Home} />
                        <Route path={`${match.path}search`} component={SearchPage} />
                        <Route path={`${match.path}subscribe`} component={SubscriblePage} />
                    </Switch>
                    <SideBar />
                </div>
            </div>
        );
    }
}

export default withRouter(Container);
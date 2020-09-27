import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import SubscribleFrom from '../components/subscribe'

class Home extends Component {
    render() {
        return(
        <div className="main-content">
            <section>
                <h1 className="sr-only">Lastest Post</h1>
            <article className="main-article m-md p-md">
                <header className="main-article_header m-sm">
                    <h2 className="main-article_title no-ul">
                        <Link to="#">What I wish I knew about React</Link>
                    </h2>
                    <div className="post-meta">
                    <em>Apr 28, 2020</em>
                    <em><Link to="#">react</Link></em>
                    </div>
                </header>
                <div className="excerpt__body">A couple weeks ago I started working on my first React application. Not only was it my first React application, but it was also my first React Native application, so a lot was new to me all in one go. Coming from the Angular (and Ionic) world, it felt like...</div>
            </article>
            <article className="main-article m-md p-md">
                <header className="main-article_header m-sm">
                    <h2 className="main-article_title no-ul">
                        <Link to="#">What I wish I knew about React</Link>
                    </h2>
                    <div className="post-meta">
                    <em>Apr 28, 2020</em>
                    <em><Link to="#">react</Link></em>
                    </div>
                </header>
                <div className="excerpt__body">A couple weeks ago I started working on my first React application. Not only was it my first React application, but it was also my first React Native application, so a lot was new to me all in one go. Coming from the Angular (and Ionic) world, it felt like...</div>
            </article>
            <article className="main-article m-md p-md">
                <header className="main-article_header m-sm">
                    <h2 className="main-article_title no-ul">
                        <Link to="#">What I wish I knew about React</Link>
                    </h2>
                    <div className="post-meta">
                    <em>Apr 28, 2020</em>
                    <em><Link to="#">react</Link></em>
                    </div>
                </header>
                <div className="excerpt__body">A couple weeks ago I started working on my first React application. Not only was it my first React application, but it was also my first React Native application, so a lot was new to me all in one go. Coming from the Angular (and Ionic) world, it felt like...</div>
            </article>
            <article className="main-article m-md p-md">
                <header className="main-article_header m-sm">
                    <h2 className="main-article_title no-ul">
                        <Link to="#">What I wish I knew about React</Link>
                    </h2>
                    <div className="post-meta">
                    <em>Apr 28, 2020</em>
                    <em><Link to="#">react</Link></em>
                    </div>
                </header>
                <div className="excerpt__body">A couple weeks ago I started working on my first React application. Not only was it my first React application, but it was also my first React Native application, so a lot was new to me all in one go. Coming from the Angular (and Ionic) world, it felt like...</div>
            </article>
            <SubscribleFrom />
            <div className="pagination">
                <span className="pagination-index">Page 1 of 31</span>
                <Link className="pagination-older" to="#">Older →</Link>
            </div>
            </section>
        </div>
        )
    }
}

export default Home;
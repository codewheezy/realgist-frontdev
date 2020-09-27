import React from 'react';
import SubscribleFrom from './subscribe';


const SubscribePage = () => {
    return (
        <div className="main-content">
            <article className="post">
                <header className="post-header m-b-lg">
                    <h1 className="post-title h1">The Newsletter</h1>
                </header>
                <div className="post-content page-content m-b-lg">
                    <p>Hi! I publish a new article to this blog about once a week. If you don't want to miss an article, you can subscribe below and you'll get the latest article direct to your inbox (<strong>and nothing else</strong>)</p>
                </div>
                <SubscribleFrom />
            </article>
        </div>
    );
}

export default SubscribePage;
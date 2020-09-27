import React from 'react';


const SubscribleFrom = () => {
    return (
    <section id="mc_embed_signup" className="subscribe-form box">
        <form action="#" className="validate" id="mc-embedded-subscribe-form">
            <div id="mc_embed_signup_scroll">
                <h2 className="h3 m-b-xsm">Subscribe to the Newsletter</h2>
                <p className="subscribe-form__description m-b-md">Receive quality articles written by Ire Aderinokun, frontend developer and user interface designer.</p>
                <picture className="subscribe-form__image">
                    <img src={require('../assets/image/profile.png')} alt="Cartoon Profile of Me, Ire" />
                </picture>
                <div className="subscribe-form__fields">
                    <div className="subscribe-form__field subscribe-form__field--input mc-field-group">
                        <label className="sr-only">Email Address</label>
                        <input type="email" placeholder="Email Address*" />
                    </div>
                    <div className="subscribe-form__field subscribe-form__field--input mc-field-group">
                        <label className="sr-only">First Name</label>
                        <input type="text" placeholder="First Name" />
                    </div>
                    <div className="subscribe-form__field subscribe-form__field--submit clear">
                        <input type="submit" value="Subscribe" id="mc-embedded-subscribe" className="button" />
                    </div>
                    {/* <div id="mce-responses" id="clear">
                        <div className="response" id="mce-error-responses"></div>
                        <div className="response" id="mce-error-responses"></div>
                    </div> */}
                </div>
            </div>
        </form>
    </section>
    );
}

export default SubscribleFrom;
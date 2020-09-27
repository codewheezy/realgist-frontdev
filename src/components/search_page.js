import React from 'react';


const SearchPage = () => {
    return (
    <div className="main-content">
        <article className="post">
            <header className="post-header m-b-lg">
                <h1 className="post-title h1">Search for article</h1>
            </header>
            <div className="m-b-lg">
                <form className="search-form m-b-md" id="search-form">
                    <label className="sr-only">Search Term</label> 
                    <input type="search" className="search-form_input" placeholder="what are you looking for ?" /> 
                </form>
            </div>
        </article>
    </div>
    )
}

export default SearchPage;
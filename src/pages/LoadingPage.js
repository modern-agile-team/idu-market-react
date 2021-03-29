import React from 'react';

const LoadingPage = () => {
    return (
        <section id="loading-page" className="loading-page">
            <div className="market-loading">
                <div className="spin"></div>
                <p className="market-loading-msg">Loading</p>
            </div>
        </section>
    );
};

export default LoadingPage;
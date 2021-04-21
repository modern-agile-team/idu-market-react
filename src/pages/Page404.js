import React from 'react';
import { Link } from 'react-router-dom';

 
function Page404() {
    return (
        <section className="nomatch" id="nomatch">
            <div className="container">
                <div className="nomatch-text-box">
                    <p className="nomatch-404">404</p> 
                    <p className="nomatch-p">Oops!</p>   
                    <p className="nomatch-p">해당 페이지가 존재하지 않거나 사용할 수 없습니다</p>
                </div>
                <div className="nomatch-button-box">
                    <Link to="/"><button className="nomatch-button">홈으로 돌아가기</button></Link>
                </div>
            </div>
        </section>
    )
}

export default Page404;

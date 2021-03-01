import React from 'react';
import { SiNotion } from "react-icons/si";
import { Link } from 'react-router-dom';
import indukIcon from '../../img/induk-icon.png';

const componentName = () => {

    const thisYear = () => {
        const year = new Date().getFullYear();
        return year;
    }

    return (
        <section id="footer" className="footer">
            <div className="container">
                <Link to="/" className="footer-title"><span>I</span>UAM</Link>
                <p className="copyright">Copyright &copy; <span className="footer-year">{thisYear()}</span> <span className="footer-wooahan">Wooahan Agile</span> All right reserved.</p>
                <div className="footer-icons">
                    <a href="https://www.notion.so/ko" target="_blank">
                        <p className="ir_su">Notion icon</p>
                        <SiNotion className="footer-icon-notion"/>
                    </a>
                    <a href="https://www.induk.ac.kr/KR/intro.do" target="_blank">
                        <div className="footer-icon-idu" />
                    </a>
                </div>
                
            </div>
        </section>
    );
};

export default componentName;
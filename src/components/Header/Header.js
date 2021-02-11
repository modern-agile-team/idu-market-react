import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { HeaderMenuData } from './HeaderMenuData';
import DropMenu from './DropMenu';
import '../../scss/Header/Header.scss';

const Header = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <header id="header" className="header">
            <div className="container">
                <Link to="/" className="header-title"><span>I</span>UAM</Link>

                <div className="menuToggle">
                    {sidebar ? 
                    <AiIcons.AiOutlineClose onClick={showSidebar} /> : <FaIcons.FaBars  onClick={showSidebar} />}
                </div>

                <nav className={sidebar ? 'header-nav active' : 'header-nav'}>
                    <ul className="header-list">
                        {HeaderMenuData.map((item, index) => {
                            return (
                                <DropMenu item={item} key={index}></DropMenu>
                            );
                        })}
                    </ul>
                    <Link to="/login" className="header-btn">Login</Link>
                    <Link to="/register" className="header-btn">SignUp</Link>
                </nav>
            </div>
    </header>
    );
};

export default Header;
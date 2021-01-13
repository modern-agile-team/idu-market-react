import React, { useState } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';
import { HeaderMenuData } from './HeaderMenuData';
import DropMenu from './DropMenu';
import '../../scss/import/Header.scss';

const Nav = styled.div`
    background: #f3f3f3;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`;

const NavIcon = styled(Link)`
    margin-right: 2rem;
    font-size: 2rem;
    height: 40px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;
const SidebarNav = styled.nav`
    background: #f3f3f3;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    right: ${({sidebar}) => (sidebar ? '0' : '-100%')};
    transition: 0.35s;
    z-index: 10;
`;
const SidebarWrap = styled.div`
    padding: 20px 0px;
    width: 100%;
    margin-bottom: 30px;
`;

const Header = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
            <IconContext.Provider value={{color: '#000'}}>
                <Nav>
                    <h1 className="header-title"><span>I</span>UAM</h1>
                    <NavIcon to="#">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </NavIcon>
                </Nav>
                <SidebarNav sidebar={sidebar}>
                    <SidebarWrap>
                        <NavIcon to="#">
                            <AiIcons.AiOutlineClose onClick={showSidebar}/>
                        </NavIcon>
                        {HeaderMenuData.map((item, index) => {
                            return <DropMenu item={item} key={index}></DropMenu>
                        })}
                    </SidebarWrap>
                </SidebarNav>
            </IconContext.Provider>
        </>
    );
};

export default Header;
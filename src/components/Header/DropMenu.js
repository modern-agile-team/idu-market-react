import React, {useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '../../scss/import/Header.scss';

const SidebarLink = styled.li`
    display: flex;
    color: #000;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 18px;
    margin-top: 30px;

    &:hover {
        background: #dbdbdb;
        border-left: 4px solid #9c9c9c;
        cursor: pointer;
        color: #000;
    }
`;

const SidebarLabel = styled.span`
    margin-left: 16px;
`;

const DropdownLink = styled(Link)`
    background: #dbdbdb;
    height: 50px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #000;
    font-size: 18px;
    border-bottom: 1px solid #9c9c9c;
`;

const DropMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);
    return (
        <>
            <SidebarLink onClick={item.subMenu && showSubnav}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>
                    {item.subMenu && subnav 
                    ? item.iconOpened : item.subMenu ? item.iconClosed: null}
                </div>
            </SidebarLink>
            {subnav && item.subMenu.map((item, index) => {
                return (
                    <DropdownLink to={item.path} key={index}>
                        {item.icon}
                        <SidebarLabel>{item.title}</SidebarLabel>
                    </DropdownLink>
                );
            })}
        </>
    );
};

export default DropMenu;
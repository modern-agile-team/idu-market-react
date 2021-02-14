import React, {useState} from 'react';
import { Link } from 'react-router-dom';


const DropMenu = ({ item }) => {
    const [dropMenu, setDropMenu] = useState(false);

    const showDropMenu = () => setDropMenu(!dropMenu);

    return (
        <>
            <li 
                className="header-menu" 
                onClick={item.subMenu && showDropMenu}
            >
                <Link>{item.title}</Link>

                <ul className="header-menu-drop">
                    {dropMenu && item.subMenu.map((item, index) => {
                        return (
                            <li key={index}><Link to={item.path}>{item.title}</Link></li>
                        );
                    })}
                </ul>
            </li>
        </>
    );
};

export default DropMenu;
import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const HeaderMenuData = [
    {
        title: 'Home',
        path: '/',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
    },
    {
        title: 'Menu2',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subMenu: [
            {
                title: 'Board1',
                path: '/menu2/board1',
            },
            {
                title: 'Board2',
                path: '/menu2/board2',
            },
            {
                title: 'Board3',
                path: '/menu2/board3',
            },
        ]
    },
    {
        title: 'Menu3',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subMenu: [
            {
                title: 'Board1',
                path: '/menu3/board1',
            },
            {
                title: 'Board2',
                path: '/menu3/board2',
            },
            {
                title: 'Board3',
                path: '/menu3/board3',
            },
        ]
    },
    {
        title: 'Menu4',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subMenu: [
            {
                title: 'Board1',
                path: '/menu4/board1',
            },
            {
                title: 'Board2',
                path: '/menu4/board2',
            },
            {
                title: 'Board3',
                path: '/menu4/board3',
            },
        ]
    },
]
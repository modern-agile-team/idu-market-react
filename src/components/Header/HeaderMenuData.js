import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const HeaderMenuData = [
    {
        title: 'Menu1',
        path: '/menu1',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subMenu: [
            {
                title: 'Board1',
                path: '/menu1/board1',
            },
            {
                title: 'Board2',
                path: '/menu1/board2',
            },
            {
                title: 'Board3',
                path: '/menu1/board3',
            },
        ]
    },
    {
        title: 'Menu2',
        path: '/menu2',
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
        path: '/menu3',
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
        path: '/menu4',
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
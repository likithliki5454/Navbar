import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Home',
    path: '/overview',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'About',
        path: '/overview/users',
        icon: <IoIcons.IoIosPeople />
      },
      {
        title: ' Contacts',
        path: '/overview/revenue',
        icon: <IoIcons.IoIosMail/>
      }
    ]
  },
  {
    title: 'Products',
    path: '/reports',
    icon: <IoIcons.IoIosBook />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Product 1',
        path: '/reports/reports1',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Product 2',
        path: '/reports/reports2',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Shopping',
    path: '/products',
    icon: <FaIcons.FaCartPlus />
  },
  
  {
    title: 'Account',
    path: '/messages',
    icon: <IoIcons.IoIosContact />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Log in',
        path: '/messages/message1',
        icon: <IoIcons.IoIosLogIn />
      },
      {
        title: 'Log out',
        path: '/messages/message2',
        icon: <IoIcons.IoIosLogOut />
      }
    ]
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />
  },{
    title: 'Settings',
    path: '/team',
    icon: <IoIcons.IoIosSettings />
  }
];
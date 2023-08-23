import House from "../../public/image-components/House";
import Pencil from "../../public/image-components/Pencil";
import Phone from "../../public/image-components/Phone";
import Profile from "../../public/image-components/Profile";

export const OptionMenu = ({color = 'hsla(0, 0%, 40%, 1.00)'})=>{
  return [
    {
      label: 'View Profile',
      icon: <Profile  size='1rem' color={color} />,
      clickFn: () => alert('View Profile')
    },
    {
      label: 'Edit Profile',
      icon: <Pencil size='1rem' color={color} />,
      clickFn: () => alert('Edit Profile')
    },
  ]}

export const headerMenu = ({color = 'hsla(0, 0%, 40%, 1.00)', hover = 'hsla(0, 0%, 20%, 1.00)'}) => [
    {
        id: 1,
        title: 'Home',
        url: '/',
        icon: <House size='1rem' color={color} />,
        submenu: []
    },
    {
        id: 2,
        title: 'About',
        url: '/about',
        // icon: <QuestionMark size='1rem' color={color} hover={hover} />,
        icon: '',
        submenu: []
    },
    {
        id: 3,
        title: 'Contact',
        url: '/contact',
        icon: <Phone size='1rem' color={color} />,
        submenu: []
    },
    // {
    //     id: 4,
    //     title: 'Dropdown',
    //     url: '/dropdown',
    //     icon: 'caret-down',
    //     submenu: [
    //         {
    //             id: 1,
    //             title: 'Dropdown 1',
    //             url: '/dropdown1',
    //             icon: 'caret-down',
    //             submenu: []
    //         },
    //         {
    //             id: 2,
    //             title: 'Dropdown 2',
    //             url: '/dropdown2',
    //             icon: 'caret-down',
    //             submenu: []
    //         },
    //         {
    //             id: 3,
    //             title: 'Dropdown 3',
    //             url: '/dropdown3',
    //             icon: 'caret-down',
    //             submenu: []
    //         },
    //         {
    //             id: 4,
    //             title: 'Dropdown 4',
    //             url: '/dropdown4',
    //             icon: 'caret-down',
    //             submenu: []
    //         }
    //     ]
    // }
];

export const footerMenu = [
    {
        id: 1,
        title: 'Home',
        links: [
            {
                id: 1,
                label: 'Home',
                url: '/'
            },
            {
                id: 2,
                label: 'About',
                url: '/about'
            },
            {
                id: 3,
                label: 'Contact',
                url: '/contact'
            }
        ]
    },
    {
        id: 2,
        title: 'About',
        links: [
            {
                id: 1,
                label: 'About',
                url: '/about'
            },
            {
                id: 2,
                label: 'Contact',
                url: '/contact'
            },
            {
                id: 3,
                label: 'Home',
                url: '/'
            }
        ]
    },
    {
        id: 3,
        title: 'Contact',
        links: [
            {
                id: 1,
                label: 'Contact',
                url: '/contact'
            },
            {
                id: 2,
                label: 'Home',
                url: '/'
            },
            {
                id: 3,
                label: 'About',
                url: '/about'
            }
        ]
    }
];
    
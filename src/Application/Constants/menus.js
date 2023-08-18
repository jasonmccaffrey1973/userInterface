export const headerMenu = [
    {
        id: 1,
        title: 'Home',
        url: '/',
        icon: 'home',
        submenu: []
    },
    {
        id: 2,
        title: 'About',
        url: '/about',
        icon: 'info',
        submenu: []
    },
    {
        id: 3,
        title: 'Contact',
        url: '/contact',
        icon: 'phone',
        submenu: []
    },
    {
        id: 4,
        title: 'Dropdown',
        url: '/dropdown',
        icon: 'caret-down',
        submenu: [
            {
                id: 1,
                title: 'Dropdown 1',
                url: '/dropdown1',
                icon: 'caret-down',
                submenu: []
            },
            {
                id: 2,
                title: 'Dropdown 2',
                url: '/dropdown2',
                icon: 'caret-down',
                submenu: []
            },
            {
                id: 3,
                title: 'Dropdown 3',
                url: '/dropdown3',
                icon: 'caret-down',
                submenu: []
            },
            {
                id: 4,
                title: 'Dropdown 4',
                url: '/dropdown4',
                icon: 'caret-down',
                submenu: []
            }
        ]
    }
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
    
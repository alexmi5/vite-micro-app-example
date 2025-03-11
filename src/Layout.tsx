import {NavLink, Outlet} from 'react-router';

interface IMenuItem {
    name: string;
    path: string;
}

const menu: IMenuItem[] = [
    {
        name: 'Микрофронт-1. Главная',
        path: '/'
    },
    {
        name: 'Микрофронт-1. Инфо',
        path: '/info'
    },
];

const Layout = () => {
    return (
        <div className="micro-1">
            <nav>
                {menu.map((item) => {
                    return (
                        <NavLink to={item.path} key={item.path} className={({isActive}) => (isActive ? 'active' : '')}>
                            {item.name}
                        </NavLink>
                    );
                })}
            </nav>
            <h1>MICRO-1 APP</h1>
            <Outlet />
        </div>
    );
}

export default Layout;

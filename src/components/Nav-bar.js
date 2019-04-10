import React from 'react';
import { Menu } from 'semantic-ui-react';

const NavBar = () => {

    const items = [
        { key: 'Home', active: true, name: 'Home' },
        { key: 'TV Shows', name: 'TV Shows' },
        { key: 'Movies', name: 'Movies' },
        { key: 'Movies', name: 'Movies' },
        { key: 'My List', name: 'My List' },
      ]

    return(
        <div>
            Logo
            <Menu items={items} as="hello" icon="icon"/>
        </div>
    )
}

export default NavBar;
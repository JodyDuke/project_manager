import React from 'react';
import Menu from './nav-menu/menu'
import Sidebar from './sidebar/sidebar'

const App = () => {
    return (
        <div className="app">
            <Menu />
            <Sidebar />
        </div>
    )
}

export default App
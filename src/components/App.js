import React from 'react';
import Menu from './nav-menu/menu'
import Sidebar from './sidebar/sidebar'
import ModalDisplay from './modals/modal_switch'


const App = () => {
    return (
        <div className="app">
            <ModalDisplay />
            <Menu />
            <Sidebar />
        </div>
    )
}

export default App
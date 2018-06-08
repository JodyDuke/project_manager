import React from 'react';
import Main from './main/main'
import Menu from './nav-menu/menu'
import Sidebar from './sidebar/sidebar'
import ModalDisplay from './modals/modal_switch'


const App = () => {
    return (
        <div className="app">
            <ModalDisplay />
            <Menu />
            <Main />
        </div>
    )
}

export default App
import React from "react";
import './sidebar.css'

const SideBar = () => {

    const menuItems = [
        {
            name: 'Conductors',
            url: '/'
        }, 
        {
            name: 'Others',
            url: '/'
        }, 
    ]
    return (
        <section className="overallContainer">
        <div className="logo">Akowe</div>
        <div className="menuItems">
            {menuItems.map((menu, index) => (
                <div key={index}>
                <p className="menu">{menu.name}</p>
                </div>
            ))}
        </div>
        </section>
    )
}

export default SideBar
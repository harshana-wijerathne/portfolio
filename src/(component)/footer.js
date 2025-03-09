'use client'
import React, {useEffect, useState} from 'react';


function Footer(props) {
    const [darkMode, setDarkMode] = useState(true);
    useEffect(() => {
        document.documentElement.setAttribute("data-bs-theme", darkMode ? "dark" : "light");
        darkMode? document.querySelectorAll("p").forEach(e=> e.style.color = "white") :
            document.querySelectorAll("p").forEach(e=> e.style.color = "black");
    }, [darkMode]);
    return (
        <nav className="navbar bg-dark fixed-bottom navbar-light border-top">
            <div className="container-fluid">
                <a className="navbar-brand" ><div className="fs-6"> © Harshana Wijerathne, 2024</div></a>
                <div onClick={()=> setDarkMode(!darkMode)}>
                    {darkMode ? "Light  Mode" : "Dark Mode"}
                    <i className={`mx-2 bi ${darkMode?"bi-brightness-high":"bi-moon-fill"} cursor-pointer fs-5`} ></i>
                </div>

            </div>
        </nav>
    );
}

export default Footer;
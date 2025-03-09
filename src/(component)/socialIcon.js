'use client'
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

function SocialIcon(props) {
    return (
            <a href={`${props.link}`} rel="noopener noreferrer"
               className=" rounded-circle d-flex align-items-center justify-content-center border border-3 border-warning"
               style={{width: "50px", height: "50px"}}>
                <i className={`bi bi-${props.name} fs-2`}></i>
            </a>
    );
}

export default SocialIcon;
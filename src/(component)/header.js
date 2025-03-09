'use client'
import React, {useEffect, useState} from 'react';
import Link from "next/link";


function Header(props) {

    return (
            <nav id={"nav"} className="navbar navbar-expand-lg fixed-top bg-dark align-items-center border-bottom ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Harshana Wijerathne</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav  ms-auto me-2">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " href="/about">About Me</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ">Contact me</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    );
}

export default Header;
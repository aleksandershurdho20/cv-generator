import React from 'react'
import "./Header.scss"
export default function Index() {
    return (
        <header>
            <div class="logo-container">
                {/* <img src={Logo} alt="logo" /> */}
                <h4 class="logo">CV.AL</h4>
            </div>
            <nav>
                <ul class="nav-links">
                    <li><a class="nav-link active" href="#">Krijo</a></li>
                    <li><a class="nav-link" href="#">Hyr</a></li>
                    <li><a class="nav-link" href="#">Regjistrohu</a></li>
                </ul>
            </nav>
            <div class="cart">
                sample
            </div>
        </header>
    )
}

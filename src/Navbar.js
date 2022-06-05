import React from 'react';

export default class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-light justify-content-between" id = "navbar">
                <a className="navbar-brand" href="/"><h1>$Digi.Wallet</h1></a>
                <form className="form-inline">
                <input className="form-control mr-sm-1" type="search" placeholder="Search" aria-label="Search"></input>
                </form>
            </nav>
        )
    }
}
import React from "react";

export default class NavigationMenu extends React.Component{

    render(){
        return(
            <ul className="naviagtion__menu">
                <li className="home__selected">Home</li>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
                <li>Spots</li>
                <li>Specials</li>
            </ul>
        )
    }
}
import React from "react";

export default class NavigationMenu extends React.Component{

    render(){
        return(
            <ul className="naviagtion__menu">
                <li className="home__selected"><a href="/">Home</a></li>
                <li>Home</li>
                <li>Women</li>
                <li>Men</li>
                <li>Kids</li>
                <li><a href="/map">Map</a></li>
                
            </ul>
        )
    }
}
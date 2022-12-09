import { Component } from 'react'
import './Navigation.css'
import burgerMenu from '../images/burger-menu.png'

const PlanetLinks = (props) => {
    return (
        <a href={props.link}>
            <li>
                <div className='li-content'>
                    <div className={props.styles}></div>
                    <p>{props.name}</p>
                </div>
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" d="M1 1L5 5L1 9" stroke="white" />
                </svg>
            </li>
        </a>
    )
}

const NavLinks = (props) => {
    return (
        <li><a href={props.link}>{props.name}</a></li>
    )
}

class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = { clicked: false };
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(state => ({ clicked: !state.clicked }))
    }
    render() {
        return (
            <div className="container">
                <nav style={this.state.clicked ? {backgroundColor: "#070724"}  :  {backgroundColor: "transparent"}}>
                    <a href="../src/index.html">
                        <h1>THE PLANETS</h1>
                    </a>
                    <ul>
                        <NavLinks link="/" name="MERCURY" />
                        <NavLinks link="/venus" name="VENUS" />
                        <NavLinks link="/earth" name="EARTH" />
                        <NavLinks link="/mars" name="MARS" />
                        <NavLinks link="/jupiter" name="JUPITER" />
                        <NavLinks link="/saturn" name="SATURN" />
                        <NavLinks link="/uranus" name="URANUS" />
                        <NavLinks link="/neptune" name="NEPTUNE" />
                    </ul>
                    <div id="mobile" onClick={this.handleClick}>
                        <img style={this.state.clicked ? {opacity: "0.25"}  :  {opacity: "1"}} src={burgerMenu} alt="menu" />
                    </div>
                </nav>
                <div id="navLinks" className={this.state.clicked ? "#navLinks active"  :  "#navLinks"}>
                    <ul>
                        <PlanetLinks link="/" styles="mercury" name="MERCURY" />
                        <PlanetLinks link="/venus" styles="venus" name="VENUS" />
                        <PlanetLinks link="/earth" styles="earth" name="EARTH" />
                        <PlanetLinks link="/mars" styles="mars" name="MARS" />
                        <PlanetLinks link="/jupiter" styles="jupiter" name="JUPITER" />
                        <PlanetLinks link="/saturn" styles="saturn" name="SATURN" />
                        <PlanetLinks link="/uranus" styles="uranus" name="URANUS" />
                        <PlanetLinks link="/neptune" styles="neptune" name="NEPTUNE" />
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navigation;
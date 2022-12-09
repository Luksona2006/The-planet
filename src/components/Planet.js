import {useState} from 'react'
import './Planet.css'


function Planet(props) {
    let [data,setData] = useState(props.image1)
    function overView() {
        setData(data = props.image1)
    }

    function structure() {
        setData(data = props.image2)
    }

    function surface() {
        setData(data = props.image3)
    }
    
    return(
        <>  
            <div className='container'>
                <div className="img-choicesMobile">
                    <div className='choose-divsMobile' style={{borderBottom:  data === props.image1 ? "2px solid" + props.color : "transparent"}} onClick={overView}><h4>OVERVIEW</h4></div>
                    <div className='choose-divsMobile' style={{borderBottom:  data === props.image2 ? "2px solid" + props.color : "transparent"}} onClick={structure}><h4>STRUCTURE</h4></div>
                    <div className='choose-divsMobile' style={{borderBottom:  data === props.image3 ? "2px solid" + props.color : "transparent"}} onClick={surface}><h4>SURFACE</h4></div>
                </div>
            </div>
            <div className="container-planets">
                <div className="main-info">
                    <div>
                        <img src={data} alt="Planet"/>
                    </div>
                    <div className="text-div">
                        <div className="text">
                            <h2>{props.name}</h2>
                            <p>{props.info}</p>
                            <span>Source : <strong>Wikipedia</strong></span>
                        </div>
                        <div className="img-choices">
                            <div className='choose-divs' style={{background:  data === props.image1 ? props.color : "transparent"}} onClick={overView}><h5>01</h5><h4>OVERVIEW</h4></div>
                            <div className='choose-divs' style={{background:  data === props.image2 ? props.color : "transparent"}} onClick={structure}><h5>02</h5><h4>INTERNAL STRUCTURE</h4></div>
                            <div className='choose-divs' style={{background:  data === props.image3 ? props.color : "transparent"}} onClick={surface}><h5>03</h5><h4>SURFACE GEOLOGY</h4></div>
                        </div>
                    </div>
                </div>
                <div className="about-divs">
                    <div className="about"><h6>ROTATION TIME</h6><h3>{props.time}</h3></div>
                    <div className="about"><h6>REVOLUTION TIME</h6><h3>{props.revolution}</h3></div>
                    <div className="about"><h6>RADIUS</h6><h3>{props.radius}</h3></div>
                    <div className="about"><h6>AVERAGE TEMP</h6><h3>{props.temp}</h3></div>
                </div>
            </div>
        </>
    )
}

export default Planet;

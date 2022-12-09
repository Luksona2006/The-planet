import '../components/Planet.css'
import Planet from '../components/Planet.js'
import neptune1 from '../images/neptune-1.png'
import neptune2 from '../images/neptune-2.png'
import neptune3 from '../images/neptune-3.png'

function Neptune() {
  return (
    <>
      <Planet name="NEPTUNE" info="Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus." image1={neptune1} image2={neptune2} image3={neptune3} time="16.08 HOURS" revolution="164.79 YEARS" radius="24,622 KM" temp="-201°C" color="#2D68F0" />
    </>
  );
}

export default Neptune;
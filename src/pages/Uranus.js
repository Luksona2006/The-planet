import '../components/Planet.css'
import Planet from '../components/Planet.js'
import uranus1 from '../images/uranus-1.png'
import uranus2 from '../images/uranus-2.png'
import uranus3 from '../images/uranus-3.png'

function Uranus() {
  return (
    <>
      <Planet name="URANUS" info="Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System." image1={uranus1} image2={uranus2} image3={uranus3} time="17.2 HOURS" revolution="84 YEARS" radius="25,362 KM" temp="-195°C" color="#1EC1A2" />
    </>
  );
}
  
export default Uranus;
import '../components/Planet.css'
import Planet from '../components/Planet.js'
import mercury1 from '../images/mercury-1.png'
import mercury2 from '../images/mercury-2.png'
import mercury3 from '../images/mercury-3.png'

function Mercury() {
  return (
    <>
      <Planet name="MERCURY" info="Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth." image1={mercury1} image2={mercury2} image3={mercury3} time="58.6 DAYS" revolution="87.97 DAYS" radius="2,439.7 KM" temp="430°C" color="#419EBB" />
    </>
  );
}

export default Mercury;
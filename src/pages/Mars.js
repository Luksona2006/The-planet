import '../components/Planet.css'
import Planet from '../components/Planet.js'
import mars1 from '../images/mars-1.png'
import mars2 from '../images/mars-2.png'
import mars3 from '../images/mars-3.png'

function Mars() {
  return (
    <>
      <Planet name="MARS" info="Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16-17% sulfur." image1={mars1} image2={mars2} image3={mars3} time="1.03 DAYS" revolution="1.88 YEARS" radius="3,389.5 KM" temp="-28°C" color="#D14C32"/>
    </>
  );
}

export default Mars;
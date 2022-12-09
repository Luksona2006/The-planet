import '../components/Planet.css'
import Planet from '../components/Planet.js'
import saturn1 from '../images/saturn-1.png'
import saturn2 from '../images/saturn-2.png'
import saturn3 from '../images/saturn-3.png'


function Saturn() {
  return (
    <>
      <Planet name="SATURN" info="Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth." image1={saturn1} image2={saturn2} image3={saturn3} time="10.8 HOURS" revolution="29.46 YEARS" radius="58,232 KM" temp="-138°C" color="#CD5120" />
    </>
  );
}

export default Saturn;
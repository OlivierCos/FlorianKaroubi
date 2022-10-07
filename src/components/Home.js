import '../styles/Home.css';
import imgAccueilDanse from '../assets/Home_Image/danse_trad_accueil.jpg'
import imgAccueilMassage from '../assets/Home_Image/massage_accueil.jpg'
import imgAccueilChant from '../assets/Home_Image/chant_accueil.JPG'
import imgAccueilYoga from '../assets/Home_Image/yoga_accueil.JPG'
import imgLogo from '../assets/Logo_Image/logo_chaussures.png'
import { Link } from 'react-router-dom';

function Home() {


    return (
        <div className="home_body">
            <div className='logo'>
                <img src={imgLogo} alt='' className='img_logo' />
            </div> 
            <div className="home_massage">
                <Link to="/massage">
                    <p className='theme theme_massage'>Massage</p>
                    <img src={imgAccueilMassage} alt='' className='img_home_massage' /> 
                </Link>				
            </div>
            <div className="home_danse">
                <Link to="/danse">
                    <p className="theme theme_danse">Danse</p> 
                    <img src={imgAccueilDanse} alt='' className='img_home_danse' />
                </Link>     
            </div>  
            <div className="home_chant">
                <Link to="/chant">
                    <p className="theme theme_chant">Chant</p>
                    <img src={imgAccueilChant} alt='' className='img_home_chant' />
                </Link>            							       
            </div>
            <div className="home_yoga">
                <Link to="/yoga">
                    <p className="theme theme_yoga">Yoga enfants</p>
                    <img src={imgAccueilYoga} alt='' className='img_home_yoga' />
                </Link>			
            </div>            
        </div>
    )       

}
export default Home;
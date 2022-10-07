import '../styles/Banner.css';
import { Link } from 'react-router-dom';


function Banner() {


	return <div className='banner'>
				<div className="banner_componants">
					<div className="banner_componants2 nav_options">
						<div className="banner_componants3 padding-rubrique">
							<Link to="/profil">Présentation</Link>
						</div>
						<div className="banner_componants3">
							<Link to="/cours">Prestation/Cours</Link>
						</div>														
					</div>					
					<div className="banner_componants3 titre">
						<Link to="/">Florian Karoubi</Link>
					</div>
					<div className="banner_componants2 nav_options">
						<div className="banner_componants3 padding-rubrique">	
							<Link to="/calendrier">Calendrier</Link>
						</div>
						<div className="banner_componants3 padding-rubrique">
							<Link to="/galerie">Galerie</Link>
						</div>
						<div className="banner_componants3">	
							<Link to="/contact">Contact</Link>
						</div>												
					</div>					
				</div>
			</div>
}


export default Banner
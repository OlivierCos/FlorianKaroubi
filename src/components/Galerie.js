import '../styles/Galerie.css';
import imgGalerie1 from '../assets/Galerie_Image/IMG-20220505-WA0023.jpg'
import imgGalerie2 from '../assets/Galerie_Image/IMG-20220505-WA0039.jpg'
import imgGalerie3 from '../assets/Galerie_Image/IMG-20220505-WA0015.jpg'
import imgGalerie4 from '../assets/Galerie_Image/IMG-20220505-WA0014.jpg'
import imgGalerie5 from '../assets/Galerie_Image/IMG-20220505-WA0012.jpg'
import imgGalerie6 from '../assets/Galerie_Image/IMG-20220505-WA0008.jpg'
import imgGalerie7 from '../assets/Galerie_Image/IMG-20220505-WA0007.jpg'
import imgGalerie8 from '../assets/Galerie_Image/IMG-20220306-WA0000.jpg'
import imgGalerie9 from '../assets/Galerie_Image/IMG_20220627_105225.jpg'
import imgGalerie10 from '../assets/Galerie_Image/IMG_20220403_211959.jpg'
import imgGalerie11 from '../assets/Galerie_Image/IMG_20220403_211939.jpg'
import imgGalerie12 from '../assets/Galerie_Image/IMG_20220222_145604.jpg'
import imgGalerie13 from '../assets/Galerie_Image/2020Inde2.jpg'
import imgGalerie14 from '../assets/Galerie_Image/2020Inde1.JPG'
import imgGalerie15 from '../assets/Galerie_Image/2018_Puszcza_Kampinoska_Numinosum_Festival.jpg'
import imgGalerie16 from '../assets/Galerie_Image/2018_Bielorussie_Spectacle_armenien_2.jpg'
import imgGalerie17 from '../assets/Galerie_Image/2018_Bielorussie_Spectacle_armenien_1.jpg'
import imgGalerie18 from '../assets/Galerie_Image/2018_Bielorussie_1.jpg'
import imgGalerie19 from '../assets/Galerie_Image/2018_Aurelie_Flo_3.jpg'
import imgGalerie20 from '../assets/Galerie_Image/2015_Corinne_Borsotto.jpg'
import imgGalerie21 from '../assets/Galerie_Image/2010_Bal_Bures_juin_2010.jpg'
import imgGalerie22 from '../assets/Galerie_Image/2009_Gala_Bures.jpg'
import imgGalerie23 from '../assets/Galerie_Image/2009_Bal_Ris.jpg'
import imgGalerie24 from '../assets/Galerie_Image/2000.JPG'

// const reqImg = require.context ( '../assets/Galerie_Image/', true, /\.(png|jpg|JPG|)$/ )


function Galerie() {

    return (
<div class="fotorama"  data-nav="thumbs" data-allowfullscreen="true"  data-height="550" data-maxwidth="100%" data-ratio="4/3"  >
    <img src={imgGalerie1} alt='' className='img_Galerie' />
    <img src={imgGalerie2} alt='' className='img_Galerie' />
    <img src={imgGalerie3} alt='' className='img_Galerie' />
    <img src={imgGalerie4} alt='' className='img_Galerie' />
    <img src={imgGalerie5} alt='' className='img_Galerie' />
    <img src={imgGalerie6} alt='' className='img_Galerie' />
    <img src={imgGalerie7} alt='' className='img_Galerie' />
    <img src={imgGalerie8} alt='' className='img_Galerie' />
    <img src={imgGalerie9} alt='' className='img_Galerie' />
    <img src={imgGalerie10} alt='' className='img_Galerie' />
    <img src={imgGalerie11} alt='' className='img_Galerie' />
    <img src={imgGalerie12} alt='' className='img_Galerie' />
    <img src={imgGalerie13} alt='' className='img_Galerie' />
    <img src={imgGalerie14} alt='' className='img_Galerie' />
    <img src={imgGalerie15} alt='' className='img_Galerie' />
    <img src={imgGalerie16} alt='' className='img_Galerie' />
    <img src={imgGalerie17} alt='' className='img_Galerie' />
    <img src={imgGalerie18} alt='' className='img_Galerie' />
    <img src={imgGalerie19} alt='' className='img_Galerie' />
    <img src={imgGalerie20} alt='' className='img_Galerie' />
    <img src={imgGalerie21} alt='' className='img_Galerie' />
    <img src={imgGalerie22} alt='' className='img_Galerie' />
    <img src={imgGalerie23} alt='' className='img_Galerie' />
    <img src={imgGalerie24} alt='' className='img_Galerie' />
</div>        )       
}


export default Galerie;
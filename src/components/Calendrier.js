import '../styles/Calendrier.css';
import imgGalerie22 from '../assets/Galerie_Image/2009_Gala_Bures.jpg'
import imgGalerie23 from '../assets/Galerie_Image/2009_Bal_Ris.jpg'
import imgGalerie24 from '../assets/Galerie_Image/2000.JPG'


function Calendrier() {
    //  openFullscreen = () =>{  document.getElementById('image')?.requestFullscreen();}


    return (
        <div >
            <h1 > Mes différentes activités et formations réalisées</h1>
                <div className='tableaux'>
                    <div className='tableau1'><h2>Projets pro</h2>
                        <table className="calendrier">
                            <thead className="calendrier_thead">
                                <tr>
                                    <th>Année</th>
                                    <th>Intitulé</th>
                                    <th>Organisme</th>
                                    <th>Lieu</th>
                                    <th>Photos</th>
                                </tr>
                            </thead>
                            <tbody className="calendrier_body">
                                <tr className='tableau_empty_line'></tr>
                                <tr>
                                    <td>2020 à aujourd’hui</td>
                                    <td>Enseignant artistique en danse traditionnelle</td>
                                    <td>Conservatoires de Malakoff, de Bois Colombes et de Châtenay Malabry</td>
                                    <td>FR-Malakoff-Bois Colombes-Châtenay Malabry</td>
                                    <td className='table_img'>
                                       <img id='image' className="table__img" alt='' src={imgGalerie22} ></img>
                                        <img id='image' className="table__img" alt='' src={imgGalerie23} ></img>
                                        <img id='image' className="table__img" alt='' src={imgGalerie24} ></img>
                                    </td>
                                </tr>
                                <tr className='tableau_empty_line'></tr>
                                <tr>
                                    <td>2015 à aujourd’hui</td>
                                    <td>Président de l’association Cultinera</td>
                                    <td>Cultinera</td>
                                    <td>FR-Evry</td>
                                    <td></td>
                                </tr>
                                <tr className='tableau_empty_line'></tr>
                                <tr>
                                    <td>2022</td>
                                    <td>Emission de radio</td>
                                    <td>Radio libertaire, Folkallier</td>
                                    <td>FR-Paris</td>
                                    <td></td>
                                </tr>
                                <tr className='tableau_empty_line'></tr>
                                <tr>
                                    <td>2022</td>
                                    <td>Conférence sur la Danse traditionnelle</td>
                                    <td>Conservatoire de Bois-Colombes</td>
                                    <td>FR-Bois-Colombes</td>
                                    <td></td>
                                </tr>
                                <tr className='tableau_empty_line'></tr>
                                <tr>
                                    <td>2022</td>
                                    <td>Stage de danse traditionnelle de l’Est de l’Europe (3 jours)</td>
                                    <td>Association L’air libre</td>
                                    <td>FR-Sonchamp</td>
                                    <td></td>
                                </tr>
                                <tr className='tableau_empty_line'></tr>
                                <tr>
                                    <td>2022</td>
                                    <td>Stage de danse traditionnelle de l’Est de l’Europe (3 jours)</td>
                                    <td>Association L’air libre</td>
                                    <td>FR-Villebon sur Yvette</td>
                                    <td></td>
                                </tr>
                                <tr className='tableau_empty_line'></tr>
                                <tr>
                                    <td>2022</td>
                                    <td>Projet Totoro</td>
                                    <td>Conservatoire de Bois-Colombes</td>
                                    <td>FR-Bois-Colombes</td>
                                    <td></td>
                                </tr>
                                <tr className='tableau_empty_line'></tr>
                                <tr>
                                    <td>2022</td>
                                    <td>Projet Qui je suis ? D’où je viens ?</td>
                                    <td>Conservatoire de Malakoff</td>
                                    <td>FR-Malakoff</td>
                                    <td></td>
                                </tr>
                                <tr className='tableau_empty_line'></tr>
                                <tr>
                                    <td>2022</td>
                                    <td>Projet Hansel et Gretel</td>
                                    <td>Conservatoire de Malakoff</td>
                                    <td>FR-Malakoff</td>
                                    <td></td>
                                </tr>
                                <tr className='tableau_empty_line'></tr>
                                <tr>
                                    <td>2022</td>
                                    <td>Formation en danse traditionnelle pour des enseignants (musique)</td>
                                    <td>Conservatoire de Châtenay Malabry</td>
                                    <td>FR-Châtenay Malabry</td>
                                    <td></td>
                                </tr>
                                <tr className='tableau_empty_line'></tr>
                                <tr>
                                    <td>2022</td>
                                    <td>Formation en danse traditionnelle pour des enseignants</td>
                                    <td>CFMI</td>
                                    <td>Chilly Mazarin</td>
                                    <td></td>
                                </tr>
                                <tr className='tableau_empty_line'></tr>
                                <tr>
                                    <td>2021</td>
                                    <td>Animation ateliers de danses traditionnelle de l’Europe de l’Est (2 semaines)</td>
                                    <td>L’Espace des possibles</td>
                                    <td>FR-Meschers sur Gironde</td>
                                    <td></td>
                                </tr>
                                <tr className='tableau_empty_line'></tr>
                                <tr>
                                    <td>2021</td>
                                    <td>Stage de danse de Bourrée 3 temps et stage de danse bretonne</td>
                                    <td>Festival privé</td>
                                    <td>FR-Castaignos Souslens</td>
                                    <td></td>
                                </tr>
                                <tr className='tableau_empty_line'></tr>
                                <tr>
                                    <td>2020</td>
                                    <td>Animation ateliers de danses traditionnelle sans contact (2 semaines)</td>
                                    <td>L’Espace des possibles</td>
                                    <td>FR-Meschers sur Gironde</td>
                                    <td></td>
                                </tr>
                                <tr className='tableau_empty_line'></tr>
                                <tr>
                                    <td>2019</td>
                                    <td>Animation atelier de danse Biélorusse</td>
                                    <td>Petit bal de l’Europa</td>
                                    <td>FR-Gennetines</td>
                                    <td></td>
                                </tr>
                                <tr className='tableau_empty_line'></tr>
                                <tr>
                                    <td>2019</td>
                                    <td>Animations ponctuelles d’ateliers de danses traditionnelles</td>
                                    <td>Festival Indépendant Dorothy</td>
                                    <td>FR-Paris et province</td>
                                    <td></td>
                                </tr>
                                <tr className='tableau_empty_line'></tr>
                                <tr>
                                    <td>2018</td>
                                    <td>Stage de danse Biélorusse</td>
                                    <td>Danse Univers</td>
                                    <td>FR-Paris</td>
                                    <td></td>
                                </tr>
                                <tr className='tableau_empty_line'></tr>
                                <tr>
                                    <td>2017-2018</td>
                                    <td>SVE en Biélorussie – Enseignement des danses traditionnelles</td>
                                    <td>Fédération des clubs UNESCO de Biélorussie</td>
                                    <td>BY-Minsk</td>
                                    <td></td>
                                </tr>
                                <tr className='tableau_empty_line'></tr>
                                <tr>
                                    <td>2016</td>
                                    <td>Atelier de danse pour les enfants</td>
                                    <td>Festival littéraire et artistique</td>
                                    <td>FR-Thénac</td>
                                    <td></td>
                                </tr>
                                <tr className='tableau_empty_line'></tr>
                                <tr>
                                    <td>2012</td>
                                    <td>Animation d’ateliers</td>
                                    <td>L’Amuse Danse</td>
                                    <td>FR-Chartrette</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='tableau2'> <h2>Pratiques personnelles</h2>
                            <table className="calendrier">
                                <thead className="calendrier_thead">
                                <tr>
                                    <th>Année</th>
                                    <th>Intitulé</th>
                                    <th>Organisme</th>
                                    <th>Lieu</th>
                                    <th>Photos</th>
                                </tr>
                            </thead>
                            <tbody className="calendrier_body">                                
                                <tr className='tableau_empty_line'></tr>
                                <tr>
                                    <td>2022</td>
                                    <td>Festival Fisel</td>
                                    <td>Fisellerie</td>
                                    <td>Rostrenn</td>
                                    <td></td>
                                </tr>
                                <tr className='tableau_empty_line'></tr>
                                <tr>
                                    <td>2022</td>
                                    <td>Echange de chant</td>
                                    <td>Françoise et Agnès</td>
                                    <td>Crossac</td>
                                    <td></td>
                                </tr>
                                <tr className='tableau_empty_line'></tr>
                                <tr>
                                    <td>2022</td>
                                    <td>Stage de Voiron</td>
                                    <td>ADP</td>
                                    <td>Voiron</td>
                                    <td></td>
                                </tr>
                                <tr className='tableau_empty_line'></tr>
                                <tr>
                                    <td>2022</td>
                                    <td>Voyage en Suède, Stage de Föllinge, Stage</td>
                                    <td>Voyage</td>
                                    <td>Suède</td>
                                    <td></td>
                                </tr>
                                <tr className='tableau_empty_line'></tr>
                                <tr>
                                    <td>2022</td>
                                    <td>Les volcaniques</td>
                                    <td>Les Brayauds</td>
                                    <td>Riom</td>
                                    <td></td>
                                </tr>
                                <tr className='tableau_empty_line'></tr>
                                <tr>
                                    <td>2021</td>
                                    <td>Randonnée en Aubrac sur les lieux de collectage de danse</td>
                                    <td>Personnel - Laurant Balabau</td>
                                    <td>Aubrac</td>
                                    <td></td>
                                </tr>
                                <tr className='tableau_empty_line'></tr>
                                <tr>
                                    <td>2018</td>
                                    <td>Voyage sur les côtes de la Mer Noir</td>
                                    <td>Personnel </td>
                                    <td>Turquie</td>
                                    <td></td>
                                </tr>
                                <tr className='tableau_empty_line'></tr>
                                <tr>
                                    <td>2015-2016</td>
                                    <td>Voyage à la découverte des traditions de l’Italie à l’Iran</td>
                                    <td>Cultinera </td>
                                    <td>Monde</td>
                                    <td></td>
                                </tr>
                                <tr className='tableau_empty_line'></tr>
                                <tr>
                                    <td>2011</td>
                                    <td>Représentation à l’étranger	</td>
                                    <td>Groupe folklorique de Roissy en Brie</td>
                                    <td>UK-Colwyn Bay</td>
                                    <td></td>
                                </tr>
                                <tr className='tableau_empty_line'></tr>
                                <tr>
                                    <td>2010</td>
                                    <td>Représentation à l’étranger	</td>
                                    <td>Groupe folklorique de Roissy en Brie</td>
                                    <td>CN-Hohhot</td>
                                    <td></td>
                                </tr>
                                <tr className='tableau_empty_line'></tr>
                                <tr>
                                    <td>1996-2000</td>
                                    <td>Participation à un groupe folklorique</td>
                                    <td>Lou Capelou</td>
                                    <td>FR-Savigny sur orge</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='tableau3'><h2>Formations suivies</h2>
                            <table className="calendrier">
                                <thead className="calendrier_thead">
                                    <tr>
                                        <th>Année</th>
                                        <th>Intitulé</th>
                                        <th>Organisme</th>
                                        <th>Lieu</th>
                                        <th>Photos</th>
                                    </tr>
                                </thead>
                                <tbody className="calendrier_body">
                                    <tr className='tableau_empty_line'></tr>
                                    <tr>
                                        <td>2021-2022</td>
                                        <td>Bourse de compagnonnage avec Aurélie Giet</td>
                                        <td>FAMDT</td>
                                        <td>BE-Braine le Comte</td>
                                        <td></td>
                                    </tr>
                                    <tr className='tableau_empty_line'></tr>
                                    <tr>
                                        <td>2021</td>
                                        <td>Formation sur l’accessibilité des publics handicapés</td>
                                        <td>Conservatoire de Châtenay Malabry</td>
                                        <td>FR-Châtenay Malabry</td>
                                        <td></td>
                                    </tr>
                                    <tr className='tableau_empty_line'></tr>
                                    <tr>
                                        <td>2020</td>
                                        <td>Formation cours pour enfant avec Pierre Fey (1 jour)</td>
                                        <td>CMTRA</td>
                                        <td>FR-Lyon</td>
                                        <td></td>
                                    </tr>
                                    <tr className='tableau_empty_line'></tr>
                                    <tr>
                                        <td>2020</td>
                                        <td>Formation en danse sur des répertoires de collectage précis en vue de les retransmettre (1 semaine)</td>
                                        <td>Indépendant</td>
                                        <td>DE-Lörrach</td>
                                        <td></td>
                                    </tr>
                                    <tr className='tableau_empty_line'></tr>
                                    <tr>
                                        <td>2019-2020</td>
                                        <td>Formation en danse thérapie</td>
                                        <td>Per se nota</td>
                                        <td>FR-Paris</td>
                                        <td></td>
                                    </tr>
                                    <tr className='tableau_empty_line'></tr>
                                    <tr>
                                        <td>2014</td>
                                        <td>Premier niveau (bronze) de l’examen de danse suédoise</td>
                                        <td>Balade tes pieds</td>
                                        <td>SE-Östersund</td>
                                        <td></td>
                                    </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
        </div>
              )       

}
export default Calendrier;
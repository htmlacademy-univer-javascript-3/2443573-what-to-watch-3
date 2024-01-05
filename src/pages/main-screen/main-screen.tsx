import MovieCard from '../../components/movie-card/movie-card';
import SmallMovieCard from '../../components/movie-card/small-movie-card';


export default function MainScreen(): JSX.Element {
  return (
    <>

      <MovieCard title="The Grand Budapest Hotel" genre="Drama"
        poster_img_src="img/the-grand-budapest-hotel-poster.jpg"
        img_src="img/bg-the-grand-budapest-hotel.jpg" year={2014}
      />

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <a href="#" className="catalog__genres-link">
              All genres
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
              Comedies
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
              Crime
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
              Documentary
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
              Dramas
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
              Horror
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
              Kids &amp; Family
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
              Romance
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
              Sci-Fi
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
              Thrillers
              </a>
            </li>
          </ul>

          <div className="catalog__films-list">
            <SmallMovieCard img_src="img/bohemian-rhapsody.jpg" img_alt="Bohemian Rhapsody" title="Bohemian Rhapsody"/>
            <SmallMovieCard img_src="img/macbeth.jpg" img_alt="Macbeth" title="Macbeth"/>
            <SmallMovieCard img_src="img/aviator.jpg" img_alt="Aviator" title="Aviator"/>
            <SmallMovieCard img_src="img/revenant.jpg" img_alt="Revenant" title="Revenant"/>
            <SmallMovieCard img_src="img/pulp-fiction.jpg" img_alt="Pulp Fiction" title="Pulp Fiction"/>
            <SmallMovieCard img_src="img/no-country-for-old-men.jpg" img_alt="No Country for Old Men" title="No Country for Old Men"/>
            <SmallMovieCard img_src="img/snatch.jpg" img_alt="Snatch" title="Snatch"/>
            <SmallMovieCard img_src="img/moonrise-kingdom.jpg" img_alt="Moonrise Kingdom" title="Moonrise Kingdom"/>
            <SmallMovieCard img_src="img/seven-years-in-tibet.jpg" img_alt="Seven Years in Tibet" title="Seven Years in Tibet"/>
            <SmallMovieCard img_src="img/mindhunter.jpg" img_alt="Mindhunter" title="Mindhunter"/>
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">
            Show more
            </button>
          </div>

        </section>


        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">M</span>
              <span className="logo__letter logo__letter--2"></span>
              <span className="logo__letter logo__letter--3">H</span>
            </a>
          </div>
          <div className="copyright">
            <p>© 2023 Movie House Ltd.</p>
          </div>
        </footer>
      </div>
    </>);

}

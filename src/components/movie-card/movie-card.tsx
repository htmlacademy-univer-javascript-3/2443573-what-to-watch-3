import { Setting } from '../../const';

type PromoMovieProps = {
    title: string;
    genre: string;
    year: number;
    poster_img_src: string;
    img_src: string;
    img_alt?: string;
    img_width?: number;
    img_height?: number;
}

export default function MovieCard(props: PromoMovieProps): JSX.Element {
  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img
          src={props.img_src}
          alt={props.img_alt}
        />
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <header className="page-header film-card__head">
        <div className="logo">
          <a className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img
                src={Setting.UserAvatarImgSrc}
                alt={Setting.UserAvatarImgAlt}
                width={Setting.UserAvatarWidth}
                height={Setting.UserAvatarHeight}
              />
            </div>
          </li>
          <li className="user-block__item">
            <a className="user-block__link">Sign out</a>
          </li>
        </ul>
      </header>
      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img
              src={props.poster_img_src}
              alt={`${props.title } poster`}
              width={props.img_width || 218}
              height={props.img_height || 327}
            />
          </div>
          <div className="film-card__desc">
            <h2 className="film-card__title">{props.title}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{props.genre}</span>
              <span className="film-card__year">{props.year}</span>
            </p>
            <div className="film-card__buttons">
              <button className="btn btn--play film-card__button" type="button">
                <svg viewBox="0 0 19 19" width={19} height={19}>
                  <use xlinkHref="#play-s" />
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list film-card__button" type="button">
                <svg viewBox="0 0 19 20" width={19} height={20}>
                  <use xlinkHref="#add" />
                </svg>
                <span>My list</span>
                <span className="film-card__count">9</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>);
}

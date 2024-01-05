import { Setting } from '../../const';

type SmallMovieCardProps = {
    img_src: string;
    img_alt?: string;
    title: string;
}

export default function SmallMovieCard(props: SmallMovieCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img
          src={props.img_src}
          alt={props.img_alt}
          width={Setting.SmallCardImageWidth}
          height={Setting.SmallCardImageHeight}
        />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">
          {props.title}
        </a>
      </h3>
    </article>
  );
}

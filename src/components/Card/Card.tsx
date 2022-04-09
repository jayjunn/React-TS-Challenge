import React from "react";
import { Link } from "react-router-dom";
import { Movie } from "../../types/types";
import "./Card.css";

/**
 * This should be a React component that, at the very least,
 * comprises an image component a title and a description or details__headering.
 * Types/Interfaces should be defined in a separate module and imported here
 *
 * @param props
 * @returns
 *
 */

function Card(props: Movie) {
  const { title, image, id } = props;

  return (
    <Link to={`/movies/${id}`} key={id}>
      <li className="card__box">
        <img
          src={`https://image.tmdb.org/t/p/w500/${image}`}
          alt="poster_image"
          width="70%"
        />
        <span className="card__title">{title}</span>
      </li>
    </Link>
  );
}

export default Card;

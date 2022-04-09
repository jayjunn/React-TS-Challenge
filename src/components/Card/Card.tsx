import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { Movie } from "../../types/types";

/**
 * This should be a React component that, at the very least,
 * comprises an image component a title and a description or subheading.
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
      <li className={styles.container}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${image}`}
          alt="poster_image"
          width="70%"
        />
        <span className={styles.title}>{title}</span>
      </li>
    </Link>
  );
}

export default Card;

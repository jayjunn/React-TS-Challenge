import React from "react";

interface CardProps {
  image: any;
  name: any;
  homePort: any;
  roles: any;
}

/**
 * This should be a React component that, at the very least,
 * comprises an image component a title and a description or subheading.
 * Types/Interfaces should be defined in a separate module and imported here
 *
 * @param props
 * @returns
 *
 */

function Card(props: CardProps) {
  const { image, name, homePort, roles } = props;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "15px",
        color: "#333",
        border: "solid 1px #333",
        borderRadius: "5px",
      }}
    >
      <div
        style={{
          width: "90%",
          height: "200px",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <h1>{name}</h1>
      <h2>{homePort}</h2>
      <ul>
        {roles.map((role: any) => (
          <li key={role}>{role}</li>
        ))}
      </ul>
    </div>
  );
}

export default Card;

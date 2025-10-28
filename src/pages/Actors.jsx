import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/actors")
      .then((response) => response.json())
      .then((data) => {
        setActors(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching actors:", error);
        setLoading(false);
        // Mock data for testing
        setActors([
          {
            id: 1,
            name: "Benedict Cumberbatch",
            movies: ["Doctor Strange", "The Imitation Game", "Black Mass"],
          },
        ]);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <NavBar />
      <h1>Actors Page</h1>
      {actors.map((actor) => (
        <article key={actor.id}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </>
  );
}

export default Actors;

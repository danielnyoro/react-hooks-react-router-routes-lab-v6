import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/directors")
      .then((response) => response.json())
      .then((data) => {
        setDirectors(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching directors:", error);
        setLoading(false);
        // Mock data for testing
        setDirectors([
          {
            id: 1,
            name: "Scott Derrickson",
            movies: [
              "Doctor Strange",
              "Sinister",
              "The Exorcism of Emily Rose",
            ],
          },
        ]);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <NavBar />
      <h1>Directors Page</h1>
      {directors.map((director) => (
        <article key={director.id}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </>
  );
}

export default Directors;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function RandomFood() {
  const [randomFood, setRandomFood] = useState([]);
  useEffect(() => {
    fetch("www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        setRandomFood(data.meals);
      });
  });

  return (
    <div>
      <h1>Meal of the Day</h1>
      <Link>
        <h2>{randomFood[0].strMeal}</h2>
        <div>
          <p></p>
          <p></p>
        </div>
      </Link>
    </div>
  );
}

export default RandomFood;

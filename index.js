
 // The API endpoint we're pulling planet data from.
  const API_URL = "https://anurella.github.io/json/planet.json";

  // We'll store the fetched array here once, so we don't re-fetch on every search.
  let planets = [];

   // Grab references to the elements we need to work with.
  const input = document.getElementById("planet-input");
  const button = document.getElementById("search-btn");
  const resultDiv = document.getElementById("result");
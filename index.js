
 // The API endpoint we're pulling planet data from.
  const API_URL = "https://anurella.github.io/json/planet.json";

  // We'll store the fetched array here once, so we don't re-fetch on every search.
  let planets = [];

   // Grab references to the elements we need to work with.
  const input = document.getElementById("js-planet-input");
  const button = document.getElementById("js-search-btn");
  const resultDiv = document.getElementById("js-result");

  // --- Step 1: fetch the data as soon as the page loads ---
  async function loadPlanets() {
    try {
      // Create a variable that stores the response of the server
      const response = await fetch(API_URL);

      if (!response.ok) throw new Error("Network response was not ok");

      // Converting JSON into JavaScript data
      planets = await response.json(); // parse JSON text into a JS array
    } catch (err) {
      js-resultDiv.innerHTML = `<p class="message">Couldn't load planet data. Please refresh.</p>`;
      console.error(err);
    }
  }

// --- Step 2: find a planet by name (case-insensitive) ---
  function findPlanet(name) {
    const planetName = name.trim().toLowerCase();
    return planets.find(p => p.name.toLowerCase() === planetName);
  }

  function handleSearch() {
    const name = input.value;

    
  }
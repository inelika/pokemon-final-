const data = {
    name: "Bulbasaur",
    height: 7,
    weight: 69,
    sprites: {
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    }
  };
  
  document.getElementById("pokemon-name").innerHTML = data.name;
  document.getElementById("pokemon-avatar").src = data.sprites.front_default;
  document.getElementById("info").innerHTML = `
    <p><strong>Height:</strong> ${data.height}</p>
    <p><strong>Weight:</strong> ${data.weight}</p>
  `;

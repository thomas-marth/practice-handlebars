import "./css/style.css";
import ditto from "./dataBases/ditto.json";
import bulbasaur from "./dataBases/bulbasaur.json";
import pokemonTemplate from "./templates/pokemonTemplate.hbs";

// console.log(ditto);
// console.log(pokemonTemplate(ditto));

function createMarkup(...params) {
  params.map((param) => {
    document.body.insertAdjacentHTML("beforeend", pokemonTemplate(param));
  });
}

createMarkup(ditto, bulbasaur);

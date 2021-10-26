import "./css/style.css";
import ditto from "./dataBases/ditto.json";
import bulbasaur from "./dataBases/bulbasaur.json";
import pokemonTemplate from "./templates/pokemonTemplate.hbs";

// console.log(ditto);
// console.log(pokemonTemplate(ditto));

function markupMaker(...params) {
  params.map((param) => {
    pokemonTemplate(param);
    document.body.insertAdjacentHTML("beforeend", pokemonTemplate(param));
  });
}

markupMaker(ditto, bulbasaur);

import cardsTpi from "../templates/card_product.hbs";
import addElement from "./addElement.js";
import { BASE_URL } from "../utils/crud/constData.js";

const cards_container = document.querySelector(".js_cards");

fetch(`${BASE_URL}/notebook`)
  .then((response) => response.json())
  .then((products) => {
    products.forEach((product) => {
      const cardEl = cardsTpi(product);
      addElement(cardEl, cards_container);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

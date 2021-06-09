/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
function MazoCarta() {
  const numeros = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const pintas = ["Hearts", "Diamonds", "Spades", "Clubs"];
  const cards = [];
  for (let i = 0; i < pintas.length; i++) {
    for (let c = 0; c < numeros.length; c++) {
      const numero = numeros[c];
      const pinta = pintas[i];
      cards.push({ numero, pinta });
    }
  }
  return cards;
}

function randomCard(cards) {
  const random = Math.floor(Math.random() * 51);
  const numerocarta = cards[random].numero;
  const pintacarta = cards[random].pinta;
  let dibujo;
  pintacarta === "Diamonds"
    ? (dibujo = "&diams;")
    : (dibujo = "&" + pintacarta.toLowerCase() + ";");
  const card = document.createElement("div");
  card.classList.add("card", pintacarta.toLowerCase());
  card.innerHTML =
    '<span class="card-pinta top">' +
    dibujo +
    "</span>" +
    '<span class="card-numero">' +
    numerocarta +
    "</span>" +
    '<span class="card-pinta bot">' +
    dibujo +
    "</span>";
  document.body.appendChild(card);
}
const cards = MazoCarta();
randomCard(cards);

/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let newDomain = '';

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        newDomain += '<li class="list-group-item">' + pronoun[i] + adj[j] + noun[k] + '.com' + '</li>';
      }
    }
  }
  document.querySelector(".list-group").innerHTML = newDomain;
}


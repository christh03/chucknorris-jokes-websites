const btn = document.querySelector(".main__button");
const containerJokes = document.querySelector(".container");

const url = "https://api.chucknorris.io/jokes/random";

btn.addEventListener("click", function () {
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.send();

  request.addEventListener("load", function () {
    const data = JSON.parse(this.responseText);
    const { value } = data;

    const html = `
        <li class="main-jokes">
          <p class="main-jokes__item">
           ${value}
          </p>
        </li>
    `;

    containerJokes.insertAdjacentHTML("beforeend", html);
  });
});

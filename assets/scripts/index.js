const $main = document.querySelector(".main");

fetch("assets/data.json").then(async resp => {
      const body = await resp.json();
      body.forEach(data => renderCard(data));
});

function renderCard(data) {
      const $container = document.createElement("div");
      $container.className = "card__container";

      let html = "";

      data.forEach(item => {
            html += `
            <div class="card p-2">
                <div class="card__image">
                   <img src="${item.image}" alt="image">
                </div>
                <h2 class="card__title">${item.title}</h2>
                <p class="card__description">${item.desc}</p>
                <a class="card__link" href="">View Product</a>
            </div>
        `;
      });

      $container.insertAdjacentHTML("beforeend", html);
      $main.append($container);
}

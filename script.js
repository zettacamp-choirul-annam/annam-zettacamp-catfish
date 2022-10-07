const $container = document.querySelector(".card__container");

fetch("data.json").then(async resp => {
      const data = await resp.json();
      renderCard(data);
});

function renderCard(data) {
      let html = "";

      data.forEach(item => {
            html += `
            <div class="card p-2">
                <img class="card__image" src="${item.image}" alt="image">
                <h2 class="card__title">${item.title}</h2>
                <p class="card__desc">${item.desc}</p>
                <a class="card__link" href="">View Product</a>
            </div>
        `;
      });

      $container.innerHTML = html;
}

const $list1 = document.querySelector(".list__1");
const $list2 = document.querySelector(".list__2");

const template = `
<li class="list__item mb-2">
      <div class="list__item__image"></div>
      <div class="list__item__details">
            <div class="list__item__name">Item Name</div>
            <div class="list__item__price">Item Price</div>
      </div>
</li>`;

let html = "";

for (let i = 0; i < 20; i++) { html += template }

$list1.innerHTML = html;
$list2.innerHTML = html;

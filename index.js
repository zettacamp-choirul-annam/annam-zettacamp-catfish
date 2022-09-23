// experiment bikin SPA. karena aku kepo hehe :)

const $links   = document.querySelectorAll(".nav__item");
const $content = document.querySelector(".content");

const router = {
      init: function() {
            const search = window.location.search;
            const params = new URLSearchParams(search)

            this.route(params.get("page") || "home");
      },

      route: async function(page) {
            try {
                  const resp = await fetch("pages/" + page + ".html");
                  const html = await resp.text();

                  $content.innerHTML = html;
                  document.title = ucfirst(page);
                  feather.replace();

                  function ucfirst(text) {
                        return text.slice(0, 1).toUpperCase() + text.slice(1);
                  }
            }

            catch (error) { alert(error.message) }
      }
};

$links.forEach($link => {
      $link.addEventListener("click", e => {
            e.preventDefault();
            window.history.pushState({}, null, $link.href);
            router.init();
      });
});

window.onpopstate = () => router.init();
router.init();
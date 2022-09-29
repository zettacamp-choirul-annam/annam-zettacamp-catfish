const $form    = document.querySelector(".form");
const $profile = document.querySelector(".profile");
const $profile_table = document.querySelector(".profile__table");

if ($profile_table) showProfiles();

if ($form) {
      $form.addEventListener("submit", async e => {
            e.preventDefault();
      
            const data = {
                  firstName : $form.first_name.value,
                  lastName  : $form.last_name.value,
                  email     : $form.email.value,
                  birth     : $form.birth.value,
                  telp      : $form.telp.value,
                  password  : $form.password.value,
                  about     : $form.about.value,
                  gender    : $form.gender.value,
                  picture   : await convertFileToUri($form.picture.files[0]),
            };
            
            saveProfile(data);
            showProfile(data);
      });
}

function convertFileToUri(file) {
      return new Promise(resolve => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.readAsDataURL(file);
      });
}

function saveProfile(data) {
      const profiles = retriveProfiles() || [];
      profiles.push(data);
      localStorage.setItem("profiles", JSON.stringify(profiles));
}

function retriveProfiles() {
      const profiles = localStorage.getItem("profiles");
      return JSON.parse(profiles);
}

// buat nampilin profile di halaman profiles
function showProfiles() {
      const profiles = retriveProfiles();

      const template = data => {
            return `
                  <tr>
                        <td class="table__item round"><img src="${data.picture}" alt=""></td>
                        <td>${data.firstName}</td>
                        <td>${data.lastName}</td>
                        <td>${data.birth}</td>
                        <td>${data.email}</td>
                        <td>${data.telp}</td>
                        <td>${data.password.replace(/.*/g, "*")}</td>
                        <td>${data.about}</td>
                        <td>${data.gender}</td>
                  </tr>
            `;
      }

      profiles.forEach(profile => {
            const html = template(profile);
            $profile_table.insertAdjacentHTML("beforeend", html);
      });
}

// buat nampilin profile di halaman register
function showProfile(data) {
      const template = `
            <img class="profile__pict" src="${data.picture}" alt="">
            <div class="profile__name">${data.firstName + " " + data.lastName}</div>
            <div class="profile__birth">${data.birth}</div>
            <div class="profile__email">${data.email}</div>
            <div class="profile__password">${data.password.replace(/.*/g, "*")}</div>
            <div class="profile__phone">${data.telp}</div>
            <div class="profile__gender">${data.gender}</div>
            <p class="profile__about">${data.about}</p>
      `;

      $profile.innerHTML = template;
}
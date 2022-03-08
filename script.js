const url = "https://api.github.com/users/";
const input = document.getElementById("user");
const form = document.getElementById("input");
const btn = document.getElementById("submit");
const list = document.getElementById("users");

async function getUser(username) {
  const user = await (await fetch(url + username)).json();
  displayUser(user);
}
function displayUser(user) {
  const card = `
    <div class="user"> 
        <div class = "profile">
            <img src = "${user.avatar_url}" class = "avatar">
            <div class = "profile-content">
                <h3>${user.name}</h3>
                <p>${user.bio}</p>
                <p> </p>
            </div>
        </div>
        <div class="profile-statistics">
            <div class = "repos">
                <p> Repository </p>
                <span>${user.public_repos}</span> 
            </div>
            <div class = "followers">
                <p> Followers </p>
                <span> ${user.followers}  </span>
            </div>
            <div class = "following">
                <p> Following </p>
                <span> ${user.following}  </span>
            </div>
        </div>
        <div class = "info"> 
            <p class="location"><i class="fa-solid fa-location-dot"></i> <span>${
              user.location ? user.location : "No Avaible"
            }</span> </p>
            <p class="twitter"><i class="fa-brands fa-twitter"></i> <a href="https://twitter.com/${
              user.twitter_username
            }" target="blank">${
    user.twitter_username ? user.twitter_username : "No Avaible"
  } </a> </p>
            <p class="blog"><i class="fa-brands fa-blog"></i> <span>${
              user.blog ? user.blog : "No Avaible"
            }</span> </p>
            <p class="company"><i class="fa-solid fa-building"></i> <span>${
              user.company ? user.company : "No Avaible"
            }</span> </p>
        </div>
    </div>
    `;
  list.innerHTML = "";
  if (user.message === "Not Found") {
    return alert("User Not Found ! Try again");
  } else {
    list.innerHTML += card;
  }
}

btn.addEventListener("click", (e) => {
  const username = input.value;

  getUser(username);
  e.preventDefault();
});

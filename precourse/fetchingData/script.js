const searchBar = document.querySelector(".searchBar")
console.log(searchBar)
let user = []
searchBar.addEventListener('keyup', (e)=>{
    const searchvalue =e.target.value
    const searchUsers= user.filter((use) =>{
        console.log( use.name.first.includes(searchvalue)|| use.name.second.includes(searchvalue))
    })
})

const getUsers = (element) => {
    fetch("https://randomuser.me/api/?gender=female&results=30")
      .then((response) => response.json())
      .then((data) => {
        const userList = createUserList(data.results);
       
        element.append(userList);
      });
  };
  getUsers();

  function createUserList(users) {
    const userList = document.createElement("div");
    for (let i = 0; i < users.length; i++) {
     user = users[i];
     
      const userHeading = CreateUserNameHeader(user);

      const userImage = createUserImage(user);

      const userDiv = document.createElement("div");

      userDiv.appendChild(userHeading);
      userDiv.appendChild(userImage);

      userList.appendChild(userDiv);
    }
    return userList;
  }

  //image
  function CreateUserNameHeader(user) {
    const userHeading = document.createElement("h2");
    userHeading.textContent = `${user.name.title} ${user.name.first} ${user.name.last}`;
    return userHeading;
  }

  //for user
  function createUserImage(user) {
    const userImage = document.createElement("img");
    userImage.src = `${user.picture.thumbnail}`;
    return userImage;
  }

  document.addEventListener("DOMContentLoaded", () => {
    const main = document.querySelector("main");
    getUsers(main);
  });
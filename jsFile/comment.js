// const userInput = document.getElementById("user-input");
// const commentInput = document.getElementById("comment-input");
// const submitComment = document.querySelector(".submit-comment");
// const quaniitComment = document.querySelector(".quaniit");
// submitComment.addEventListener("click", infoComment);
// let positiveFedback = false;
// newTextArr = [];
// let likesCount = 0;
// function infoComment() {
//   const userForm = userInput.value;
//   const commentForm = commentInput.value;

//   if (userForm && commentForm !== "") {
//     newText = {
//       id: Math.floor(Math.random() * 1000 + 1),
//       userName: userForm,
//       userComment: commentForm,
//       typeOfFeedback: positiveFedback,
//       date: new Date(),
//     };
//     if (positiveFedback === false) {
//       quaniit();
//     }
//     newTextArr.push(newText);
//     console.log(newText);
//     restForm();

//     addInfoComent(newText);
//   }
// }
// function restForm() {
//   userInput.value = "";
//   commentInput.value = "";
//   positiveFedback = true;
// }
// const commentInfo = document.querySelector(".comment-info");

// function addInfoComent(item) {
//   const commentUsers = item.userName.charAt(0);
//   let todey = item.date;
//   let month = todey.getMonth() + 1;
//   let year = todey.getFullYear();
//   let date = todey.getDate();
//   let hours = addZero(todey.getHours());
//   let monuts = addZero(todey.getMinutes());
//   let seconds = addZero(todey.getSeconds());

//   const comments = document.createElement("div");
//   comments.setAttribute("class", "user-comments");
//   comments.innerHTML = `
//     <div class="pic center_display">${commentUsers}</div>
//     <div class="comment_info"> 
//     <small class="nickname">${item.userName}</small>
//     <p class="comment"> ${item.userComment} </p>
//     </div>
//     <div class ="date-time"> 
//     <p> <i class="fa-solid fa-calendar"></i> ${month}-${date}-${year} <i class="fa-regular fa-clock"></i>  ${hours}:${monuts}:${seconds} </P>
//     </div>
//  `;
//   commentInfo.appendChild(comments);
// }
// function quaniit() {
//   likesCount++;
//   quaniitComment.innerHTML = likesCount;
// }

// function addZero(num) {
//   return num < 10 ? `0${num}` : num;
// }


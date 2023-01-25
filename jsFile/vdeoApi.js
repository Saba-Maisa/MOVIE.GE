const api = "78828dca7949b70ca50313e4d49660d1";
const videoYoutube = document.querySelector(".video-youtube");

export function movieApi(movie) {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/${movie}/videos?api_key=${api}&language=en-US`
    )
    .then(function (response) {
      let responseMoves = response.data.results[0];

      const movieDiv = document.createElement("div");
      const movieRemove = document.querySelectorAll(".movieVideoRemove");
      movieDiv.setAttribute("class", "movieVideoRemove");
      movieRemove.forEach((item) => {
        item.remove();
      });

      movieDiv.innerHTML = `
            <iframe src="https://www.youtube.com/embed/${responseMoves.key}"></iframe>  
                   `;
      videoYoutube.appendChild(movieDiv);
    })

    .catch(function (error) {
      console.log(error);
    });
}



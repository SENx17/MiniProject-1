const apikey = "?api_key=5d3979074033b2d59bcb5f78263afcf2";
const baseURL = "https://api.themoviedb.org/3";
const movieURL = `${baseURL}/discover/movie${apikey}`;
const movieURL2 = `${baseURL}/discover/movie${apikey}&page=2`;
const movieURL3 = `${baseURL}/discover/movie${apikey}&page=4`;
const imageURL = "https://image.tmdb.org/t/p/w500";

// Home Original Movies
const getOriginalMovies = () => {
  fetch(movieURL3)
    .then((response) => response.json())
    .then((resJSON) => {
      showOriginalMovies(resJSON.results);
    });
};

const showOriginalMovies = (data) => {
  const originalID =
    document.querySelector("#get-original") ?? document.createElement("div");
  originalID.innerHTML = "";
  data.slice(0, 12).forEach((item) => {
    originalID.innerHTML += `
      <div class="col-sm-6 col-md-4 col-xl-2">
          <div class="card p-0">
              <div class="card-image">
                  <img src="${imageURL}/${item.poster_path}" alt="">
              </div>
              <div class="card-content d-flex flex-column align-items-center">
                  <h4 class="pt-0">${item.title}</h4>
                <div class="btn-cards-container d-flex justify-content-center pt-2">
                  <button class="btn btn-light launch btn-lg" data-bs-toggle="modal" data-bs-target="#modalOriginal${item.id}">Movie details</button>
                </div>
              </div>
          </div>
      </div>
      <!-- Modal -->
      <div
        class="modal fade rounded"
        id="modalOriginal${item.id}"
        data-backdrop="static"
        data-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="row rounded">
              <div class="col-md-5">
                <div class="text-center my-2">
                  <img src="${imageURL}/${item.poster_path}" class="rounded img-fluid"/>
                </div>
              </div>
              <div class="col-md-7 mx-auto my-auto">
                <div class="text-white">
                  <h1 class="mb-1">${item.title}</h1>
                  <span class="intro-1">Release Date : ${item.release_date}</span>
  
                  <div class="mt-4">
                    <span class="intro-2"
                      >${item.overview}</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <!-- Modal End -->
    `;
  });
};
// Home Originals Movies END
// Home Trending Movies
const getTrendingMovies = () => {
  fetch(movieURL)
    .then((response) => response.json())
    .then((resJSON) => {
      showTrendingMovies(resJSON.results);
    });
};

const showTrendingMovies = (data) => {
  const trendingID =
    document.querySelector("#get-trending") ?? document.createElement("div");
  trendingID.innerHTML = "";
  data.slice(0, 12).forEach((item) => {
    trendingID.innerHTML += `
      <div class="col-sm-6 col-md-4 col-xl-2">
          <div class="card p-0">
              <div class="card-image">
                  <img src="${imageURL}/${item.poster_path}" alt="">
              </div>
              <div class="card-content d-flex flex-column align-items-center">
                  <h4 class="pt-0">${item.title}</h4>
                <div class="btn-cards-container d-flex justify-content-center pt-2">
                  <button class="btn btn-light launch btn-lg" data-bs-toggle="modal" data-bs-target="#modalTrending${item.id}">Movie details</button>
                </div>
              </div>
          </div>
      </div>
      <!-- Modal -->
      <div
        class="modal fade"
        id="modalTrending${item.id}"
        data-backdrop="static"
        data-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="row rounded">
              <div class="col-md-5">
                <div class="text-center my-2">
                  <img src="${imageURL}/${item.poster_path}" class="rounded img-fluid"/>
                </div>
              </div>
              <div class="col-md-7 mx-auto my-auto">
                <div class="text-white">
                  <h1 class="mb-1">${item.title}</h1>
                  <span class="intro-1">Release Date : ${item.release_date}</span>
  
                  <div class="mt-4">
                    <span class="intro-2"
                      >${item.overview}</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <!-- Modal End -->
    `;
  });
};
// Home Trending Movies END
// Home Newest Movies
const getNewestMovies = () => {
  fetch(movieURL2)
    .then((response) => response.json())
    .then((resJSON) => {
      showNewestMovies(resJSON.results);
    });
};

const showNewestMovies = (data) => {
  const newestID =
    document.querySelector("#get-newest") ?? document.createElement("div");
  newestID.innerHTML = "";
  data.slice(0, 12).forEach((item) => {
    newestID.innerHTML += `
    <div class="col-sm-6 col-md-4 col-xl-2">
        <div class="card p-0">
            <div class="card-image">
                <img src="${imageURL}/${item.poster_path}" alt="">
            </div>
            <div class="card-content d-flex flex-column align-items-center">
                <h4 class="pt-0">${item.title}</h4>
              <div class="btn-cards-container d-flex justify-content-center pt-2">
                <button class="btn btn-light launch btn-lg" data-bs-toggle="modal" data-bs-target="#modalNew${item.id}">Movie details</button>
              </div>
            </div>
        </div>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="modalNew${item.id}"
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="row rounded">
            <div class="col-md-5">
              <div class="text-center my-2">
                <img src="${imageURL}/${item.poster_path}" class="rounded img-fluid"/>
              </div>
            </div>
            <div class="col-md-7 mx-auto my-auto">
              <div class="text-white">
                <h1 class="mb-1">${item.title}</h1>
                <span class="intro-1">Release Date : ${item.release_date}</span>

                <div class="mt-4">
                  <span class="intro-2">${item.overview}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal End -->
    `;
  });
};
// Home Newest Movies END
// Movies Menu
const getListMovies = () => {
  fetch(movieURL)
    .then((response) => response.json())
    .then((resJSON) => {
      showListMovies(resJSON.results);
    });
};

const showListMovies = (data) => {
  const movieListID =
    document.querySelector("#get-movies") ?? document.createElement("div");
  movieListID.innerHTML = "";
  data.slice(0, 18).forEach((item) => {
    movieListID.innerHTML += `
    <div class="col-sm-6 col-md-4 col-xl-2">
      <div class="card p-0">
          <div class="card-image">
              <img src="${imageURL}/${item.poster_path}" alt="">
          </div>
          <div class="card-content d-flex flex-column align-items-center">
              <h4 class="pt-0">${item.title}</h4>
            <div class="btn-cards-container d-flex justify-content-center pt-2">
             <button class="btn btn-light launch btn-lg" data-bs-toggle="modal" data-bs-target="#modalMovies${item.id}">Movie details</button>
            </div>
          </div>
      </div>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="modalMovies${item.id}"
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="row rounded">
            <div class="col-md-5">
              <div class="text-center my-2">
                <img src="${imageURL}/${item.poster_path}" class="rounded img-fluid"/>
              </div>
            </div>
            <div class="col-md-7 mx-auto my-auto">
              <div class="text-white">
                <h1 class="mb-1">${item.title}</h1>
                <span class="intro-1">Release Date : ${item.release_date}</span>

                <div class="mt-4">
                  <span class="intro-2"
                    >${item.title}</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  <!-- Modal End -->
`;
  });
};
// Movies Menu END
// Upcoming Menu
const getUpcomingMovies = () => {
  fetch(movieURL2)
    .then((response) => response.json())
    .then((resJSON) => {
      showUpcomingMovies(resJSON.results);
    });
};

const showUpcomingMovies = (data) => {
  const upcomingID =
    document.querySelector("#get-upcoming") ?? document.createElement("div");
  upcomingID.innerHTML = "";
  data.slice(0, 18).forEach((item) => {
    upcomingID.innerHTML += `
    <div class="col-sm-6 col-md-4 col-xl-2">
      <div class="card p-0">
          <div class="card-image">
              <img src="${imageURL}/${item.poster_path}" alt="">
          </div>
          <div class="card-content d-flex flex-column align-items-center">
              <h4 class="pt-0">${item.title}</h4>
            <div class="btn-cards-container d-flex justify-content-center pt-2">
              <button class="btn btn-light launch btn-lg" data-bs-toggle="modal" data-bs-target="#modalUpcoming${item.id}">Movie details</button>
            </div>
          </div>
      </div>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="modalUpcoming${item.id}"
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="row rounded">
            <div class="col-md-5">
              <div class="text-center my-2">
                <img src="${imageURL}/${item.poster_path}" class="rounded img-fluid"/>
              </div>
            </div>
            <div class="col-md-7 mx-auto my-auto">
              <div class="text-white">
                <h1 class="mb-1">${item.title}</h1>
                <span class="intro-1">Release Date : ${item.release_date}</span>

                <div class="mt-4">
                  <span class="intro-2"
                    >${item.overview}</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  <!-- Modal End -->
`;
  });
};
// Upcoming Menu END

document.addEventListener(
  "DOMContentLoaded",
  getTrendingMovies(),
  getListMovies(),
  getUpcomingMovies(),
  getNewestMovies(),
  getOriginalMovies()
);

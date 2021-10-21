import { PageList } from './PageList.js'


const timeTranslate = (time) => {
  let mounth = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"] , date, finalDate;

  if(time !== null){
    date = time.split("-")
    finalDate = `${mounth[date[1]-1]} ${date[2]}, ${date[0]}`
    return finalDate
  }
  return "To be determined"
}

const fetchStores = (store) => {
  let display= "";
  store.forEach(store => {
    display += `
    <a href="https://www.${store[1]}">${store[0]}</a>
    </br>
    `
  })
  return display
}

const fetchTrailers = (argument) => {
  fetch(`https://api.rawg.io/api/games/${argument}/movies?key=XX`)
    .then((response) => response.json())
    .then((response) => {
    }
  )
}


const fetchScreenshots = (argument, article) => {
  fetch(`https://api.rawg.io/api/games/${argument}/screenshots?key=XX`)
    .then((response) => response.json())
    .then((response) => {
      let screenshotLinks = "";
      for(let i=0; i < 4; i+=2){
        screenshotLinks +=  `
        <div class="row row-cols-2 py-5">
          <div class="col img__wrap px-5">
            <img class="img-max" src="${response.results[i].image}" />
          </div>
          <div class="col img__wrap px-5">
            <img class="img-max" src="${response.results[i+1].image}" />
          </div>
        </div>
        `
      }
      article.innerHTML += screenshotLinks
    }
  )
}



const PageDetail = (argument) => {
  const preparePage = () => {
    let cleanedArgument = argument.replace(/\s+/g, "-");


    const fetchGame = (argument) => {
      let finalURL = `https://api.rawg.io/api/games/${argument}?key=XX`;

      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {
          let devNames = [], tagNames = [], plateformNames= [], publisherNames= [], genreNames = [], storeNames = [], description = response.description;
          let articleDOM = document.querySelector(".page-detail .articles");

          response.developers.forEach( developer => {
            devNames.push(developer.name)
          });
          response.tags.forEach( tag => {
            tagNames.push(tag.name)
          })
          response.parent_platforms.forEach( index => {
            plateformNames.push(index.platform.name)
          });
          response.publishers.forEach( publisher => {
            publisherNames.push(publisher.name)
          });
          response.genres.forEach( genre => {
            genreNames.push(genre.name)
          });
          response.stores.forEach( index => {
            storeNames.push([index.store.name, index.store.domain])
          })


          articleDOM.innerHTML = `
          <div class="full-width"> 
          </div>
          <h1 class="mt-5"> ${response.name} </h1>
          ${description}
          <div class="row my-5 d-flex justify-content-between">
            <div class="col-3"> 
              <h2> Released date </h2>
              <p>${timeTranslate(response.released)}</p> 
            </div>
            <div class="col-3"> 
              <h2>Developers</h2>
              ${devNames.join(" , ")}
            </div>
            <div class="col-3">
              <h2>Plateforms</h2>
              ${plateformNames.join(", ")}
            </div>
            <div class="col-3">
              <h2>Publishers</h2>
              ${publisherNames.join(", ")} 
            </div>
          </div>
          <div class="row my-5 d-flex justify-content-between">
            <div class="col-6"> 
              <h2> Genres </h2>
              <p>${genreNames.join(", ")}</p> 
            </div>
            <div class="col-6"> 
              <h2> Tags </h2>
              <p>${tagNames.join(", ")}</p>
            </div>
          </div>
          `
          if(response.stores !== []){
            articleDOM.innerHTML += `
          <div class="my-5"> 
            <h1 class="text-red"> BUY </h1>
            ${fetchStores(storeNames)}
          </div>
          `}

          if(response.screenshots_count != 0){
            articleDOM.innerHTML += `
              <h1 class="text-red"> SCREENSHOTS </h1>
            `
            fetchScreenshots(argument, articleDOM)
          }
          
          PageList(argument,2)
          document.querySelector(".full-width").style.backgroundImage = `url('${response.background_image}') `;
        });
    };

    fetchGame(cleanedArgument);
  };

  const render = () => {
    pageContent.innerHTML = `
      <section class="page-detail container-fluid ">
        <div class="articles">...loading</div>
      </section>
      <section class="page-list">
        <div class="articles">...loading</div>
      </section>
    `;

    preparePage();
  };

  render();
};

export { PageDetail };
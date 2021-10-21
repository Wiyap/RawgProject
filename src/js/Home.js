import { setDescripitonHover } from './PageList.js'

const Home = (argument = "") => {
  const timeTranslate = (time) => {
    let mounth = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"] , date = time.split("-") , finalDate = `${mounth[date[1]-1]} ${date[2]}, ${date[0]} `
    return finalDate
  }

  const preparePage = () => {
    let cleanedArgument = argument.replace(/\s+/g, "-");
    let articles = "";
    let searchResults;

    const fetchList = (url, argument="") => {
      let finalURL = url;
      if (argument) {
        finalURL = url + "&search=" + argument;
        console.log(finalURL)
      }

      console.log(`${finalURL}`)

      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {
          searchResults = response.results;
          console.table(searchResults);

          articles += `
          <h1>Welcome,</h1>
          <p class="py-4">
            Hyper Progame is the world’s premier event for computer and video games and related products. At The Hyper Progame,
            the video game industry’s top talent pack the Los Angeles Convention Center, connecting tens of thousands of the best,
            brightest, and most innovative in the interactive entertainment industry. For three exciting days, leading-edge companies,
            groundbreaking new technologies, and never-before-seen products will be showcased. The Hyper Progame connects you
            with both new and existing partners, industry executives, gamers, and social influencers providing unprecedented exposure  
          </p> 
          `

          for(let i = 0; i < searchResults.length; i+=3){
            let hide = ""

            if(i >= 9){
              hide = "hidden"
            }
            articles += `
            <div class="row row-cols-3 py-3 ${hide}">
              <div class="col">
                <div class="card">
                  <div class="img__wrap">
                    <img class="img__img card-img-top" src="${searchResults[i].background_image}" />
                    <div class="img__description_layer container py-2">
                      <div class="img__description" id="${searchResults[i].id}">
                        <p> ${timeTranslate(searchResults[i].released)} </p>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <a href="#pagedetail/${searchResults[i].slug}"><h6 class="card-title">${searchResults[i].name}</h6></a>
                    <p class="card-text"> </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <div class="img__wrap">
                    <img class="img__img card-img-top" src="${searchResults[i+1].background_image}" />
                    <div class="img__description_layer container py-2">
                      <div class="img__description" id="${searchResults[i+1].id}">
                        <p> ${timeTranslate(searchResults[i+1].released)} </p>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <a href="#pagedetail/${searchResults[i+1].slug}"><h6 class="card-title">${searchResults[i+1].name}</h6></a>
                    <p class="card-text"> </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <div class="img__wrap">
                    <img class="img__img card-img-top" src="${searchResults[i+2].background_image}" />
                    <div class="img__description_layer container py-2">
                      <div class="img__description" id="${searchResults[i+2].id}">
                        <p> ${timeTranslate(searchResults[i+2].released)} </p>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <a href="#pagedetail/${searchResults[i+2].slug}"><h6 class="card-title">${searchResults[i+2].name}</h6></a>
                    <p class="card-text"></p>
                  </div>
                </div>
              </div>
            </div>
            `
          }
          document.querySelector(".page-list .articles").innerHTML = articles;
          setDescripitonHover()
        });
    };

    fetchList("https://api.rawg.io/api/games?key=XX", cleanedArgument);
  };

  const render = () => {

    if(document.querySelector(".page-detail .articles") === null){
      console.log("dadad")
      pageContent.innerHTML = `
        <section class="page-list">
          <div class="articles">...loading</div>
        </section>
      `;
    }
    preparePage();
  };

  render();
};


export { Home };

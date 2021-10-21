const showPlatforms = (article) => {
  
}

const setDescripitonHover = () => {
  let imgWraps = document.querySelectorAll(".img__wrap");
  let descriptions = document.querySelectorAll(".img__description ");

  for(let i = 0; i < imgWraps.length; i++){ 
    let id = descriptions[i].id
    let finalURL = `https://api.rawg.io/api/games/${id}?key=XX`;
    imgWraps[i].addEventListener("mouseenter", () => {
      if(document.querySelector(`#fetched${id}`) === null){
        fetch(`${finalURL}`)
          .then((response) => response.json())
          .then((response) => {
            let devNames = [], tagNames = [];

            response.developers.forEach( developer => {
              devNames.push(developer.name)
            });
            response.tags.forEach( tag => {
              tagNames.push(tag.name)
            })
            descriptions[i].innerHTML += `
            <h5 id="fetched${id}"> ${devNames.join(" , ")} </h5>
            <h5> ${response.rating}/5 - ${response.ratings_count} votes </h5>
            <h5 class="text-small"> ${tagNames.join(", ")} </h5>
            `
          })
      }
    })
  }
}

const PageList = (argument = "", title = 1) => {
  const timeTranslate = (time) => {
    let mounth = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"] , date, finalDate;

    if(time !== null){
      date = time.split("-")
      finalDate = `${mounth[date[1]-1]} ${date[2]}, ${date[0]}`
      return finalDate
    }
    return "To be determined"
  }

  const preparePage = () => {
    let cleanedArgument = argument.replace(/\s+/g, "-");
    let articles = "";

    const fetchList = (url, argument) => {
      let finalURL = url;
      let searchResults;
      if (argument) {
        finalURL = url+ "&search=" + argument;
      }

      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {
          searchResults = response.results;
          if(title !== 1){
            articles += `
              <h1 class="text-red py-4"> Related Games </h1>
            `
          }

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

    fetchList("https://api.rawg.io/api/games?key=XX&page_size=27", cleanedArgument);
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


export { PageList , setDescripitonHover };
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Home.js":
/*!************************!*\
  !*** ./src/js/Home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Home\": () => (/* binding */ Home)\n/* harmony export */ });\nvar Home = function Home() {\n  var argument = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n\n  var timeTranslate = function timeTranslate(time) {\n    var mounth = [\"Jan\", \"Feb\", \"Mar\", \"Apr\", \"May\", \"Jun\", \"Jul\", \"Aug\", \"Sep\", \"Oct\", \"Nov\", \"Dec\"],\n        date = time.split(\"-\"),\n        finalDate = \"\".concat(mounth[date[1] - 1], \" \").concat(date[2], \", \").concat(date[0], \" \");\n    return finalDate;\n  };\n\n  var preparePage = function preparePage() {\n    var cleanedArgument = argument.replace(/\\s+/g, \"-\");\n    var articles = \"\";\n    var searchResults;\n\n    var fetchList = function fetchList(url) {\n      var argument = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"\";\n      var finalURL = url;\n\n      if (argument) {\n        finalURL = url + \"&search=\" + argument;\n        console.log(finalURL);\n      }\n\n      console.log(\"\".concat(finalURL));\n      fetch(\"\".concat(finalURL)).then(function (response) {\n        return response.json();\n      }).then(function (response) {\n        searchResults = response.results;\n        console.table(searchResults);\n        articles += \"\\n          <h1>Welcome,</h1>\\n          <p class=\\\"py-4\\\">\\n            Hyper Progame is the world\\u2019s premier event for computer and video games and related products. At The Hyper Progame,\\n            the video game industry\\u2019s top talent pack the Los Angeles Convention Center, connecting tens of thousands of the best,\\n            brightest, and most innovative in the interactive entertainment industry. For three exciting days, leading-edge companies,\\n            groundbreaking new technologies, and never-before-seen products will be showcased. The Hyper Progame connects you\\n            with both new and existing partners, industry executives, gamers, and social influencers providing unprecedented exposure  \\n          </p> \\n          \";\n\n        for (var i = 0; i < 27; i += 3) {\n          var hide = \"\";\n\n          if (i >= 9) {\n            hide = \"hidden\";\n          }\n\n          articles += \"\\n            <div class=\\\"row row-cols-3 py-3 \".concat(hide, \"\\\">\\n              <div class=\\\"col\\\">\\n                <div class=\\\"card\\\">\\n                  <div class=\\\"img__wrap\\\">\\n                    <img class=\\\"img__img card-img-top\\\" src=\\\"\").concat(searchResults[i].background_image, \"\\\" />\\n                    <div class=\\\"img__description_layer container py-3\\\">\\n                      <div class=\\\"img__description\\\">\\n                        <h2> \").concat(timeTranslate(searchResults[i].released), \" </h2>\\n                      </div>\\n                    </div>\\n                  </div>\\n                  <div class=\\\"card-body\\\">\\n                    <a href=\\\"#pagedetail/\").concat(searchResults[i].id, \"\\\"><h6 class=\\\"card-title\\\">\").concat(searchResults[i].name, \"</h6></a>\\n                    <p class=\\\"card-text\\\"> </p>\\n                  </div>\\n                </div>\\n              </div>\\n              <div class=\\\"col\\\">\\n                <div class=\\\"card\\\">\\n                  <div class=\\\"img__wrap\\\">\\n                    <img class=\\\"img__img card-img-top\\\" src=\\\"\").concat(searchResults[i + 1].background_image, \"\\\" />\\n                    <div class=\\\"img__description_layer container py-3\\\">\\n                      <div class=\\\"img__description\\\">\\n                        <h2> \").concat(timeTranslate(searchResults[i + 1].released), \" </h2>\\n                      </div>\\n                    </div>\\n                  </div>\\n                  <div class=\\\"card-body\\\">\\n                    <a href=\\\"#pagedetail/\").concat(searchResults[i + 1].id, \"\\\"><h6 class=\\\"card-title\\\">\").concat(searchResults[i + 1].name, \"</h6></a>\\n                    <p class=\\\"card-text\\\"> </p>\\n                  </div>\\n                </div>\\n              </div>\\n              <div class=\\\"col\\\">\\n                <div class=\\\"card\\\">\\n                  <div class=\\\"img__wrap\\\">\\n                    <img class=\\\"img__img card-img-top\\\" src=\\\"\").concat(searchResults[i + 2].background_image, \"\\\" />\\n                    <div class=\\\"img__description_layer container py-3\\\">\\n                      <div class=\\\"img__description\\\">\\n                        <h2> \").concat(timeTranslate(searchResults[i + 2].released), \" </h2>\\n                      </div>\\n                    </div>\\n                  </div>\\n                  <div class=\\\"card-body\\\">\\n                    <a href=\\\"#pagedetail/\").concat(searchResults[i + 2].id, \"\\\"><h6 class=\\\"card-title\\\">\").concat(searchResults[i + 2].name, \"</h6></a>\\n                    <p class=\\\"card-text\\\"></p>\\n                  </div>\\n                </div>\\n              </div>\\n            </div>\\n            \");\n        }\n\n        document.querySelector(\".page-list .articles\").innerHTML = articles;\n      });\n    };\n\n    fetchList(\"https://api.rawg.io/api/games?key=d8e018de3222437eb8fe213263c25b7d&page_size=27\", cleanedArgument);\n  };\n\n  var render = function render() {\n    pageContent.innerHTML = \"\\n      <section class=\\\"page-list\\\">\\n        <div class=\\\"articles\\\">...loading</div>\\n      </section>\\n    \";\n    preparePage();\n  };\n\n  render();\n};\n\n\n\n//# sourceURL=webpack://Jour1/./src/js/Home.js?");

/***/ }),

/***/ "./src/js/PageDetail.js":
/*!******************************!*\
  !*** ./src/js/PageDetail.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageDetail\": () => (/* binding */ PageDetail)\n/* harmony export */ });\n/* harmony import */ var _PageList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageList.js */ \"./src/js/PageList.js\");\n\n\nvar timeTranslate = function timeTranslate(time) {\n  var mounth = [\"Jan\", \"Feb\", \"Mar\", \"Apr\", \"May\", \"Jun\", \"Jul\", \"Aug\", \"Sep\", \"Oct\", \"Nov\", \"Dec\"],\n      date,\n      finalDate;\n\n  if (time !== null) {\n    date = time.split(\"-\");\n    finalDate = \"\".concat(mounth[date[1] - 1], \" \").concat(date[2], \", \").concat(date[0]);\n    return finalDate;\n  }\n\n  return \"To be determined\";\n};\n\nvar fetchStores = function fetchStores(store) {\n  var display = \"\";\n  store.forEach(function (store) {\n    display += \"\\n    <a href=\\\"https://www.\".concat(store[1], \"\\\">\").concat(store[0], \"</a>\\n    </br>\\n    \");\n  });\n  return display;\n};\n\nvar fetchTrailers = function fetchTrailers(argument) {\n  fetch(\"https://api.rawg.io/api/games/\".concat(argument, \"/movies?key=d8e018de3222437eb8fe213263c25b7d\")).then(function (response) {\n    return response.json();\n  }).then(function (response) {});\n};\n\nvar fetchScreenshots = function fetchScreenshots(argument, article) {\n  fetch(\"https://api.rawg.io/api/games/\".concat(argument, \"/screenshots?key=d8e018de3222437eb8fe213263c25b7d\")).then(function (response) {\n    return response.json();\n  }).then(function (response) {\n    var screenshotLinks = \"\";\n\n    for (var i = 0; i < 4; i += 2) {\n      screenshotLinks += \"\\n        <div class=\\\"row row-cols-2 py-5\\\">\\n          <div class=\\\"col img__wrap px-5\\\">\\n            <img class=\\\"img-max\\\" src=\\\"\".concat(response.results[i].image, \"\\\" />\\n          </div>\\n          <div class=\\\"col img__wrap px-5\\\">\\n            <img class=\\\"img-max\\\" src=\\\"\").concat(response.results[i + 1].image, \"\\\" />\\n          </div>\\n        </div>\\n        \");\n    }\n\n    article.innerHTML += screenshotLinks;\n  });\n};\n\nvar PageDetail = function PageDetail(argument) {\n  var preparePage = function preparePage() {\n    var cleanedArgument = argument.replace(/\\s+/g, \"-\");\n\n    var fetchGame = function fetchGame(argument) {\n      var finalURL = \"https://api.rawg.io/api/games/\".concat(argument, \"?key=d8e018de3222437eb8fe213263c25b7d\");\n      fetch(\"\".concat(finalURL)).then(function (response) {\n        return response.json();\n      }).then(function (response) {\n        var devNames = [],\n            tagNames = [],\n            plateformNames = [],\n            publisherNames = [],\n            genreNames = [],\n            storeNames = [],\n            description = response.description;\n        var articleDOM = document.querySelector(\".page-detail .articles\");\n        response.developers.forEach(function (developer) {\n          devNames.push(developer.name);\n        });\n        response.tags.forEach(function (tag) {\n          tagNames.push(tag.name);\n        });\n        response.parent_platforms.forEach(function (index) {\n          plateformNames.push(index.platform.name);\n        });\n        response.publishers.forEach(function (publisher) {\n          publisherNames.push(publisher.name);\n        });\n        response.genres.forEach(function (genre) {\n          genreNames.push(genre.name);\n        });\n        response.stores.forEach(function (index) {\n          storeNames.push([index.store.name, index.store.domain]);\n        });\n        articleDOM.innerHTML = \"\\n          <div class=\\\"full-width\\\"> \\n          </div>\\n          <h1 class=\\\"mt-5\\\"> \".concat(response.name, \" </h1>\\n          \").concat(description, \"\\n          <div class=\\\"row my-5 d-flex justify-content-between\\\">\\n            <div class=\\\"col-3\\\"> \\n              <h2> Released date </h2>\\n              <p>\").concat(timeTranslate(response.released), \"</p> \\n            </div>\\n            <div class=\\\"col-3\\\"> \\n              <h2>Developers</h2>\\n              \").concat(devNames.join(\" , \"), \"\\n            </div>\\n            <div class=\\\"col-3\\\">\\n              <h2>Plateforms</h2>\\n              \").concat(plateformNames.join(\", \"), \"\\n            </div>\\n            <div class=\\\"col-3\\\">\\n              <h2>Publishers</h2>\\n              \").concat(publisherNames.join(\", \"), \" \\n            </div>\\n          </div>\\n          <div class=\\\"row my-5 d-flex justify-content-between\\\">\\n            <div class=\\\"col-6\\\"> \\n              <h2> Genres </h2>\\n              <p>\").concat(genreNames.join(\", \"), \"</p> \\n            </div>\\n            <div class=\\\"col-6\\\"> \\n              <h2> Tags </h2>\\n              <p>\").concat(tagNames.join(\", \"), \"</p>\\n            </div>\\n          </div>\\n          \");\n\n        if (response.stores !== []) {\n          articleDOM.innerHTML += \"\\n          <div class=\\\"my-5\\\"> \\n            <h1 class=\\\"text-red\\\"> BUY </h1>\\n            \".concat(fetchStores(storeNames), \"\\n          </div>\\n          \");\n        }\n\n        if (response.screenshots_count != 0) {\n          articleDOM.innerHTML += \"\\n              <h1 class=\\\"text-red\\\"> SCREENSHOTS </h1>\\n            \";\n          fetchScreenshots(argument, articleDOM);\n        }\n\n        (0,_PageList_js__WEBPACK_IMPORTED_MODULE_0__.PageList)(argument, 2);\n        document.querySelector(\".full-width\").style.backgroundImage = \"url('\".concat(response.background_image, \"') \");\n      });\n    };\n\n    fetchGame(cleanedArgument);\n  };\n\n  var render = function render() {\n    console.log(\"549\");\n    pageContent.innerHTML = \"\\n      <section class=\\\"page-detail container-fluid \\\">\\n        <div class=\\\"articles\\\">...loading</div>\\n      </section>\\n      <section class=\\\"page-list\\\">\\n        <div class=\\\"articles\\\">...loading</div>\\n      </section>\\n    \";\n    preparePage();\n  };\n\n  render();\n};\n\n\n\n//# sourceURL=webpack://Jour1/./src/js/PageDetail.js?");

/***/ }),

/***/ "./src/js/PageList.js":
/*!****************************!*\
  !*** ./src/js/PageList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageList\": () => (/* binding */ PageList)\n/* harmony export */ });\nvar showPlatforms = function showPlatforms(article) {};\n\nvar setDescripitonHover = function setDescripitonHover() {\n  var imgWraps = document.querySelectorAll(\".img__wrap\");\n  var descriptions = document.querySelectorAll(\".img__description \");\n\n  var _loop = function _loop(i) {\n    var id = descriptions[i].id;\n    var finalURL = \"https://api.rawg.io/api/games/\".concat(id, \"?key=d8e018de3222437eb8fe213263c25b7d\");\n    imgWraps[i].addEventListener(\"mouseenter\", function () {\n      if (document.querySelector(\"#fetched\".concat(id)) === null) {\n        fetch(\"\".concat(finalURL)).then(function (response) {\n          return response.json();\n        }).then(function (response) {\n          console.log(response);\n          var devNames = [],\n              tagNames = [];\n          response.developers.forEach(function (developer) {\n            devNames.push(developer.name);\n          });\n          response.tags.forEach(function (tag) {\n            tagNames.push(tag.name);\n          });\n          descriptions[i].innerHTML += \"\\n            <p id=\\\"fetched\".concat(id, \"\\\"> \").concat(devNames.join(\" , \"), \" </p>\\n            <p> \").concat(response.rating, \"/5 - \").concat(response.ratings_count, \" votes </p>\\n            <p class=\\\"text-small\\\"> \").concat(tagNames.join(\", \"), \" </p>\\n            \");\n        });\n      }\n    });\n  };\n\n  for (var i = 0; i < imgWraps.length; i++) {\n    _loop(i);\n  }\n};\n\nvar PageList = function PageList() {\n  var argument = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n  var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;\n\n  var timeTranslate = function timeTranslate(time) {\n    var mounth = [\"Jan\", \"Feb\", \"Mar\", \"Apr\", \"May\", \"Jun\", \"Jul\", \"Aug\", \"Sep\", \"Oct\", \"Nov\", \"Dec\"],\n        date,\n        finalDate;\n\n    if (time !== null) {\n      date = time.split(\"-\");\n      finalDate = \"\".concat(mounth[date[1] - 1], \" \").concat(date[2], \", \").concat(date[0]);\n      return finalDate;\n    }\n\n    return \"To be determined\";\n  };\n\n  var preparePage = function preparePage() {\n    var cleanedArgument = argument.replace(/\\s+/g, \"-\");\n    var articles = \"\";\n\n    var fetchList = function fetchList(url, argument) {\n      var finalURL = url;\n      var searchResults;\n\n      if (argument) {\n        finalURL = url + \"&search=\" + argument;\n      }\n\n      fetch(\"\".concat(finalURL)).then(function (response) {\n        return response.json();\n      }).then(function (response) {\n        searchResults = response.results;\n\n        if (title !== 1) {\n          articles += \"\\n              <h1 class=\\\"text-red py-4\\\"> Related Games </h1>\\n            \";\n        }\n\n        for (var i = 0; i < searchResults.length; i += 3) {\n          var hide = \"\";\n\n          if (i >= 9) {\n            hide = \"hidden\";\n          }\n\n          articles += \"\\n            <div class=\\\"row row-cols-3 py-3 \".concat(hide, \"\\\">\\n              <div class=\\\"col\\\">\\n                <div class=\\\"card\\\">\\n                  <div class=\\\"img__wrap\\\">\\n                    <img class=\\\"img__img card-img-top\\\" src=\\\"\").concat(searchResults[i].background_image, \"\\\" />\\n                    <div class=\\\"img__description_layer container py-2\\\">\\n                      <div class=\\\"img__description\\\" id=\\\"\").concat(searchResults[i].id, \"\\\">\\n                        <p> \").concat(timeTranslate(searchResults[i].released), \" </p>\\n                      </div>\\n                    </div>\\n                  </div>\\n                  <div class=\\\"card-body\\\">\\n                    <a href=\\\"#pagedetail/\").concat(searchResults[i].slug, \"\\\"><h6 class=\\\"card-title\\\">\").concat(searchResults[i].name, \"</h6></a>\\n                    <p class=\\\"card-text\\\"> </p>\\n                  </div>\\n                </div>\\n              </div>\\n              <div class=\\\"col\\\">\\n                <div class=\\\"card\\\">\\n                  <div class=\\\"img__wrap\\\">\\n                    <img class=\\\"img__img card-img-top\\\" src=\\\"\").concat(searchResults[i + 1].background_image, \"\\\" />\\n                    <div class=\\\"img__description_layer container py-2\\\">\\n                      <div class=\\\"img__description\\\" id=\\\"\").concat(searchResults[i + 1].id, \"\\\">\\n                        <p> \").concat(timeTranslate(searchResults[i + 1].released), \" </p>\\n                      </div>\\n                    </div>\\n                  </div>\\n                  <div class=\\\"card-body\\\">\\n                    <a href=\\\"#pagedetail/\").concat(searchResults[i + 1].slug, \"\\\"><h6 class=\\\"card-title\\\">\").concat(searchResults[i + 1].name, \"</h6></a>\\n                    <p class=\\\"card-text\\\"> </p>\\n                  </div>\\n                </div>\\n              </div>\\n              <div class=\\\"col\\\">\\n                <div class=\\\"card\\\">\\n                  <div class=\\\"img__wrap\\\">\\n                    <img class=\\\"img__img card-img-top\\\" src=\\\"\").concat(searchResults[i + 2].background_image, \"\\\" />\\n                    <div class=\\\"img__description_layer container py-2\\\">\\n                      <div class=\\\"img__description\\\" id=\\\"\").concat(searchResults[i + 2].id, \"\\\">\\n                        <p> \").concat(timeTranslate(searchResults[i + 2].released), \" </p>\\n                      </div>\\n                    </div>\\n                  </div>\\n                  <div class=\\\"card-body\\\">\\n                    <a href=\\\"#pagedetail/\").concat(searchResults[i + 2].slug, \"\\\"><h6 class=\\\"card-title\\\">\").concat(searchResults[i + 2].name, \"</h6></a>\\n                    <p class=\\\"card-text\\\"></p>\\n                  </div>\\n                </div>\\n              </div>\\n            </div>\\n            \");\n        }\n\n        console.log();\n        document.querySelector(\".page-list .articles\").innerHTML = articles;\n        setDescripitonHover();\n      });\n    };\n\n    fetchList(\"https://api.rawg.io/api/games?key=d8e018de3222437eb8fe213263c25b7d&page_size=27\", cleanedArgument);\n  };\n\n  var render = function render() {\n    if (document.querySelector(\".page-detail .articles\") === null) {\n      console.log(\"dadad\");\n      pageContent.innerHTML = \"\\n        <section class=\\\"page-list\\\">\\n          <div class=\\\"articles\\\">...loading</div>\\n        </section>\\n      \";\n    }\n\n    preparePage();\n  };\n\n  render();\n};\n\n\n\n//# sourceURL=webpack://Jour1/./src/js/PageList.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes.js */ \"./src/js/routes.js\");\n\nvar pageArgument;\nvar searchForm = document.querySelector(\"form\");\nvar showMore = document.querySelector(\"#ShowMore\");\n\nvar setRoute = function setRoute() {\n  var path = window.location.hash.substring(1).split(\"/\");\n  pageArgument = path[1] || \"\";\n  var pageContent = document.getElementById(\"pageContent\");\n  _routes_js__WEBPACK_IMPORTED_MODULE_0__.routes[path[0]](pageArgument);\n\n  if (path[0] === \"pagedetail\") {\n    showMore.classList.add(\"hidden\");\n  } else {\n    showMore.classList.remove(\"hidden\");\n  }\n\n  return true;\n};\n\nwindow.addEventListener(\"hashchange\", function () {\n  setRoute();\n});\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n  setRoute();\n});\nsearchForm.addEventListener(\"submit\", function (e) {\n  e.preventDefault();\n  var searchInput = searchForm[0].value;\n  window.location.hash = \"pagelist/\" + searchInput.replace(/\\s+/g, \"-\");\n});\nshowMore.addEventListener(\"click\", function () {\n  var hiddenDivs = document.querySelectorAll(\".hidden\");\n\n  for (var i = 0; i < 3; i++) {\n    hiddenDivs[i].classList.remove(\"hidden\");\n  }\n\n  if (document.querySelectorAll(\".hidden\").length === 0) {\n    showMore.classList.add(\"hidden\");\n  }\n});\n\n//# sourceURL=webpack://Jour1/./src/js/index.js?");

/***/ }),

/***/ "./src/js/routes.js":
/*!**************************!*\
  !*** ./src/js/routes.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"routes\": () => (/* binding */ routes)\n/* harmony export */ });\n/* harmony import */ var _Home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.js */ \"./src/js/Home.js\");\n/* harmony import */ var _PageDetail_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageDetail.js */ \"./src/js/PageDetail.js\");\n/* harmony import */ var _PageList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageList.js */ \"./src/js/PageList.js\");\n\n // Pas besoin de mettre le '.js' à la fin !\n\n\nvar routes = {\n  \"\": _Home_js__WEBPACK_IMPORTED_MODULE_0__.Home,\n  \"pagelist\": _PageList_js__WEBPACK_IMPORTED_MODULE_2__.PageList,\n  \"pagedetail\": _PageDetail_js__WEBPACK_IMPORTED_MODULE_1__.PageDetail\n};\n\n\n//# sourceURL=webpack://Jour1/./src/js/routes.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;
//Question 1
//----------
const q1Function = (a, b) => {
    return a-b;
};
console.log(q1function(7, 3));

//Question 2
//----------
const sportsURL = "https://api.rawg.io/api/games?genres=sports";

fetch(sportsURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        loadSports(json);
        console.dir(json.results[18].name);
    })
    .catch(function (error) {
        console.dir(error);
    });

function loadSports(json) {
    const sports = json.results;

    for (let i = 0; i < sports.length; i++) {
        //print out the game names from the API.
        console.dir(json.results[i].name);
    }

}

//Question 3
//----------
let word = `These cats are outragous.`;

const wordSelect = document.querySelector("p");
const formattedWords = word.replace("cats", "giraffes")
wordSelect.innerText = formattedWords;

//Question 4
//----------
const userURL = "https://my.site.com?userId=7";
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
let id;

if (params.has("userId")) {
    id = params.get("userId");

    if (id < 10) {
        //redirect to first.html
        console.log("first.html");
    } else {
        //redirect to second.html
        console.log("second.html");
    }

} else {
    //redirect to third.html
    console.log("third.html");
};

//Question 5
//---------
const container = document.querySelector(".container");
const button = document.querySelector(".btn");

container.removeChild(button);

//Question 6
//----------
const animalList = document.querySelector(".animals .cows")
const createAnimal = document.createElement("li");
createAnimal.innerText = "Parrots"
createAnimal.className = "parrots";
animalList.after(createAnimal);

//Question 7
//----------
const ratingsURL = "https://api.rawg.io/api/games/3801";

fetch(ratingsURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        loadRatings(json);
    })
    .catch(function (error) {
        console.dir(error);
    })

function loadRatings(json) {
    const ratings = document.querySelector(".rating");
    ratings.innerHTML = "Rating: " + json.rating;
}
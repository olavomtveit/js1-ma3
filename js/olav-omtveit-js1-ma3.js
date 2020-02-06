//Question 1
//----------
(a, b) => {
    console.log(`return a-b`)
};

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

/* //Question 3
//----------
const wordSelect = document.querySelector("p");
wordSelect.innerText = animalNames;

const wordSwap = animalNames.replace("cats", "giraffe"); */

//Question 4
//----------
const userURL = "https://my.site.com?userId=7";
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
let id;

if(params.has("id")){
    id = params.get("id");
}
else if(){

}
else{
    document.location.href = "/third.html";
}

fetch(userURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        checkUserID(json);
    })
    .catch(function (error) {

    });



/*     function checkUserID(json){
        const user = json.results;
        console.log("The function is running")

        for(let i = 0; i < user.length; i++){
            console.log("The loop works");

            //add if/case statements to check userID parameters.
        }
    } */
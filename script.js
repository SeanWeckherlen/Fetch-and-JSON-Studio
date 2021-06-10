// TODO: add code here
window.addEventListener("load", function () {
    //alert("window loaded");
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        //console.log(response); //just checking whats in response
        // i want the json() out of the response object   
        response.json().then(function (json) {
            console.log(json); //just seeing whats inside the json
            // it is an array of objects. what im looking for 
            //console.log(json.length); //has a legnth of 7
            let jsonArray = json;
            let container = document.getElementById("container");
            let color = ""
            let count = document.getElementById("count");
            count.innerHTML = `Number of astronauts is: ${jsonArray.length}`

            for (let i = 0; i < jsonArray.length; i++) {
                if (jsonArray[i].active === true) {
                    color = "green";
                }
                container.innerHTML += ` <div class="astronaut">
                    <div class="bio">
                    <h3>${jsonArray[i].firstName} ${jsonArray[i].lastName}</h3>
                    <ul>
                    <li>Hours in space: ${jsonArray[i].hoursInSpace}</li>
                    <li>Active: <span style="color:${color}">${jsonArray[i].active}</span></li>
                    <li>Skills: ${jsonArray[i].skills}</li>
                    </ul>
                    </div>
                    <img class="avatar" src="${jsonArray[i].picture}">
                    </div>`
            }
        });
    });
});
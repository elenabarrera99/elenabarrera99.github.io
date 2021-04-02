const requestJSON = "js/companies.js";

fetch(requestJSON)
.then(function (response) {
    return response.json();
})
.then(function(jsonObject) {
    console.table(jsonObject);
})
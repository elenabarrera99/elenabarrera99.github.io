const requestJSON = "https://raw.githubusercontent.com/elenabarrera99/elenabarrera99.github.io/master/Lesson12/events.json";

fetch(requestJSON)
.then(function (response) {
    return response.json();
})
.then(function(jsonObject) {
    console.table(jsonObject);

    const companies = jsonObject["companies"];
for (let i = 0; i < companies.length; i++) {
    let sec = document.createElement("section");
    let h2 = document.createElement("h2");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let image = document.createElement("img");

    h2.textContent = companies[i].name;
    p1.textContent = companies[i].adress;
    p2.textContent = companies[i].purpose;
    p3.textContent = companies[i].site;
    image.setAttribute("src", "images/json-img/" + companies[i].image);

    console.log(p1);

    sec.appendChild(h2);
    sec.appendChild(p1);
    sec.appendChild(p2);
    sec.appendChild(p3);
    sec.appendChild(image);

    document.querySelector('div.companies-cards').appendChild(sec);


}
})


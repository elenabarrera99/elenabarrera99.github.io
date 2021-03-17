const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);

    const towns = jsonObject["towns"];
    for (let i = 0; i < towns.length; ) {
      if (i == 1 || i == 3 || i == 4 || i == 5) {
        i++;
      } else {
        let card = document.createElement("section");
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        let h2 = document.createElement("h2");
        let h4 = document.createElement("h4");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");
        let image = document.createElement("img");
        h2.textContent = towns[i].name;
        h4.textContent = towns[i].motto;
        p1.textContent = `Year Founded: ${towns[i].yearFound}`;
        p2.textContent = `Population ${towns[i].currentPopulation}`;
        p3.textContent = `Annual Rain Fall ${towns[i].averageRainfall}`;
        image.setAttribute('src', "images/" + towns[i].photo);
        div1.className = "text";
        div2.className = "image";
        
        /*switch(towns[i]){
          case towns[1]: image.src = 'images/fish-haven.jpg';
          break;
          case towns[5]: image.src = 'images/preston.jpg';
          break;
          case towns[6]: image.src = 'images/soda-springs.jpg';
          break;
        }*/

        card.appendChild(div1);
        card.appendChild(div2);
        div1.appendChild(h2);
        div1.appendChild(h4);
        div1.appendChild(p1);
        div1.appendChild(p2);
        div1.appendChild(p3);
        div2.appendChild(image);
        
        document.querySelector("div.cards").appendChild(card);
        i++;
      } 
    }
  });

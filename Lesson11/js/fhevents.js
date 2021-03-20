const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);

    const towns = jsonObject["towns"];
    for (let i = 0; i < towns.length;i++ ) {
        let placename = towns[i].name;
      if (placename == "Fish Haven") {
        let eventcard = document.createElement("section");
        let div1 = document.createElement("div");
        let h2 = document.createElement("h2");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");
    
        h2.textContent ='Upcoming Events:';
        p1.textContent = towns[i].events[0];
        p2.textContent = towns[i].events[1];
        p3.textContent = towns[i].events[2];
        div1.className = "text";
       
        
        /*switch(towns[i]){
          case towns[1]: image.src = 'images/fish-haven.jpg';
          break;
          case towns[5]: image.src = 'images/preston.jpg';
          break;
          case towns[6]: image.src = 'images/soda-springs.jpg';
          break;
        }*/

        eventcard.appendChild(div1);
        div1.appendChild(h2);
        div1.appendChild(p1);
        div1.appendChild(p2);
        div1.appendChild(p3);
        
        document.querySelector("div.eventfh").appendChild(eventcard);
      } 
    }
  });

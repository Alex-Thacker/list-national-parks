let container = document.querySelector("#display-container")
let article = document.createElement("article");
let frag = document.createDocumentFragment()

const getPark = () => {
    return fetch("http://localhost:9099/parks")
        .then(response => response.json())
}

const getWeather = (latitude1, longitude1) => {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/8774613f77c8add5e82f4f04ef1e87dc/${latitude1},${longitude1}`)
        .then(response => response.json())
}


getPark()
    .then(parsedInt => {

        for (let i = 0; i < parsedInt.length; i++) {
            let article = document.createElement("article");
            let h3 = document.createElement("h3");
            h3.textContent = parsedInt[i].name;
            let p = document.createElement("p");
            p.textContent = parsedInt[i].state;
            let p1 = document.createElement("p")
            p1.textContent = "Weather: "
            article.appendChild(h3)
            article.appendChild(p)
            article.appendChild(p1)
            frag.appendChild(article)

            if (parsedInt[i].visited === true) {

                article.classList.add("redBorder")

            } else {
                article.classList.add("greenBorder")
            }

            getWeather(parsedInt[i].latitude, parsedInt[i].longitude)
                .then(response => {
                    console.log(response)
                    let ul = document.createElement("ul")
                    let li1 = document.createElement("li")
                    li1.textContent = "Currently: " + response.currently.summary
                    ul.appendChild(li1);
                    let li2 = document.createElement("li")
                    li2.textContent = "Today: " + response.hourly.summary
                    ul.appendChild(li2)
                    let li3 = document.createElement("li")
                    li3.textContent = "Week: " + response.daily.summary
                    ul.appendChild(li3)
                    article.appendChild(ul)
                    frag.appendChild(article)


                    container.appendChild(frag)
                })


        }

    })
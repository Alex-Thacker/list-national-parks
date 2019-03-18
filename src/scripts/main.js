// Today’s exercise: Build an application using grunt to get data from the following API: https://github.com/nss-day-cohort-31/national-parks and display the list of national parks on the DOM. Each national park should be formatted in HTML like below:

// If the park has been visited, the article tag should have a red dashed border. If the park has not been visited, it should have a green solid border.

{
    /* <article>
          <h3>Park Name</h3>
          <p>State the park in located in</p>
        </article> */
}



// let article = document.createElement("article");
let container = document.querySelector("#display-container")
// let frag = document.createDocumentFragment()

// const createElement = (parsed) => {
//     let article = document.createElement("article");
//     let h3 = document.createElement("h3");
//     h3.textContent = parsed.name;
//     let p = document.createElement("p");
//     p.textContent = parsed.state;
//     article.appendChild(h3);
//     article.appendChild(p);
//     frag.appendChild(article)
// }

const getPark = () => {
    return fetch("http://localhost:9099/parks")
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
            article.appendChild(h3)
            article.appendChild(p)
            if (parsedInt[i].visited === true) {

                article.classList.add("redBorder")

            } else {
                article.classList.add("greenBorder")
            }
            container.append(article)
        }
        
    })
    
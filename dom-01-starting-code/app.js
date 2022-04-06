const h1 = document.getElementById("header1")

//selecting all elements of a tag type
const headerItemElements = document.getElementsByTagName('h1');

for (const hItemEl of headerItemElements) {
     console.dir(hItemEl);
}

//changing/looking at html content
//alters ENTIRE inner HTML of a selection
//any tags inside a section could be replaced
section = document.getElementById("s1");
section.innerHTML = "What?";

//add other tags
section.innerHTML += "<p>what2?</p>";
section.insertAdjacentHTML("beforeend", "<p>endAddition</p>");

//specifically for text
//section.textContent = "fucks";
let stringStringy = section.textContent;
console.log(stringStringy);

//createElement()
const body = document.querySelector("body");
const newP = document.createElement("p");
newP.innerHTML = "oh hi";
//body.appendChild(newP);

//prepend() appends soemthing as first element
//body.prepend(newP);

//adding something before a specific element but not before
//everything else
body.lastElementChild.before(newP);
// you can also use .after() or .replaceWith()
// the same way
// you can also access .firstElementChild

//cloning nodes
//passing true clones everything within the node
//passing false only clones the node and no tags within
const newP2 = newP.cloneNode(true);
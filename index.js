let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
let listItems = ""

inputBtn.addEventListener("click", function (event) {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    renderLeads()
})

function renderLeads() {
    for (let i = 0; i < myLeads.length; i++) {
        listItems += '<li><a href="' + myLeads[i] +
            '" target="_blank" rel="noopener noreferrer">' + myLeads[i] +'</a></li>'
        console.log(myLeads[i])
    }

    ulEl.innerHTML = listItems;

}
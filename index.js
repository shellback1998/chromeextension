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
        listItems += "<li>" + myLeads[i] + "</li> "
        console.log(myLeads[i])
    }

    ulEl.innerHTML = listItems;

}
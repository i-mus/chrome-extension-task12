let myLeads = []


const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
let tabBtn = document.getElementById("tab-btn")
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))


tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })   
})

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}


inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    console.log(localStorage.getItem("myLeads"))
})


function render(leads){
    let listItems = ""
    for(let i=0; i<leads.length; i+=1){
        console.log(leads[i])
        listItems += `<li>
        <a href=${leads[i]} target='_blank'> ${leads[i]}
        </a>
        </li>`
        // const li=document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li)
}
ulEl.innerHTML = listItems
}


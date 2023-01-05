const form = document.querySelector(".form")
const input = document.querySelector(".input")
const list = document.querySelector(".list")

let updatedList = JSON.parse(localStorage.getItem("updatedList"))
updatedList.forEach(task=>{
    addItemtolist(task)
})

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    addItemtolist()
})

function addItemtolist(task){
    let newTask = input.value;
    if (task){
        newTask = task.name;
    }
    const liItem = document.createElement("li")
    if (task && task.checked){
        liItem.classList.add("checked")
    }
    liItem.innerText = newTask
    list.appendChild(liItem)
    input.value = ""
    const checkBtn = document.createElement("div")
    checkBtn.innerHTML = `<i class="fa-solid fa-square-check check"></i>`
    liItem.appendChild(checkBtn)
    const deleteBtn = document.createElement("div")
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash delete"></i>`
    liItem.appendChild(deleteBtn)

    checkBtn.addEventListener("click",()=>{
        liItem.classList.toggle("checked")
        updateList()
    })

    deleteBtn.addEventListener("click",()=>{
        liItem.remove()
        updateList()
    })
    updateList()
}


function updateList(){
    const liItems = document.querySelectorAll("li")
    updatedList = []
    liItems.forEach(liItem=>{
        updatedList.push({
            name: liItem.innerText,
            checked: liItem.classList.contains("checked")
        })
    })
    localStorage.setItem("updatedList", JSON.stringify(updatedList))
}
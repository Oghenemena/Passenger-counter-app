let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count

    console.log(count)
}

function save() {
    let entries = count + "-"
    saveEl.textContent += entries
    countEl.textContent = 0
    count = 0
}






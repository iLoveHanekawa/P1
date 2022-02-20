function inc() {
    document.getElementById("count").innerHTML++;
}
function save() {
    let count = document.getElementById("count").textContent
    document.getElementById("count").textContent = 0
    document.getElementById("pentries").textContent += count + " - "
}

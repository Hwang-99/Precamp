// function auth() {
//     const token = String ( Math.floor (Math.random() * 1000000)).padStart(6, "0")
//     document.getElementById("target").innerText = token
// }

const auth = () => {
    token = String ( Math.floor (Math.random() * 1000000)).padStart(6, "0")
    document.getElementById("target").innerText = token
    document.getElementById("target").style.color = "#" + token
}
// let colorCode = "#"
// document.getElementById("target").style.color = colorCode + token


let arr = [];
function addtoarray() {
    let result = document.querySelector("input").value;
    arr.push(result)
    console.log(arr);
    document.querySelector("input").value = "";

}
function printArry() {
    let resultDiv = document.querySelector("div");
    resultDiv.innerText = arr;

}
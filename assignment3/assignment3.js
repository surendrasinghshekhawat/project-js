let arr = [];
function addtoarray() {
    let result = document.querySelector("input").value;
    arr.push(result)
    console.log(arr);
    document.querySelector("input").value = "";

}
function printArry() {
    let resultDiv = document.querySelector("div");

    let i = 0;

    let interval = setInterval(() => {
        if (i < arr.length) {
            resultDiv.innerText += arr[i] + ",";
            i++;
        } else {
            clearInterval(interval);
        }
    }, 1000)
}
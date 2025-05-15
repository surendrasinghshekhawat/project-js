// console.log("surendra singh")

//---------------------------------------------

// let main = document.getElementsByTagName("h1");
// console.log( main[0].innerText);

//--------------ya

// let main = document.querySelector("h1");
// let main1 = main.innerText
// console.log(main1);

//--------------ya

// let main = document.querySelector("h1");
// console.log(main.innerText);

//---------------------------------------------

// let main = document.querySelector("h1");
// let main2 = document.querySelector("p");
// main2.innerText = main.innerText;               //layout per aayega
// console.log(main2.innerText);                   //console me aayega

//---------------------------------------------

// let x = document.getElementsByTagName("h2");
// // console.log(x[0].innerText,x[1].innerText,x[2].innerText,x[3].innerText,x[4].innerText);
// for (let i=0; i<x.length; i++){
//     console.log(x[i].innerText)
// }

//----------------ya

// let x = document.querySelectorAll("h2");
// for(let i=0; i<x.length; i++){
//     console.log(x[i].innerText);
// }

//-----------------ya

//DIFFERENCE BETWEEN querySelector AND querySelectorAll

// let main = document.querySelectorAll("h2");
// let main1 = document.querySelector("div");
// for (let i = 0; i < main.length; i++) {
//   main1.innerText += main[i].innerText;  //main1.innerText=main1.innerText+main[i].innerText;
// }

//--------------------------------------------------------

// innerHTML understands text as well as HTML tags
// innerText only understands text

// let para = document.querySelector("p");
// let section = document.querySelector("section");
// section.innerHTML = para.innerHTML;
// console.log(section.innerHTML);


//----------------------------------------most

// let num1 = document.querySelectorAll("p");
// let num2 = document.querySelector("h2");
// let sum = 0;
// for (let i = 0; i < num1.length; i++) {
//   sum = sum + Number(num1[i].innerText);
// }
// num2.innerText = sum;




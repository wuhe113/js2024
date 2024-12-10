function changeColor(){
    const color1 = document.getElementById("m3");
    const color2 = document.getElementById("m2");
    const color3 = document.getElementById("m1");

    const b1 = document.getElementById("cate");
    const b2 = document.getElementById("home");
    const b3 = document.getElementById("addItem");
    const b4 = document.getElementById("about");
    const b5 = document.getElementById("cart");
    const b6 = document.getElementById("mode");
    const b7 = document.getElementById("scroll-to-top");

    const itemBack1 = document.querySelectorAll(".item");
    const itemBack2 = document.querySelectorAll(".itemShadow");

    const image = document.getElementById("tree");
    const imageBack = document.getElementById("layer");

    const code = document.getElementById("top");

    const box = document.getElementById("box");


    const itemCart = document.querySelectorAll(".add-to-cart");

    const cateContent = document.getElementById("cate-content");
    const contentOptions = document.querySelectorAll(".content-options");

    const cartBox = document.getElementById("cart-box");
    const cartLine = document.getElementById("cart-menu");
    const cartClear = document.getElementById("clear");

    const total = document.getElementById("total");


    color1.onclick = function(e){
        localStorage.setItem("backgroundColor", "rgb(124, 98, 60)");
        localStorage.setItem("border", "1px solid white");
        localStorage.setItem("border2", "0px solid white");
        localStorage.setItem("width", "15px");
        localStorage.setItem("width2", "10px");
        localStorage.setItem("height", "15px");
        localStorage.setItem("height2", "10px");
        localStorage.setItem("color", "white");
    



        document.body.style.backgroundColor = "rgb(124, 98, 60)";
        document.body.style.color = "white";

        const elements = [b1, b2, b3, b4, b5, b6, b7];
        elements.forEach((el) => {
            el.style.backgroundColor = "rgb(124, 98, 60)";
            el.style.border = "1px solid white";
        });

        code.style.backgroundColor = "rgb(124, 98, 60)";
        code.style.borderBottom = "1px solid white";

        // image.style.filter = "grayscale(0%)";
        // imageBack.style.backgroundColor = "rgb(124, 98, 60)";

        for(let itemBack1each of itemBack1){
            itemBack1each.style.backgroundColor = "rgb(81, 64, 39)";
            itemBack1each.style.boxShadow = "3px 3px 5px 0px rgb(159, 135, 100)";
        }


        for(let itemBack2each of itemBack2){
            itemBack2each.style.backgroundColor = "rgb(81, 64, 39)";
        }

        for(let cart of itemCart){
            cart.style.border = "1px solid white";
       }

       cartBox.style.backgroundColor = "rgb(124, 98, 60)";
       cartBox.style.border = "1px solid white";

    //    cartLine.style.borderBottom = "1px solid white";


       cartClear.style.border = "1px solid white";
       cartClear.style.backgroundColor = "rgb(124, 98, 60)";


       cateContent.style.backgroundColor = "rgb(124, 98, 60)";
       cartClear.style.border = "1px solid white";


       for(let option of contentOptions){
        option.style.border = "1px solid white";
        option.style.backgroundColor = "rgb(124, 98, 60)";
   }



        // color2.style.border = "0px solid white";
        // color2.style.width = "10px";
        // color2.style.height = "10px";

        color1.style.border = "1px solid white";
        color1.style.width = "15px";
        color1.style.height = "15px";

        color3.style.border = "0px solid white";
        color3.style.width = "10px";
        color3.style.height = "10px";
    }

//     color2.onclick = function(e){
//         localStorage.setItem("backgroundColor", "black");
//         localStorage.setItem("backgroundColor2", "rgb(15, 15, 15)");
//         localStorage.setItem("boxShadow", "3px 3px 5px 0px rgb(50, 50, 50)");
//         localStorage.setItem("filter", "grayscale(100%)");
//         localStorage.setItem("border", "1px solid white");
//         localStorage.setItem("border2", "0px solid white");
//         localStorage.setItem("width", "15px");
//         localStorage.setItem("width2", "10px");
//         localStorage.setItem("height", "15px");
//         localStorage.setItem("height2", "10px");

//         if (document.body.id === "storePage") {
//             document.body.style.color = "black";
// }




//         document.body.style.backgroundColor = "black";


//         b1.style.backgroundColor = "black";
//         b2.style.backgroundColor = "black";
//         b3.style.backgroundColor = "black";
//         b4.style.backgroundColor = "black";
//         b5.style.backgroundColor = "black";
//         b6.style.backgroundColor = "black";
//         b7.style.backgroundColor = "black";
//         code.style.backgroundColor = "black";

//         image.style.filter = "grayscale(100%)";
//         imageBack.style.backgroundColor = "black";

//         for(let itemBack1each of itemBack1){
//             itemBack1each.style.backgroundColor = "rgb(15, 15, 15)";
//             itemBack1each.style.boxShadow = "3px 3px 5px 0px rgb(50, 50, 50)";
//         }


//         for(let itemBack2each of itemBack2){
//             itemBack2each.style.backgroundColor = "rgb(15, 15, 15)";
//         }

//         color2.style.border = "1px solid white";
//         color2.style.width = "15px";
//         color2.style.height = "15px";

//         color1.style.border = "0px solid rgb(81, 64, 39)";
//         color1.style.width = "10px";
//         color1.style.height = "10px";

//         color3.style.border = "0px solid white";
//         color3.style.width = "10px";
//         color3.style.height = "10px";
//     }


    color3.onclick = function(e){
        // localStorage.setItem("backgroundColor", "white");
        // localStorage.setItem("backgroundColor2", "rgb(237, 237, 237)");
        // localStorage.setItem("backgroundColor3", "black");
        // localStorage.setItem("boxShadow", "3px 3px 5px 0px rgb(150, 150, 150)");
        // localStorage.setItem("filter", "grayscale(100%)");
        // localStorage.setItem("border3", "1px solid black");
        // localStorage.setItem("border2", "0px solid white");
        // localStorage.setItem("width", "15px");
        // localStorage.setItem("width2", "10px");
        // localStorage.setItem("height", "15px");
        // localStorage.setItem("height2", "10px");
        // localStorage.setItem("color", "white");

        localStorage.setItem("backgroundColor", "white");
        localStorage.setItem("backgroundColor2", "rgb(81, 64, 39)");
        localStorage.setItem("boxShadow", "3px 3px 5px 0px rgb(159, 135, 100)");
        localStorage.setItem("filter", "grayscale(0%)");
        localStorage.setItem("border3", "1px solid rgb(124, 98, 60)");
        localStorage.setItem("border2", "0px solid white");
        localStorage.setItem("width", "15px");
        localStorage.setItem("width2", "10px");
        localStorage.setItem("height", "15px");
        localStorage.setItem("height2", "10px");
        localStorage.setItem("color2", "rgb(124, 98, 60)");



        document.body.style.backgroundColor = "white";
        document.body.style.color = "rgb(124, 98, 60)";


        const elements = [b1, b2, b3, b4, b5, b6, b7, cateContent];
        elements.forEach((el) => {
            el.style.backgroundColor = "white";
            el.style.border = "1px solid rgb(124, 98, 60)";
        });

        code.style.backgroundColor = "white";
        code.style.borderBottom = "1px solid rgb(124, 98, 60)";

        for(let cart of itemCart){
             cart.style.border = "1px solid rgb(124, 98, 60)";
        }

        for(let option of contentOptions){
            option.style.border = "1px solid rgb(124, 98, 60)";
       }

       cartBox.style.backgroundColor = "white";
       cartBox.style.border = "1px solid rgb(124, 98, 60)";

       cartLine.style.borderBottom = "1px solid rgb(124, 98, 60)";


       cartClear.style.border = "1px solid rgb(124, 98, 60)";
       cartClear.style.backgroundColor = "white";



        for(let itemBack1each of itemBack1){
            itemBack1each.style.backgroundColor = "rgb(81, 64, 39)";
            itemBack1each.style.boxShadow = "3px 3px 5px 0px rgb(159, 135, 100)";
        }


        for(let itemBack2each of itemBack2){
            itemBack2each.style.backgroundColor = "rgb(81, 64, 39)";
        }

        // color2.style.border = "0px solid white";
        // color2.style.width = "10px";
        // color2.style.height = "10px";

        color1.style.border = "0px solid rgb(81, 64, 39)";
        color1.style.width = "10px";
        color1.style.height = "10px";

        color3.style.border = "1px solid rgb(124, 98, 60)";
        color3.style.width = "15px";
        color3.style.height = "15px";
    }
};

console.log("common.js is loaded");

document.addEventListener("DOMContentLoaded", changeColor);


// if (document.body) {
//     console.log("Body exists, changing background color...");
//     document.body.style.backgroundColor = "blue";
// } else {
//     console.error("No body found on this page.");
// }

// if (document.body.id === "aboutPage") {
//     changeColor();
// }
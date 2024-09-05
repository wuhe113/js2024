// Acknowledgment: ChatGPT provided insights and helped debug this code

function getRandomLetter(){
    const lettersArray = "QWERTYUIOPASDFGHJKLZXCVBNM";

    return lettersArray[Math.floor(Math.random()*lettersArray.length)];

}

function addElement(){
    for (let i = 0; i < 500; i++) {

    let gridDiv = document.getElementById("grid");
    let newDiv = document.createElement("div");
    // let translate = Math.random()*20;

    newDiv.classList.add("letter");

    let newContent = document.createTextNode(getRandomLetter());

    newDiv.appendChild(newContent);

    // newDiv.style.transform = `translate(${translate}px, ${translate}px)`;

    gridDiv.appendChild(newDiv);
    }


    for (let i = 0; i < 20; i++) {

        let starGird = document.getElementById("starBorder");
        let starDiv = document.createElement("div");

        starDiv.classList.add("star");

        let starContent = document.createTextNode("★");

        starDiv.appendChild(starContent);

        starGird.appendChild(starDiv);

    }

}


document.addEventListener('mousemove', function(event) {
    let starRotate = document.getElementById("starTitle");
    if (starRotate) { 
        const screenHeight = window.innerHeight;
        const mouseY = event.clientY;
        const rotationDegree = ((mouseY / screenHeight) * 90) - 45;
        starRotate.style.transform = `rotate(${rotationDegree}deg)`;
    }
});







// document.addEventListener('mousemove', function(event) {
//     const stars = document.querySelectorAll('.star'); // Select all stars
//     stars.forEach(starDiv => {
//         const position = starDiv.getBoundingClientRect();
//         const x = event.clientX - (position.x + position.width / 2);
//         const y = event.clientY - (position.y + position.height / 2);
//         const degrees = Math.atan2(y, x) * (180 / Math.PI) + 90; // Adjust rotation angle
//         starDiv.style.transform = `rotate(${degrees}deg)`;
//     });
// });


// const colors = [
//     "rgb(37, 37, 37)",
//     "rgb(45, 154, 253)",
//     "rgb(255, 251, 0)",
// ];

// let index = 0;

// function changeColor() {
//     let textChange = document.getElementById("title2");

//     textChange.style.transition = "background 2s ease";
//     textChange.style.color = colors[index];
    
//     index = (index + 1) % colors.length;
// }

// setInterval(changeColor, 5000);






window.onload = addElement;



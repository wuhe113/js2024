function addTimeLine(){
    for (let i = 0; i < 150; i++){
        
        let gridDiv = document.getElementById("data1");
        let newDiv = document.createElement("div");

        newDiv.classList.add("timeLine");

        gridDiv.appendChild(newDiv);


    }
}

addTimeLine();


function addBPM(){
  for (let i = 0; i < 66; i++){
    let gridDiv2 = document.getElementById("data2");
  let newDiv3 = document.createElement("div");

  newDiv3.classList.add("bpmBlock");

  gridDiv2.appendChild(newDiv3);
  }
}

addBPM();

let container = document.getElementById("radial");
let container2 = document.getElementById("radial2");

function radialLines(){
for (let i = 0; i < 12; i++) {
  let line = document.createElement("div");
  line.classList.add("line");

  const angle = (360 / 12) * i;
  line.style.transform = `rotate(${angle + 15}deg) translateY(-50%)`;

  container.appendChild(line);
}
}

radialLines();


function check() {
  let textContainer = document.getElementById("keys");
  let keyContainer = document.getElementById("data3");
  let text = textContainer.textContent;

  if (text.includes('C')) {
    keyContainer.classList.add('key1');
  } else {
    keyContainer.classList.remove('key1');
  }

  if (text.includes('G')) {
    keyContainer.classList.add('key2');
  } else {
    keyContainer.classList.remove('key2');
  }

  if (text.includes('D')) {
    keyContainer.classList.add('key3');
  } else {
    keyContainer.classList.remove('key3');
  }

  if (text.includes('A')) {
    keyContainer.classList.add('key4');
  } else {
    keyContainer.classList.remove('key4');
  }
  
  if (text.includes('E')) {
    keyContainer.classList.add('key5');
  } else {
    keyContainer.classList.remove('key5');
  }

  if (text.includes('B')) {
    keyContainer.classList.add('key6');
  } else {
    keyContainer.classList.remove('key6');
  }

  if (text.includes('G♭') && text.includes('F')) {
    keyContainer.classList.add('key7');
  } else {
    keyContainer.classList.remove('key7');
  }

  if (text.includes('D♭')) {
    keyContainer.classList.add('key8');
  } else {
    keyContainer.classList.remove('key8');
  }

  if (text.includes('A♭')) {
    keyContainer.classList.add('key9');
  } else {
    keyContainer.classList.remove('key9');
  }

  if (text.includes('E♭')) {
    keyContainer.classList.add('key10');
  } else {
    keyContainer.classList.remove('key10');
  }

  if (text.includes('B♭')) {
    keyContainer.classList.add('key11');
  } else {
    keyContainer.classList.remove('key11');
  }

  if (text.includes('F')) {
    keyContainer.classList.add('key12');
  } else {
    keyContainer.classList.remove('key12');
  }


}



// function radialKeys(){
//   for (let i = 0; i < 12; i++) {
//     let keyBlock = document.createElement("div");
//     keyBlock.id = 'div-${i}';
//     keyBlock.classList.add("keyBlock");
  
//     const angle = (360 / 12) * i;
//     keyBlock.style.transform = `rotate(${angle + 15}deg)`;
//     keyBlock.style.display = 'none';
  
//     container2.appendChild(keyBlock);
//   }
// }

// radialKeys();

// function showDiv(divId) {
//   let keys = document.querySelectorAll('.keyBlock');
//   keys.forEach(box => box.style.display = 'none');
//   const specificDiv = document.getElementById(divId);
//   if (specificDiv) specificDiv.style.display = 'block';
// }




let songDiv = document.getElementById("songs");
let titleDiv = document.getElementById("title");
let moodDiv = document.getElementById("mood");
let keyDiv = document.getElementById("keys");

let sheetID = "1eAH9DMUyqK7w9UeGloszZTbSucD-TmKSmfhR5CD_TCc";
let tabName = "Sheet1";
let myURL = `https://opensheet.elk.sh/${sheetID}/${tabName}`;

async function getData() {

  try {
  
    let response = await fetch(myURL);
    let data = await response.json();
    
    // Loop through each row
    for(let dataPoint of data){
    console.log(dataPoint)
    
    // Do something with each dataPoint here
    let newDiv2 = document.createElement("div");
    songDiv.appendChild(newDiv2);
    newDiv2.classList.add("songName");

    newDiv2.innerHTML = dataPoint.song;

    newDiv2.onclick = function(e) {
      titleDiv.innerHTML = dataPoint.song;
      moodDiv.innerHTML = dataPoint.mood;
      keyDiv.innerHTML = dataPoint.key;

      let mappedBPM = map(dataPoint.bpm, 90, 180, 3, 0.3);
      let bpmChange = document.getElementById("data2");

      bpmChange.style.gridTemplateColumns = `repeat(11, ${mappedBPM}vw)`;




      check();
    };

    
    }
  
  } catch(error) {
    console.error(error);
  }
  
}

getData();


function map(value, low1, high1, low2, high2) {
  return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}
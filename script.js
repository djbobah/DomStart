function getRandom(max = 101, min = 0) {
  return Math.floor(Math.random() * (max - min) + min);
}

//task1
const task1 = document.querySelector(".task1");
task1.style.display = "flex";
task1.style.flexWrap = "wrap";
task1.style.alignContent = "flex-center";
task1.style.justifyContent = "center";
task1.style.gap = "20px";
// task1.style.justifyContent = "center";

// console.log(task1);

for (let i = 0; i < 100; i++) {
  const temp = document.createElement("div");
  temp.style.width = "calc(100vh / 14)"; // "30px";
  temp.style.height = "calc(100vh / 14)"; //"30px";
  temp.style.border = "1px solid black";
  temp.style.borderRadius = "5px";
  temp.style.display = "flex";
  temp.style.justifyContent = "center";
  temp.style.alignItems = "center";
  // temp.style
  const num = getRandom(101, 1);
  if (num < 31) {
    temp.style.backgroundColor = "green";
  } else if (num > 70) {
    temp.style.backgroundColor = "red";
  }
  temp.innerHTML = num;
  task1.appendChild(temp);
}

//task2

const task2 = document.querySelector(".task2");

task2.style.display = "flex";
// task2.style.flexWrap = "wrap";
task2.style.alignContent = "flex-center";
task2.style.alignItems = "center";
task2.style.justifyContent = "center";
const r = getRandom(256, 0);
const g = getRandom(256, 0);
const b = getRandom(256, 0);
const rgb = `rgb(${r},${g},${b})`;
console.log(rgb);
const temp2 = document.createElement("div");
temp2.style.backgroundColor = rgb;
temp2.style.width = "100%";
temp2.style.height = "200px";
temp2.style.border = "1px solid black";
temp2.style.borderRadius = "5px";
temp2.style.display = "flex";
temp2.style.justifyContent = "center";
temp2.style.alignItems = "center";
temp2.innerHTML += `Формат цвета RGB: ${rgb}`;
temp2.innerHTML += `<br>Формат цвета HEX: ${rgb}`;
temp2.innerHTML += `<br>Формат цвета RGB: ${rgb}`;
task2.appendChild(temp2);

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

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

// const colors = [
//   { rgb: "255,0,0", value: "красный" },
//   { rgb: "255,255,0", value: "желтый" },
//   { rgb: "0,255,0", value: "зеленый" },
//   { rgb: "66,170,255", value: "голубой" },
//   { rgb: "0,0,255", value: "синий" },
//   { rgb: "255,192,203", value: "розовый" },
//   { rgb: "128,128,128", value: "серый" },
//   { rgb: "0,0,0", value: "черный" },
//   { rgb: "255,255,255", value: "белый" },
// ];
const colorsCbfRainbowRGB = {
  violet: [120, 28, 129],
  indigo: [64, 67, 153],
  blue: [72, 139, 194],
  green: [107, 178, 140],
  olive: [159, 190, 87],
  yellow: [210, 179, 63],
  orange: [231, 126, 49],
  red: [217, 33, 32],
};
function rgb2(values) {
  return "rgb(" + values.join(", ") + ")";
}
console.log(rgb2(colorsCbfRainbowRGB.violet));
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
r + g + b > 765 / 2
  ? (temp2.style.color = "black")
  : (temp2.style.color = "white");
temp2.style.backgroundColor = rgb;
temp2.style.width = "100%";
temp2.style.height = "200px";
temp2.style.border = "1px solid black";
temp2.style.borderRadius = "5px";
temp2.style.display = "flex";
temp2.style.justifyContent = "center";
temp2.style.alignItems = "center";
temp2.innerHTML += `Формат цвета RGB: ${rgb}`;
temp2.innerHTML += `<br>Формат цвета HEX: ${rgbToHex(r, g, b)}`;
temp2.innerHTML += `<br>Формат цвета текстовый: ${rgb}`;
task2.appendChild(temp2);

var n_match = ntc.name(rgbToHex(r, g, b));
n_rgb = n_match[0]; // RGB value of closest match
n_name = n_match[1]; // Text string: Color name
n_exactmatch = n_match[2]; // True if exact color match

console.log(n_rgb, n_name);

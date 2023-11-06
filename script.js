let app = document.getElementById('app');
let hr = document.getElementById('hr');
let c1 = document.getElementById('c1');
let c2 = document.getElementById('c2');

var color1_var = 'red';
var color2_var = 'blue';

const updateBg = () => {
    app.style.background = `linear-gradient(to right, ${color1_var}, ${color2_var})`;
    hr.style.background = `linear-gradient(to right, ${color1_var}, ${color2_var})`;
}

const changeColor = (tochange, val) => {
    window[tochange] = val;
    updateBg();
}

let color1 = document.getElementById('color1'), color2 = document.getElementById('color2');
color1.onchange = function (event) {
    let val = event.target.value;
    c1.innerHTML = val;
    changeColor('color1_var', val);
};
color2.onchange = function (event) {
    let val = event.target.value;
    c2.innerHTML = val;
    changeColor('color2_var', val);
}

updateBg();
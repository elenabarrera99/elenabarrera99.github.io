
let t = parseFloat(document.getElementById('temp').innerHTML);
let s = parseFloat(document.getElementById('speed').innerHTML);
let result = calcWindChill(t, s);

function calcWindChill(a, b) {
    let mult1 = 0.6215 * a 
    let pow = Math.pow(b, 0.16);
    let mult2 = a * pow;
    let x = 35.74 + mult1 - (35.75 * pow) + (0.4275 * mult2);
    return x.toFixed(1);
}

let final = (t <= 50 && s > 3) ? `${result}°F` : 'N/A';

document.getElementById('wcoutput').innerHTML = final;
let hrs = document.getElementById('hrs')
let min = document.getElementById('min')
let sec = document.getElementById('sec')


setInterval(() => {
    let a = new Date();
    hrs.innerHTML = (a.getHours()<10?"0":"") + a.getHours();
    min.innerHTML = (a.getMinutes()<10?"0":"") + a.getMinutes();
    sec.innerHTML = (a.getSeconds()<10?"0":"") + a.getSeconds();
}, 1000);

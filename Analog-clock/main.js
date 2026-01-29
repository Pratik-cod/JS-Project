// for hand - 12h -360
let hour_hand = document.querySelector(".hour-hand");
let min_hand = document.querySelector(".min-hand");
let sec_hand = document.querySelector(".sec-hand");
let dh = document.querySelector(".dh");
let dm = document.querySelector(".dm");
let ds = document.querySelector(".ds");

setInterval(() => {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    // rotation calculations
    let hrotation = 30 * h + m / 2;   // 360/12 = 30 deg per hour + minute adjustment
    let mrotation = 6 * m;            // 360/60 = 6 deg per minute
    let srotation = 6 * s;            // 360/60 = 6 deg per second

    hour_hand.style.transform = `rotate(${hrotation}deg)`;
    min_hand.style.transform = `rotate(${mrotation}deg)`;
    sec_hand.style.transform = `rotate(${srotation}deg)`;

    dh.innerHTML = h < 10 ? '0'+h : h;
    dm.innerHTML = m < 10 ? '0'+m : m;
    ds.innerHTML = s < 10 ? '0'+s : s;
}, 1000);
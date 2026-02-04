let box = document.querySelectorAll(".box");
let body = document.querySelector("body");
let btn = document.querySelector("button");


let handle = (e) => {

    console.log(e);
    console.log(e.target);
    
    if( e.target.id === 'blue'){
        body.style.backgroundColor = "blue"
        
   }
   else if( e.target.id === 'green'){
        body.style.backgroundColor = e.target.id

}
else if( e.target.id === 'red'){
        body.style.backgroundColor = e.target.id

}
else if( e.target.id === 'yellow') {
        body.style.backgroundColor ="yellow"

}

}
    
box.forEach(()=>{
    addEventListener("click",handle);
})

btn.addEventListener("click",(()=>{
    body.style.backgroundColor = "";
}))
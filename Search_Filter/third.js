const users = [
    {
        name:"Aarohi Someone",
        pic:"https://www.livemint.com/lm-img/img/2025/05/10/600x338/SRI-LANKA-NEW-YEAR-0_1746881348113_1746881367676.jpg",
        bio:"He is loving the firecrackes"
    },
    {
        name:"Pratik Rane",
        pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk07BRjKkURSKzaObK3AuFXP146X1zqsFsDg&s",
        bio:"iam loving the person"
    }, 
    {
        name:"Priyanshi Someone",
        pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRS1zyWk6Wte0CpSQB7jedCHV0me5T-KO1F33Psp75MI3vHG-nB1hY9ZZK14zkjmxo9DE&usqp=CAU",
        bio:"He is loving the makeup" 
    },
    {
         name:"Dadu Someone",
        pic:"https://cdn.sanity.io/images/68lp9qid/production/5853fafbd9779872deb7f3d67db0df770b36b09a-800x450.png/firecracker.png?rect=62,0,676,450&w=320&h=213&fit=min&auto=format",
        bio:"He is loving the girl "
    },
    {
         name:"Bhalu",
        pic:"https://images.indianexpress.com/2025/10/green-firecrackers.jpg",
        bio:"its lover are falling in love"
    },
    {
 name:"kite Someone",
        pic:"https://media.assettype.com/thequint%2F2017-09%2F15c47299-7172-4ed5-b87f-b24963496667%2Fd5b801b3-10bd-4150-93f3-6ddc311c049b.jpg?rect=0%2C0%2C1024%2C576&auto=format%2Ccompress&fmt=webp&width=720",
        bio:"He is loving the movie "
    },
    {
         name:"bold Someone",
        pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTefVOB74cbHGDDKnthHRuGQFZBzqDOQBk93g&s",
        bio:"He is loving the song"
    }
]

function showUsers(users){

       let container = document.querySelector(".card-container");
  container.innerHTML = "";

 users.forEach((user)=>{
    //creating the child dynamcally first card
    let card  = document.createElement("div");
   card.classList.add("card");

   //add the image 
   let img = document.createElement("img");
   img.src  = user.pic;
   img.classList.add("bg-mg");
   img.alt = "NO Show Picture";

    let bluered = document.createElement("div");
    bluered.classList.add("bluered-layer")
    bluered.style.backgroundImage = `url(${user})`;

   //add the content div
   let content = document.createElement("div");
   content.classList.add("content");

   //add thr h3
   let heading = document.createElement("h3");
   heading.textContent = user.name;
   
   //add the paragraph
   let paragraph = document.createElement("p");
  paragraph.textContent = user.bio;
   //Append the child
    content.appendChild(heading);
    content.appendChild(paragraph);

    //Append the content 
    card.appendChild(img);
    card.appendChild(bluered);
    card.appendChild(content);

    //finally last append

container.appendChild(card)


 })

}
 showUsers(users)

 let imp = document.querySelector(".input-btn");

let handle = () =>{

    let main = users.filter((user)=>{
        return user.name.toLowerCase().startsWith(imp.value.toLowerCase())
    })
    showUsers(main)
}
 imp.addEventListener("input",handle)
   
   
 


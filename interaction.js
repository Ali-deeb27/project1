document.getElementById('form').addEventListener('submit',errorFunction);
function errorFunction(event){
let fname=document.getElementById('name');
let eml=document.getElementById('email');
let cmnt=document.getElementById('comment');
let display=document.getElementById('error');
    if(fname.value ==="" || eml.value ==="" || cmnt.value ===""){
        event.preventDefault();
        display.textContent='Error! Must fill the whole form!';
        display.style.backgroundColor='cadetblue';
        display.style.color='beige';
    }
    else{
        event.preventDefault()
        display.textContent='Form Submitted Successfully!';
        display.style.backgroundColor='cadetblue';
        display.style.color='beige';
   }
   fname.value="";
   eml.value="";
   cmnt.value="";
}


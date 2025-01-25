let rateparagraph = document.getElementById("rating-paragraph");
let rate1 = document.getElementById("rate-1");
let rate2 = document.getElementById("rate-2");
let rate3 = document.getElementById("rate-3");
let rate4 = document.getElementById("rate-4");
let rate5 = document.getElementById("rate-5");

rate1.addEventListener('change', updateHeader);
rate2.addEventListener('change', updateHeader);
rate3.addEventListener('change', updateHeader);
rate4.addEventListener('change', updateHeader);
rate5.addEventListener('change', updateHeader);

function updateHeader() {
    if (rate1.checked) {
        rateparagraph.textContent = "I don't like this movie!";
    } else if (rate2.checked) {
        rateparagraph.textContent = "This movie is okay!";
    } else if (rate3.checked) {
        rateparagraph.textContent = "This movie is good!";
    } else if (rate4.checked) {
        rateparagraph.textContent = "This movie is really good!";
    } else if (rate5.checked) {
        rateparagraph.textContent = "I love this movie!";
    }
}


let btn=document.querySelector('button');
btn.addEventListener('click',rating);
function rating(event){
    event.preventDefault();
    alert("Thanks for writing your feedback!");
    let fdback=document.querySelector('textarea');
    let ratecomment=document.getElementById("rating-paragraph");
    fdback.value="";
    ratecomment.textContent="";
    
}
const coverPage = document.querySelector(".cover-page");
const content  = document.querySelector(".content");
const body = document.querySelector(".body");
const covertext = document.getElementById("cover-text");
const welcome = document.getElementById("welcome");
const rbody = document.querySelector("body");

window.addEventListener("click", function(e) {
 if(e.target.classList.contains('cover-page')){
      coverPage.style.height = "0%";
      body.style.marginTop = "0vh";
      covertext.style.visibility ='hidden';   
      welcome.style.visibility ='hidden';
      body.style.visibility = 'visible'; 
      body.style.overflow = 'auto';
      rbody.style.overflow = 'auto';
    }}
)

window.addEventListener("keypress", function(e){
    if(coverPage.style.height != '0%'){
      coverPage.style.height = "0%";
      body.style.marginTop = "0vh";
      covertext.style.visibility ='hidden';   
      welcome.style.visibility ='hidden';
      body.style.visibility = 'visible';
      rbody.style.overflow = 'auto';
  }
})

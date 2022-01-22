var t = document.querySelector(".toggle-button");
var count =0;
t.addEventListener("click", function (){
    ++count;
  if(count == 1) {
    document.querySelector(".nav-bar").classList.add("nav-bar1");
  }
  else if(count==2) {
    
    
        document.querySelector(".nav-bar").classList.remove("nav-bar1");
        count=0;
     
      
  }
  console.log(count);
});


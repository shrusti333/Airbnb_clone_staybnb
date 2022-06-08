function popupg(){
    document.getElementById("popup-1").style.display="block";
}
function popgo(){
    document.getElementById("popup-1").style.display="none";
}
let tot_g=0;
function incfung(){
    let ip=document.getElementById("ip1");
    let y=ip.innerHTML;
    ip.innerHTML=parseInt(y)+1;
    tot_g++;
    document.getElementById("no_g").value=tot_g+" guests";
}
function decfung(){
    let ip=document.getElementById("ip1");
    let y=ip.innerHTML;
    ip.innerHTML=parseInt(y)-1;
    tot_g--;
    document.getElementById("no_g").value=tot_g+" guests";
}
function incfunc(){
    let ip=document.getElementById("ip2");
    let y=ip.innerHTML;
    ip.innerHTML=parseInt(y)+1;
    tot_g++;
    document.getElementById("no_g").value=tot_g+" guests";
}
function decfunc(){
    let ip=document.getElementById("ip2");
    let y=ip.innerHTML;
    ip.innerHTML=parseInt(y)-1;
    tot_g--;
    document.getElementById("no_g").value=tot_g+" guests";
}
function incfuni(){
    let ip=document.getElementById("ip3");
    let y=ip.innerHTML;
    ip.innerHTML=parseInt(y)+1;
    tot_g++;
    document.getElementById("no_g").value=tot_g+" guests";
}
function decfuni(){
    let ip=document.getElementById("ip3");
    let y=ip.innerHTML;
    ip.innerHTML=parseInt(y)-1;
    tot_g--;
    document.getElementById("no_g").value=tot_g+" guests";
}
function incfunp(){
    let ip=document.getElementById("ip4");
    let y=ip.innerHTML;
    ip.innerHTML=parseInt(y)+1;
    tot_g++;
    document.getElementById("no_g").value=tot_g+" guests";
}
function decfunp(){
    let ip=document.getElementById("ip4");
    let y=ip.innerHTML;
    ip.innerHTML=parseInt(y)-1;
    tot_g--;
    document.getElementById("no_g").value=tot_g+" guests";
}

function togglePopup(){
    document.getElementById("popup-2").classList.toggle("active");

}

var searchInput='search_input';
$(document).ready(function(){
    var autocomplete;
    autocomplete = new google.maps.places.Autocomplete((document.getElementById("location")),{
        types:['geocode'],
    });
    google.maps.event.addListener(autocomplete,'place_changed',function(){
        var near_place=autocomplete.getPlace();
    })
});

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("main_heading");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

var searchHeight = $(".search-box").outerHeight();
var offset = $(".search-box").offset().top;
var totalHeight = searchHeight + offset;
console.log(totalHeight);
$(window).scroll(function(){
    if($(document).scrollTop() >= totalHeight) {
        $('.search-box2').show();
    } else {
         $('.search-box2').hide();
    }
});





//booking page
function checkbooking(){
    var payment =document.getElementById("payment").value; 
    var guest =document.getElementById("guest").value; 
    var date =document.getElementById("date").value; 
 
     confirm("date from to till :"+ date +"\n guest: "+guest);  }
     function increase(){
        document.getElementById("image").style.width="120px"; 
        document.getElementById("image").style.height="120px"; 
     }
     function decrease(){
        document.getElementById("image").style.width="80px"; 
        document.getElementById("image").style.height="90px"; 
     }
     function increaseppl(){
        document.getElementById("imageppl").style.width="100px"; 
       
     }
     function decreaseppl(){
        document.getElementById("imageppl").style.width="50px"; 
       
     }
     function increasevisa(){
        document.getElementById("visa").style.width="60px"; 
        document.getElementById("visa").style.height="50px"; 
     }
     function decreasevisa(){
        document.getElementById("visa").style.width="30px"; 
        document.getElementById("visa").style.height="30px";
     }
     function increasevisa(){
        document.getElementById("visa").style.width="60px"; 
        document.getElementById("visa").style.height="50px"; 
     }
     function decreasevisa(){
        document.getElementById("visa").style.width="30px"; 
        document.getElementById("visa").style.height="30px";
     }
     function increasemc(){
        document.getElementById("imagemc").style.width="60px"; 
        document.getElementById("imagemc").style.height="50px"; 
     }
     function decreasemc(){
        document.getElementById("imagemc").style.width="30px"; 
        document.getElementById("imagemc").style.height="30px";
     }
     function increasea(){
        document.getElementById("imagea").style.width="60px"; 
        document.getElementById("imagea").style.height="50px"; 
     }
     function decreasea(){
        document.getElementById("imagea").style.width="30px"; 
        document.getElementById("imagea").style.height="30px";
     }

     //signin
 
     function signin(){    var x1=document.getElementById("register") ;
     var y1 =document.getElementById("login1") ; 
     var z1 =document.getElementById("btn2") ;
       x1.style.left="80px";
         y1.style.left="680px";
         z1.style.left="0px";
     }
     function login1(){ 
        var x1=document.getElementById("register") ;
        var y1 =document.getElementById("login1") ; 
        var z1 =document.getElementById("btn2") ; 
        x1.style.left="-680px";
         y1.style.left="80px";
         z1.style.left="126.5px";
         
     }
     function check(){
        var a =document.getElementById("no").value; 
        var code =document.getElementById("code").value; 
       if(a ==""){
         alert("please enter the mobile no");
         return false;
       }
       else if(isNaN(a)){
         alert("please enter a proper mobile no");
         return false;
       }
      else if(a.length<10){
         alert("please enter the valide mobile no");
         return false;
       }
       else if(a.length>10){
         alert("please enter the valide mobile no");
         return false;
       }
       else{
        
         confirm("mobile no "+ code+" "+a);
       }
     }
      
     function check1(){
      var a =document.getElementById("no1").value; 
      var code =document.getElementById("code1").value; 
     if(a ==""){
       alert("please enter the mobile no");
       return false;
     }
     else if(isNaN(a)){
       alert("please enter a proper mobile no");
       return false;
     }
    else if(a.length<10){
       alert("please enter the valide mobile no");
       return false;
     }
     else if(a.length>10){
       alert("please enter the valide mobile no");
       return false;
     }
     else{
    
       confirm("mobile no "+ code +" "+ a);
     }
   }
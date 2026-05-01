let navBtn=document.querySelector(".menu_bar");
let status=false;
let navBar=document.querySelector(".nav_bar");
navBtn.addEventListener("click",()=>{
    if(status==false){
        status=true;
        navBar.style.display="flex";
    }
    else{
        status=false;
        navBar.style.display="none";
    }
})
let slide1=document.querySelector(".slide1");
let slide2=slide1.cloneNode(true);
let slide3=slide1.cloneNode(true);
document.querySelector(".running_screen").append(slide2);
document.querySelector(".running_screen").append(slide3);



let togler=document.querySelector(".cBox");
let discount=document.querySelector(".discount");

let price=document.querySelectorAll(".price_tag");


let arr=[];
for(el of price){
    arr.push(`${el.innerText}`);
}
console.log(arr);
togler.addEventListener("change",(event)=>{
     if(event.target.checked){
        discount.innerText="save 20%";
        year();
     } else{
        discount.innerText="";
        month(arr);
     }
})
function strChg(str){
    let num= str.slice(1,str.length-3);
    let res= (num*0.2).toFixed(2);
    return "$"+res+"/year"

}
function year(){
    for(el of price){
        let res=strChg(el.innerText);
        el.innerText=res;
    }

}
function month(arr){
    for (let i=0;i<price.length;i++){
        price[i].innerText=arr[i];
    }
}
let link=document.querySelector(".nav_bar")
link.addEventListener("click",(e)=>{
    if(e.target){
        link.style.display="none";
    }
})
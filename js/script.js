// script coeur 

var heart = document.getElementsByClassName('heart')
for (var i=0; i<heart.length; i++){

    var h=heart[i];
    
    h.addEventListener("click", function(event) {
    var c=event.target

    if (c.style.color!="red"){
            c.style.color = "red" ;
            }else {
            c.style.color = "blue";
            }
    })
  
}

//script plus et mois et addition

var add = document.getElementsByClassName('add')
var minus = document.getElementsByClassName('minus')
var count= document.getElementsByClassName('count')

for (var k=0; k<add.length; k++) {

    var ad=add[k];
    let cou=count[k];

   ad.addEventListener("click",function(){
    

cou.innerHTML++;
total()
})

}

for (var k=0; k<minus.length; k++) {

    var min=minus[k];
    let cou=count[k];

   min.addEventListener("click",function(){
    
if (cou.innerHTML>0)
cou.innerHTML--;
total()
})

}

// DELETE btn

var dell = document.getElementsByClassName ('Delete')
var shop = document.getElementsByClassName('shopcart')

for (var j=0; j<shop.length; j++){
    var de=dell[j];
    let sho=shop[j];
    de.addEventListener ('click', function(){
        sho.remove()
        total()
    })

}

// calcul

var bagamount = document.querySelector('.bagamount')
var prix= document.getElementsByClassName('prix')
function total(){
var sum=0;
var b= bagamount;
for (var i=0; i<shop.length; i++){
sum=sum+(count[i].innerHTML*parseInt(prix[i].innerHTML));

}
b.innerHTML=sum
}
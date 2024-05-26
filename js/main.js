




function calcFinalPrice(price,profit,vat){
    console.log(vat);
    var price1= price+profit;
    var finalPrice= price1+price1*vat;
    console.log(finalPrice);
}
calcFinalPrice(10000,500);













// function chkEven(){
//     var num = prompt("Please Enter Number");
//     if(num%2===0){
//         console.log("This Number is Even");
//     }else{
//         console.log("This Number is Odd");
//     }
// }
// chkEven();

























// var box1 = "";
// for (var i = 1978;i<=2026;i++){
//     box1 += "<option >"+i+"</option>";
// }
// document.getElementById("dimo").innerHTML=box1;


// var box="";
// for(var i=1;i<=21;i++){
//     box+=`<div class="col-md-4">
//     <div class="inner border border-1 shadow p-2">
//         <img src="image/c2.jpg" class="w-100" alt="">
//         <h2 class="h1 p-1">Product ${i}</h2>
//         <p class="lead  text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, accusantium illum repellat placeat laborum hic rerum nam saepe eligendi molestias harum et veniam cupiditate. Dolor?</p>
//     </div>
// </div>`
// }
// document.getElementById("demo").innerHTML=box;



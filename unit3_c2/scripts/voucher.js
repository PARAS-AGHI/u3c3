
let money = JSON.parse(localStorage.getItem("user")) 
console.log("wall",money.wallet)

var jeb = document.getElementById("wallet_balance")
jeb.innerText = Number(money.wallet)


let purchase_arr = JSON.parse(localStorage.getItem("purchase")) || []


async function Voucher(){
    try{

        let res = await fetch("https://masai-vouchers-api.herokuapp.com/api/vouchers")
        let data = await res.json()

        console.log("data",data)
        let z = append_voucher(data[0].vouchers)
        return z
    }
    catch(err){
        console.log(err)
    }
}
Voucher()
//name,image,price

function append_voucher(data){

    let container = document.getElementById("voucher_list")
    container.innerHTML = null

    data.forEach(function(elem,index){
        let box = document.createElement("div")
        box.setAttribute("class","voucher")

        let name= document.createElement("h3");
        name.innerText= elem.name;

        let image = document.createElement("img");
        image.src= elem.image;

        let price = document.createElement("p")
        price.innerText= Number(elem.price)

      

        let btn = document.createElement("button")
        btn.innerText="BUY"
        btn.setAttribute("class","buy_voucher")
        btn.addEventListener("click",function(){
            Add_it(elem)

        })

       // if()

        box.append(image,name,price,btn)
        container.append(box)

    })
}


function Add_it(elem){
    purchase_arr.push(elem)
    localStorage.setItem("purchase",JSON.stringify(purchase_arr))

    let money= JSON.parse(localStorage.getItem("user")) || null;


    let x =  +(money.wallet) -  +(elem.price)
    var jeb = document.getElementById("wallet_balance")
    jeb.innerText = Number(x) 
    
    if(+money.wallet > +elem.price){
        alert("Hurray! purchase successful")
    }

    else {
        alert("Sorry! insufficient balance")
        money.wallet = x;
    }
    // else if(x < +(elem.price)){
    //     alert("Sorry! insufficient balance")

    // }
    // else{
    //     alert("Hurray! purchase successful")
    // }

 

    
   
 
}


  // if(jeb > 0){
        //     alert("Sorry! insufficient balance")
        // }
        // else{
        //     alert("Hurray! purchase successful")
        // }
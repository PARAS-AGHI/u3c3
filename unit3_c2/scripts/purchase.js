let extract = JSON.parse(localStorage.getItem("purchase")) || []
console.log("extract",extract)

append(extract)


function append(data){
    let container = document.getElementById("purchased_vouchers")
    container.innerHTML= null
    data.forEach(function(elem){
        let box = document.createElement("div")

        let name= document.createElement("h3");
        name.innerText= elem.name;

        let image = document.createElement("img");
        image.src= elem.image;

        let price = document.createElement("p")
        price.innerText= Number(elem.price)

        box.append(image,name,price)
        container.append(box)
    })
}


let wallet_arr = JSON.parse(localStorage.getItem("user")) || 0 ;
document.getElementById("wallet_balance").innerText = wallet_arr.wallet
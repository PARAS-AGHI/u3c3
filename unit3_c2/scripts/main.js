

let wallet_arr = JSON.parse(localStorage.getItem("user")) || 0;

function getAmount(){
    event.preventDefault()

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let amount = document.getElementById("amount").value;

    var wallet_obj={"name":name,
             "email":email,
             "address":address,
             "wallet":amount  
}

//wallet_arr.push(wallet_obj)
console.log("wallet_arr",wallet_arr)
localStorage.setItem("user",JSON.stringify(wallet_obj))

window.location.reload()

    
}
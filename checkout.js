
const getChecked = () => {
    let cartTotal = localStorage.getItem('final_price') ;
    cartTotal = +cartTotal ;
    document.querySelector('.sub-total').innerText=cartTotal + " INR"
    const checkBox = document.querySelector('#check1').checked ;
    const val1 = document.getElementById('check1').value ;
    const checkBox2 = document.getElementById('check2').checked ;
    const val2 = document.getElementById('check2').value ;
    let tax = Math.floor(Math.random()*(14892-9999)+9999) ;
    let grossTotal ;
    document.querySelector('.duty').innerText = tax + " INR"
    if(checkBox===true){
        document.querySelector('.shipping').innerText = Number(val1) + " INR" ;
        grossTotal = cartTotal + Number(val1) + tax ;
        document.querySelector('.orderTotal').innerText = grossTotal + " INR" ;
    }
    else if(checkBox2===true){
        document.querySelector('.shipping').innerText = Number(val2) + " INR" ;
        grossTotal = cartTotal + Number(val2) + tax ;
        document.querySelector('.orderTotal').innerText = grossTotal + " INR" ;
    }
}



const placeOrder = () => {
    let card = document.getElementById('card_number').value ;
    card = String(card) ;
    let cvv = document.getElementById('cvv').value ;
    cvv = String(cvv) ;
    if(card.length===16){
        if(card==='1234567891234567' && cvv==='321'){
           window.location.href = 'otp.html' ;
        }
        else if(card==='14785236914785236' && cvv==='789'){
            window.location.href = 'otp.html' ;
        }
        else{
            alert('Invalid Card Details') ;
        }
        
    }
    else{
        alert('Please enter a valid Card Number') ;
    }
    
}
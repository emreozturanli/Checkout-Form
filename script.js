let plus = document.querySelectorAll('.fa-plus');
let minus = document.querySelectorAll('.fa-minus');
let payment = document.querySelector('.payment');
let remove = document.querySelectorAll('.remove button')


plus.forEach((item)=>{
    item.addEventListener('click',add)
})

minus.forEach((item) =>{
    item.addEventListener('click', subtract)
})

remove.forEach((button)=>{
    button.addEventListener('click', removeProduct)
})


/* ADD */

function add(item){
    let amount = this.nextElementSibling;
    amount.innerText = parseInt(amount.innerText) +1; 
    let price = this.parentElement.previousElementSibling.lastElementChild.firstElementChild.innerText;
    
    payment.innerHTML = '$' + (parseFloat(payment.innerHTML.slice(1)) + parseFloat(price.slice(1))).toFixed(2)
}

/* SUBTRACT */

function subtract(item){
    let amount = this.previousElementSibling;
    
    if (parseInt(amount.innerText) > 0){
        amount.innerText = parseInt(amount.innerText) -1;
        let price = this.parentElement.previousElementSibling.lastElementChild.firstElementChild.innerText;
        
        payment.innerHTML = '$' + (parseFloat(payment.innerHTML.slice(1)) - parseFloat(price.slice(1))).toFixed(2)
    }
}

/* REMOVE */

function removeProduct(button){

    let removePrice = parseFloat(this.parentElement.previousElementSibling.previousElementSibling.lastElementChild.firstElementChild.innerHTML.slice(1))
    let removeAmount = parseInt(this.parentElement.previousElementSibling.firstElementChild.nextElementSibling.innerHTML);
 
    payment.innerHTML = '$' + (parseFloat(payment.innerHTML.slice(1))  -  (removePrice * removeAmount)).toFixed(2)

   this.parentElement.parentElement.parentElement.style.display = 'none';

}

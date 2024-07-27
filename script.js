function validateCard() {
    const cardNumber = document.getElementById('cardNumber').value;
    const resultElement = document.getElementById('result');
    
    if (isValidCardNumber(cardNumber)) {
        resultElement.textContent = 'This is a valid card.';
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = 'This is not a valid card.';
        resultElement.style.color = 'red';
    }
}

function isValidCardNumber(cardNumber) {
    let nSum = 0;
    let isSecond = false;
    
    for (let i = cardNumber.length - 1; i >= 0; i--) {
        let d = parseInt(cardNumber.charAt(i), 10);
        
        if (isSecond) {
            d *= 2;
            if (d > 9) {
                d -= 9;
            }
        }
        
        nSum += d;
        isSecond = !isSecond;
    }
    
    return (nSum % 10 === 0);
}


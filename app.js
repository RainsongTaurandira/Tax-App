const button = document.querySelector("button");
const output = document.querySelector(".output");
const subtotal = document.querySelector("input");


button.addEventListener("click", function(){
    let subtotal2 = subtotal.value;
    let tax = (subtotal2*0.15).toFixed(2);
    let total = (parseInt(tax).toFixed(2) + parseInt(subtotal2).toFixed(2));
    //need to force it out of concatination using parseInt or parseFloat
    
    let taxBit = (tax*0.67).toFixed(2);
    let final = (total - taxBit).toFixed(2);

    let temp = `<p>On an invoice of <b>$${subtotal2}</b> <br> 
    The HST is <b>$${tax}</b> <br> 
    for a total of <b>$${total}</b> <br>  
    Put this under the total (ie, subtracting 2/3 of the tax): <b> -$${taxBit} </b><br>
    Draw two lines under the that, and<br>
    write this under the two lines: <b>$${final}</b></p>`;
    
    output.innerHTML = temp;
})

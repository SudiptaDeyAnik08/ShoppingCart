function updateProductNumber(isDecision,id){
    const phone_input_tag = document.getElementById(id);
    const phone_input_String = phone_input_tag.value;
    const phone_input_value = parseFloat(phone_input_String);

    let total_phone_number = 1;

    if(isDecision === true){
     total_phone_number = phone_input_value + 1;
    }
    else{
        total_phone_number =  phone_input_value - 1;
    }

    phone_input_tag.value = total_phone_number;

    return total_phone_number;
}

function setProductPrice(price,id){
    const phone_price_flied_tag = document.getElementById(id);
     phone_price_flied_tag.innerText = price;


};



function getValueFromElement(id){
    const goods_total_price_tag = document.getElementById(id);
    const goods_total_price_string = goods_total_price_tag.innerText;
    const goods_total_price_value = parseFloat(goods_total_price_string);

    return goods_total_price_value;
}


function set_value_in_Element(id,value){
    let tag = document.getElementById(id);
     tag.innerText = value;
  }

  
function Subtotal_and_tax(case_price, phone_price){
    let SubtotalPrice_final = case_price + phone_price;

    let tax_string =  (SubtotalPrice_final * 0.1).toFixed(2);
    let tax_value = parseFloat(tax_string);

    let tax_tag = document.getElementById('tax');
     tax_tag.innerText = tax_value;

     totalPrice(tax_value,SubtotalPrice_final);
     
     return SubtotalPrice_final;
}

function totalPrice(tax,SubtotalPrice_final){
    const total_tag = document.getElementById('total');
    let total_String = total_tag.innerText;
    const total_value = parseFloat(total_String);

    let total_amount =  tax +  SubtotalPrice_final;

    total_tag.innerText = total_amount;
    
    
  }

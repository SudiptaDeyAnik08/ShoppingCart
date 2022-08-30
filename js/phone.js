
document.getElementById('phone-btn-plus').addEventListener('click',function(){
  let phone_number =  updateProductNumber(true,'phone_input');

  let totalPhonePrice = phone_number * 1219;

  setProductPrice(totalPhonePrice,'phone_price_flied');
    // console.log(phone_input_value);

   let phonePriceTotal = getValueFromElement('phone_price_flied');
   
   let SubtotalPrice = getValueFromElement('SubtotalPrice');

   let case_price = getValueFromElement('case_price');
  
   let SubtotalPrice_final = Subtotal_and_tax( case_price , phonePriceTotal);
  //  let  SubtotalPrice_final = case_price + phonePriceTotal;

  set_value_in_Element('SubtotalPrice',SubtotalPrice_final);



   
    
});

document.getElementById('phone-btn-min').addEventListener('click',function(){
    let phone_number = updateProductNumber(false,'phone_input');

    let totalPhonePrice = phone_number * 1219;

  setProductPrice(totalPhonePrice,'phone_price_flied');

    
   let phonePriceTotal = getValueFromElement('phone_price_flied');
   
   let SubtotalPrice = getValueFromElement('SubtotalPrice');
   
   let case_price = getValueFromElement('case_price');

   
   let SubtotalPrice_final = Subtotal_and_tax( case_price , phonePriceTotal);
  //  let  SubtotalPrice_final = case_price + phonePriceTotal;

   set_value_in_Element('SubtotalPrice',SubtotalPrice_final);
})
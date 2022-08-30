

document.getElementById('case-btn-plus').addEventListener('click',function(){
    const case_number = updateProductNumber(true,'case-input');

    let total_case_price = case_number * 59;

    setProductPrice(total_case_price,'case_price');

    const case_price = getValueFromElement('case_price');
    const phone_price= getValueFromElement('phone_price_flied');

    let SubtotalPrice_final = Subtotal_and_tax( case_price , phone_price);

    set_value_in_Element('SubtotalPrice',SubtotalPrice_final);

})

document.getElementById('case-btn-min').addEventListener('click',function(){
    const case_number = updateProductNumber(false, 'case-input');
    let total_case_price =case_number * 59;

    setProductPrice(total_case_price,'case_price');

    const case_price = getValueFromElement('case_price');
    const phone_price= getValueFromElement('phone_price_flied');

    let SubtotalPrice_final = Subtotal_and_tax( case_price , phone_price);

    set_value_in_Element('SubtotalPrice',SubtotalPrice_final);
})
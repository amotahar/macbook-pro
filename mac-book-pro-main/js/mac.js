 //initialization of base price
 var basePrice;
 initializing (basePrice, 'base-price', 1299);
 //initialization of extra memory
 var memoryCost;
 initializing (memoryCost, 'memory-cost', 0);
 //initialization of storage
 var storageCost;
 initializing (storageCost, 'storage-cost', 0);
 //initialization of delivery
 var deliveryCharge;
 initializing (deliveryCharge, 'delivery-charge', 0);
 //initialization of total cost
 var totalCost;
 initializing (totalCost, 'total', 1299);
 
 // initializing function
 let variableName
 function initializing (variableName, targetId, amount){
     variableName = document.getElementById(targetId);
     variableName.innerText = amount;
     variableNameValue = parseInt(variableName.innerText);
 }
 
 // assigning different button to variables
 var memory8 = document.getElementById('memory-8')
 var memory16 = document.getElementById('memory-16')
 var ssd256 = document.getElementById('ssd-256')
 var ssd512 = document.getElementById('ssd-512')
 var ssd1tb = document.getElementById('ssd-1tb')
 var deliveryFree = document.getElementById('delivery-free')
 var deliveryPaid = document.getElementById('delivery-paid')
 
 // focus selected button
 function backgroundFocus(selectorVariable) {
     selectorVariable.style.backgroundColor = 'black';
     selectorVariable.style.color = 'white';
 }
 // unfocused deselected button
 function backgroundUnfocus(selectorVariable) {
     selectorVariable.style.backgroundColor = '';
     selectorVariable.style.color = '';
 }
 
 // click events to the buttons
 memory8.addEventListener('click',function(){
     initializing (memoryCost, 'memory-cost', 0);
     backgroundFocus(memory8);
     backgroundUnfocus(memory16);
     SelectedTotalCost();
     afterPromoTotal()
 })
 memory16.addEventListener('click',function(){
     initializing (memoryCost, 'memory-cost', 180);
     backgroundFocus(memory16);
     backgroundUnfocus(memory8);
     SelectedTotalCost();
     afterPromoTotal()
 })
 
 ssd256.addEventListener('click',function(){
     initializing (storageCost, 'storage-cost', 0);
     backgroundFocus(ssd256);
     backgroundUnfocus(ssd512);
     backgroundUnfocus(ssd1tb);
     SelectedTotalCost();
     afterPromoTotal()
 })
 ssd512.addEventListener('click',function(){
     initializing (storageCost, 'storage-cost', 100);
     backgroundFocus(ssd512);
     backgroundUnfocus(ssd256);
     backgroundUnfocus(ssd1tb);
     SelectedTotalCost();
     afterPromoTotal()
 })
 ssd1tb.addEventListener('click',function(){
     initializing (storageCost, 'storage-cost', 180);
     backgroundFocus(ssd1tb);
     backgroundUnfocus(ssd512);
     backgroundUnfocus(ssd256);
     SelectedTotalCost();
     afterPromoTotal()
 })
 
 deliveryFree.addEventListener('click',function(){
     initializing (deliveryCharge, 'delivery-charge', 0);
     backgroundFocus(deliveryFree);
     backgroundUnfocus(deliveryPaid);
     SelectedTotalCost();
     afterPromoTotal()
 })
 deliveryPaid.addEventListener('click',function(){
     initializing (deliveryCharge, 'delivery-charge', 20);
     backgroundFocus(deliveryPaid);
     backgroundUnfocus(deliveryFree);
     SelectedTotalCost();
     afterPromoTotal()
 })
 
 // displaying function of selected item cost
 function SelectedItemCost(targetId){
     var variableName = document.getElementById(targetId);
     return parseInt(variableName.innerText);
 }
 
 // displaying function of selected items total cost
 function SelectedTotalCost(){
     var totalCost = document.getElementById('total');
     totalCost.innerText = SelectedItemCost('base-price') + SelectedItemCost('memory-cost') + SelectedItemCost('storage-cost') + SelectedItemCost('delivery-charge');
     return parseInt(totalCost.innerText);
 }
 
 // promo apply event
 var promoApply = document.getElementById('promo-submit').addEventListener('click', function(){
     var input = document.getElementById('promo-input');
     var inputValue = input.value.toLowerCase();
     var promoMessage = document.getElementById('promo-message');
     if(inputValue == 'stevekaku'){ 
         afterPromoTotal(true);
         input.value = '';
         
         promoMessage.innerText = 'Promo code accepted.'
         promoMessage.style.backgroundColor = 'rgba(16, 185, 129, .65)'
 
     }
     else{
         afterPromoTotal(false);
         input.value = '';
 
         promoMessage.innerText = 'Invalid promo code.'
         promoMessage.style.backgroundColor = 'rgba(239, 68, 68, .65)'
     }
 })
 
 //total calculating function after promo
 function afterPromoTotal(accepted){
     var afterPromoTotal = document.getElementById('total-after-promo');
     if(accepted){
         afterPromoTotal.innerText = SelectedTotalCost() - Math.round(SelectedTotalCost() * (0.2));
         return parseInt(afterPromoTotal.innerText)
     }
     else{
         afterPromoTotal.innerText = SelectedTotalCost();
     }
 }
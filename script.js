document.addEventListener('DOMContentLoaded', function () {
    const orderTypeRadios = document.querySelectorAll('input[name="orderType"]');
    const dineInFields = document.getElementById('dineInFields');
    const pickupFields = document.getElementById('pickupFields');
    const deliveryFields = document.getElementById('deliveryFields');

    orderTypeRadios.forEach(radio => {
        radio.addEventListener('change', function () {
            dineInFields.classList.add('hidden');
            pickupFields.classList.add('hidden');
            deliveryFields.classList.add('hidden');
            
            if (this.value === 'dine-in') {
                dineInFields.classList.remove('hidden');
            } else if (this.value === 'pickup') {
                pickupFields.classList.remove('hidden');
            } else if (this.value === 'delivery') {
                deliveryFields.classList.remove('hidden');
            }
        });
    });
});

let index = 0;
function showNextSlide() {
    const slider = document.getElementById("slider");
    index = (index + 1) % 3;
    slider.style.transform = `translateX(-${index * 100}%)`;
}
setInterval(showNextSlide, 3000);

function toggleDropdown() {
    document.getElementById("accountDropdown").classList.toggle("hidden");
}
window.onclick = function(event) {
    if (!event.target.closest(".relative")) {
        document.getElementById("accountDropdown").classList.add("hidden");
    }
}

function OnSubmit() {
    alert("form submitted successfully");
    return true;
}
function signUp(){
    alert("Welcome to AGIZA!");
    return true
}
function generateOrderLink() {
    const restaurant = document.getElementById("restaurantSelect").value;
    const priceLimit = document.getElementById("priceLimit").value;
    const orderType = document.querySelector('input[name="orderType"]:checked');

    if (!restaurant || !priceLimit || !orderType) {
        alert("Please select a restaurant, order type, and set a price limit.");
        return;
    }

    const orderTypeValue = orderType.value;
    const orderLink = `https://agiza.com/group-order?restaurant=${restaurant}&type=${orderTypeValue}&limit=${priceLimit}`;
    
    document.getElementById("orderLink").value = orderLink;
    document.getElementById("orderLinkContainer").classList.remove("hidden");

    // WhatsApp Share
    const whatsappMessage = `Hey! Join our group order at Agiza.\n\nRestaurant: ${restaurant.toUpperCase()}\nOrder Type: ${orderTypeValue.toUpperCase()}\nPrice Limit: KES ${priceLimit}\n\nOrder Here: ${orderLink}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`;

    document.getElementById("whatsappShare").setAttribute("onclick", `window.open('${whatsappUrl}', '_blank')`);
}

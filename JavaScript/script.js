let cart = [];
let totalPrice = 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    totalPrice += price;
    
    updateCart();
    alert(`${productName} ได้ถูกเพิ่มลงในตะกร้า`);
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - ${item.price} บาท`;
        cartItems.appendChild(listItem);
    });
    
    document.getElementById('total-price').textContent = totalPrice;
}

document.getElementById('checkout-btn').onclick = function() {
    alert(`ชำระเงินทั้งหมด: ${totalPrice} บาท`);
    // สามารถเพิ่มฟังก์ชันการชำระเงินจริงที่นี่
};

const  dec = Array.from(document.querySelectorAll(".product__quantity-control_dec"));
const inc = Array.from(document.querySelectorAll(".product__quantity-control_inc"));
const cartProduct = document.querySelector(".cart__products");

const addButtons = Array.from(document.querySelectorAll(".product__add"));
addButtons.forEach(elem => {
    elem.addEventListener("click", onAddButtonClick);
})

dec.forEach(elem => {
    elem.addEventListener("click", onDecClick);
});

inc.forEach(elem => {
    elem.addEventListener("click", onIncClick);
});

function onDecClick(e) {
    let quantityValueElem = e.currentTarget.closest(".product__quantity-controls").querySelector(".product__quantity-value");
    let quantityValue = quantityValueElem.textContent;
    if (quantityValue > 1) {
        quantityValue--;
        quantityValueElem.textContent = quantityValue;
    }
}

function onIncClick(e) {
    let quantityValueElem = e.currentTarget.closest(".product__quantity-controls").querySelector(".product__quantity-value");
    let quantityValue = quantityValueElem.textContent;
        quantityValue++;
        quantityValueElem.textContent = quantityValue;
}

function onAddButtonClick(e) {
    const product = e.currentTarget.closest(".product");
    const id = product.dataset.id;
    const img = product.querySelector(".product__image").src;
    const quantity = +product.querySelector(".product__quantity-value").textContent;
    let productInCart = cartProduct.querySelector(`[data-id="${id}"]`);
    if (productInCart) {
       let currentQuantity = +productInCart.querySelector(".cart__product-count").textContent;
        productInCart.querySelector(".cart__product-count").textContent = currentQuantity + quantity;
    } else {
        cartProduct.insertAdjacentHTML("beforeend",`<div class="cart__product" data-id="${id}">
                <img class="cart__product-image" src="${img}">
                <div class="cart__product-count">${quantity}</div>
                <a href="#" class="cart__product-remove">&times;</a>
            </div>`);
        cartProduct.querySelector(`[data-id="${id}"]`).querySelector(".cart__product-remove").addEventListener("click", onRemoveClick);
    }
    product.querySelector(".product__quantity-value").textContent = "1";


}

function onRemoveClick(e) {
    e.currentTarget.closest(".cart__product").remove();
}
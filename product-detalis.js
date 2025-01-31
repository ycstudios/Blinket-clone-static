let cart_count = parseInt(localStorage.getItem('cart_count')) || 0;

document.addEventListener("DOMContentLoaded", () => {
    const add_btns = document.querySelectorAll(".add-cart-btn");
    const cart = document.querySelector(".my-cart");

    if (cart_count === 0) {
        cart.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> My Cart`;
    } else {
        cart.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> ${cart_count}`;
    }

    add_btns.forEach(add_btn => {
        add_btn.addEventListener("click", () => {
            let count = parseInt(add_btn.innerHTML) || 0;

            if (add_btn.innerHTML === "ADD") {
                count = 1;
            } else {
                count++;
            }

            add_btn.innerHTML = count;

            cart_count++;


            if (cart_count === 0) {
                cart.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> My Cart`;
            } else {
                cart.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> ${cart_count}`;
            }

            localStorage.setItem('cart_count', cart_count);
        });
    });
});




const phone= document.querySelector(".phone")
document.querySelector(".button").innerHTML = `<button type="button" class="btn btn-secondary contiune p-2 ps-5 pe-5" data-bs-dismiss="modal">Continue</button>`;

phone.addEventListener("input", function() {
    if(phone.value.length === 10) {
        document.querySelector(".button").innerHTML = `<button type="button" class="btn btn-success contiune p-2 ps-5 pe-5" data-bs-dismiss="modal">Continue</button>`;
    } else {
        document.querySelector(".button").innerHTML = `<button type="button" class="btn btn-secondary contiune p-2 ps-5 pe-5" data-bs-dismiss="modal">Continue</button>`;
    }
});
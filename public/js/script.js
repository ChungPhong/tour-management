// Slider tour-images
var imagesThumb = new Swiper(".imagesThumb", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
});
var imagesMain = new Swiper(".imagesMain", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: imagesThumb,
  },
});
// End Slider tour-images

// alert-add-cart-success
const alertAddCartSuccess = () => {
  const elementAlert = document.querySelector("[alert-add-cart-success]");
  if (elementAlert) {
    elementAlert.classList.remove("alert-hidden");
    setTimeout(() => {
      elementAlert.classList.add("alert-hidden");
    }, 3000);
    const closeAlert = elementAlert.querySelector("[close-alert]");
    closeAlert.addEventListener("click", () => {
      elementAlert.classList.add("alert-hidden");
    });
  }
};
// End alert-add-cart-success

// Hiển thị số lượng sản phẩm vào mini cart
const showMiniCart = () => {
  const miniCart = document.querySelector("[mini-cart]");
  if (miniCart) {
    const cart = JSON.parse(localStorage.getItem("cart"));
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    miniCart.innerHTML = totalQuantity;
  }
};
showMiniCart();
// Hết Hiển thị số lượng sản phẩm vào mini cart

// Giỏ hàng
//Nếu chưa có giỏ hàng trong localSorage thì tạo giỏ hàng mới cho người dùng
const cart = localStorage.getItem("cart");
if (!cart) {
  localStorage.setItem("cart", JSON.stringify([]));
}
//Thêm tour vào giỏ hàng
const formAddToCart = document.querySelector("[form-add-to-cart]");
if (formAddToCart) {
  formAddToCart.addEventListener("submit", (event) => {
    event.preventDefault();
    const tourId = parseInt(formAddToCart.getAttribute("tour-id"));
    const quantity = parseInt(formAddToCart.quantity.value);
    if (tourId && quantity > 0) {
      const cart = JSON.parse(localStorage.getItem("cart"));
      const existTour = cart.find((item) => item.tourId == tourId);
      if (existTour) {
        existTour.quantity = existTour.quantity + quantity;
      } else {
        cart.push({
          tourId: tourId,
          quantity: quantity,
        });
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      alertAddCartSuccess();
      showMiniCart();
    }
  });
}
// Hết Giỏ hàng

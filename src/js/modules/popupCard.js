export default function PopupCard() {
  const productCard = document.querySelectorAll('.card__content');
  const popupContent = document.querySelector('.popup__body');

  const productCardArray = Array.from(productCard);

  productCardArray.forEach(function (card) {
    card.addEventListener('click', function () {
      const productImage = card.querySelector('img').getAttribute('src');
      const productName = card.querySelector('h3').textContent;
      const productDescription =
        card.querySelector('.card__text-desc').textContent;
      const productCompound = card.querySelector(
        '.card__text-compound'
      ).textContent;
      const productPrice = card.querySelector('.card__text-price').textContent;
      const productWeight =
        card.querySelector('.card__text-weight').textContent;

      popupContent.innerHTML = `
          <div class="popup__body-img col-7">
            <img src="${productImage}" alt="${productName}">
          </div>
          <div class="popup__body-text col-5">
            <div class="popup__body-text-specification">
              <h2 class="popup__body-text-name text-center pt-4">${productName}</h2>
              <p class="popup__body-text-desc">${productDescription}</p>
              <p class="popup__body-text-compound">${productCompound}</p>
            </div>
            <div class="popup__body-text-value">
              <ul class="">
                <li class="popup__body-text-price list-group-item fs-3 text-center fw-bold">${productPrice}</li>
                <li class="popup__body-text-weight list-group-item fst-italic text-center text-dark fw-light">${productWeight}</li>
              </ul>
            </div>
          </div>
        `;
    });
  });
}

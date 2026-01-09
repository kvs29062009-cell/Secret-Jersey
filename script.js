const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const name = button.dataset.name;
    const price = button.dataset.price;

    startPayment(name, price);
  });
});

function startPayment(product, price) {
  alert(
    `Вы выбрали: ${product}\nЦена: ${price} ₽`
  );

  function startPayment(product, price) {
  window.location.href = "https://pay.yookassa.ru/ВАША_ССЫЛКА";
}


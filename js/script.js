// Функция для переключения отображения модального окна
function toggleMenu() {
    if (document.getElementById("myModal").style.display === "block") {
        closeModal();
    } else {
        openModal();
    }
}

// Функции для открытия и закрытия модального окна
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// Инициализация Swiper для карусели
let prevBtn = document.querySelector('.prev-btn');
let nextBtn = document.querySelector('.next-btn');

// Инициализация Swiper с эффектом coverflow
let mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    speed: 800,
});

// Обработчики событий для кнопок prev и next
prevBtn.addEventListener('click', function() {
    mySwiper.slidePrev();
});

nextBtn.addEventListener('click', function() {
    mySwiper.slideNext();
});

// Инициализация еще одного Swiper для другой цели
let swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev', 
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true, 
    effect: 'coverflow', 
    coverflowEffect: {
        rotate: 50, 
        stretch: 0, 
        depth: 100, 
        modifier: 1, 
        slideShadows: true, 
    },
    speed: 800, 
});

// Настройка стилей для элементов слайдов
let slideElements = document.querySelectorAll('.custom-slide-wrap');

for (let element of slideElements) {
    element.style.marginRight = '0';
}

// Функция для переключения информации
function toggleInfo() {
    let additionalInfo = document.getElementById("additionalInfo");
    let toggleBtn = document.getElementById("toggleInfoBtn");

    if (additionalInfo.style.display === "none") {
        additionalInfo.style.display = "block";
        toggleBtn.textContent = "Скрыть дополнительную информацию";
    } else {
        additionalInfo.style.display = "none";
        toggleBtn.textContent = "Показать дополнительную информацию";
    }
}

// Класс для продукта
class Product {
    constructor(category, name, image, description, price, units = 1) {
        this.category = category;
        this.name = name;
        this.image = image;
        this.description = description;
        this.price = price;
        this.units = units;
        this.quantity = 0;
    }

    setQuantity(quantity) {
        this.quantity = quantity;
    }
    addOneKg() {
        this.quantity += this.units;
        console.log(`Added ${this.units} ${this.name}. Total: ${this.quantity} ${this.units}`);
    } 
}
// Массив продуктов
let products = [
    new Product('Овощи', 'Помидоры', 'img/vegetable_1.jpg', 'Сочные и спелые помидоры для сока', 500),
    new Product('Овощи', 'Огурцы', 'img/vegetable_2.jpg', 'Свежие огурцы для вкусных салатов', 600),
    new Product('Овощи', 'Морковь', 'img/vegetable_3.jpg', 'Сладкая морковь для приготовления вкусных блюд', 700),
    new Product('Фрукты', 'Яблоки', 'img/fruit_1.jpg', 'Сочные яблоки не только освежают, но и дарят ощущение бодрости', 800),
    new Product('Фрукты', 'Бананы', 'img/fruit_2.jpg', 'Сладкие бананы - отличный источник энергии', 900),
    new Product('Фрукты', 'Апельсины', 'img/fruit_3.jpg', 'Сочные апельсины, полные витаминов', 1000),
    new Product('Молочные продукты', 'Молоко', 'img/milk_1.jpg', 'Попробуйте наше молоко и наслаждайтесь натуральным вкусом каждый день!', 700,1),  
    new Product('Молочные продукты', 'Творог', 'img/tvorog.jpg', 'Идеальный выбор для завтраков. Попробуйте наш вкусный творог и наслаждайтесь богатым и натуральным вкусом!', 700,1),
    new Product('Молочные продукты', 'Йогурт', 'img/yogurt.jpg', ' Свежие и восхитительно. Попробуйте наш натуральный йогурт и наслаждайтесь освежающим вкусом и питательными веществами!', 700,1),
    new Product('Молочные продукты', 'Хлеб', 'img/hleb.jpg', 'Нежный внутренний слой наш хлеб идеальным выбором для тостов, бутербродов или просто для наслаждения вкусом в сочетании с маслом и вареньем. Попробуйте наш свежий хлеб и окунитесь в мир натурального вкуса и аромата!', 700,1),
    new Product('Молочные продукты', 'Сгущенка', 'img/sgushenka.jpg', 'Молоко цельное сгущённое с сахаром. Массовая доля жира 8,5%.Акция действует при наличии товара на полке.', 700,1),
    new Product('Мясо', 'Говяжье мясо', 'img/meat_1.jpeg', 'Это мясо богато белком, оно содержит большое количество эластина и коллагена.', 1000),
    new Product('Мясо', 'Филе цыпленка', 'img/meat_2.jpg', 'Куриное филе – один из универсальных продуктов, которое можно приготовить различными способами.', 1000),
    new Product('Мясо', 'Малосольная форель', 'img/meat_3.jpg', 'Основной отличительной чертой малосольной форели является нежный и свежий вкус мяса.', 1000),
];

// Инициализация количества продуктов
for (let product of products) {
    product.quantity = 0;
}
// Поиск продуктов по введенному тексту
let searchInput = document.getElementById('searchInput');
let searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', function() {
    performSearch();
});

searchInput.addEventListener('input', function() {
    performSearch();
});
// Функция поиска и отображения продуктов
function performSearch() {
    let searchTerm = searchInput.value.toLowerCase();
    let filteredProducts = products.filter(function(product) {
        return product.name.toLowerCase().includes(searchTerm) || product.description.toLowerCase().includes(searchTerm);
    });

    renderProducts(filteredProducts);
    updateCartUI(); 
}
// Класс для корзины
class Cart {
    // Конструктор класса, инициализирует пустой массив products для хранения продуктов в корзине
    constructor() {
        this.products = [];
    }
    // Метод добавления продукта в корзину с указанным количеством
    addProduct(product, quantity) {
         // Поиск существующего продукта в корзине по имени
        const existingProduct = this.products.find(p => p.name === product.name);
        // Если продукт уже в корзине, увеличиваем его количество
        if (existingProduct) {
            existingProduct.quantity += quantity;
        } else {
             // Если продукта еще нет в корзине, создаем новый объект продукта и добавляем его в массив
            const newProduct = { ...product, quantity };
            this.products.push(newProduct);
        }
    }
    // Метод удаления продукта из корзины по имени продукта
    removeProduct(productName) {
        // Фильтрация массива, оставляя только продукты с именем, отличным от указанного
        this.products = this.products.filter(p => p.name !== productName);
    }
    // Метод получения общего количества продуктов в корзине
    getTotalQuantity() {
        // Используется метод reduce для суммирования количества каждого продукта в массиве
        return this.products.reduce((total, product) => total + product.quantity, 0);
    }
    // Метод получения общей стоимости продуктов в корзине
    getTotalCost() {
        // Используется метод reduce для суммирования стоимости каждого продукта в массиве
        return this.products.reduce((total, product) => total + (product.price * product.quantity), 0);
    }
}
// Инициализация корзины и элементов на странице
let myCart = new Cart();
let productList = document.getElementById('productList');
let totalCostElement = document.getElementById('totalCost');
// Добавление продукта в корзину
function addToCart(product, quantity) {
    // Поиск существующего продукта в корзине по имени
    let existingProduct = myCart.products.find(p => p.name === product.name);
    // Если продукт уже в корзине, увеличиваем его количество
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        // Если продукта еще нет в корзине, создаем новый объект продукта с начальным количеством 1 и добавляем его в корзину
        let newProduct = { ...product, quantity: 1 };
        myCart.products.push(newProduct);
    }
    // Вызов функции анимации для обновления визуального отображения корзины
    animateCart();
    // Вызов функции обновления пользовательского интерфейса корзины
    updateCartUI(); 
}
// Удаление продукта из корзины
function removeFromCart(productIndex) {
    myCart.products.splice(productIndex, 1);
    updateCartUI(); 
    openCartModal(); 
}
// Отображение продуктов на странице
function renderProducts(products) {
    productList.innerHTML = "";

       for (let product of products) {
        let productDiv = document.createElement('div');
        productDiv.classList.add('product');

        let productImage = document.createElement('img');
        productImage.src = product.image;
        productDiv.appendChild(productImage);

        let productName = document.createElement('h2');
        productName.textContent = product.name;
        productDiv.appendChild(productName);

        let productDescription = document.createElement('p');
        productDescription.textContent = product.description;
        productDiv.appendChild(productDescription);

        let addButton = document.createElement('button');
        addButton.textContent = 'Добавить в корзину';
        addButton.addEventListener('click', function() {
            addToCart(product, 1);
            animateButton(addButton); 
        });
        productDiv.appendChild(addButton);

        productList.appendChild(productDiv);
    }
}

// Вызываете функцию renderProducts(products) с вашими продуктами
renderProducts(products);

// Вызываем функцию обновления интерфейса корзины при загрузке страницы
window.onload = function() {
    updateCartUI();
};
// Функция для открытия модального окна корзины
function openCartModal() {
    let cartModal = document.getElementById("cartModal");
    cartModal.style.display = "block";

    // Получаем элемент, в который будем выводить содержимое корзины
    let cartContent = document.getElementById("cartContent");
    cartContent.innerHTML = ""; // Очищаем содержимое, чтобы избежать дублирования

    // Отображаем содержимое корзины в модальном окне с использованием for...of
    for (let [index, product] of myCart.products.entries()) {
        let productItem = document.createElement("div");
        productItem.classList.add("cart-item");

        let totalQuantity;
        if (product.category === "Фрукты" || product.category === "Овощи" || product.category === "Мясо") {
            totalQuantity = `${product.quantity} кг`;
        } else {
            totalQuantity = `${product.quantity} шт`;
        }

        let totalPrice = product.price * product.quantity;
        productItem.textContent = `${product.name} - ${totalQuantity} - ${totalPrice} тенге`;

        // Добавляем слушатель событий для удаления продукта при клике на элемент корзины
        productItem.addEventListener("click", function() {
            removeFromCart(index);
        });

        cartContent.appendChild(productItem);
    }
}


// Функция закрытия модального окна корзины
function closeCartModal() {
    let cartModal = document.getElementById("cartModal");
    cartModal.style.display = "none";
}
// Функция для обновления интерфейса корзины
function updateCartUI() {
    let cartNum = document.getElementById('cart_num');
    cartNum.textContent = myCart.getTotalQuantity();

    let cartContent = document.getElementById('cartContent');
    cartContent.innerHTML = "";

    let totalProductsCost = 0;
    for (let product of myCart.products) {
        let productItem = document.createElement("div");
        productItem.classList.add("cart-item");

        let unitLabel = product.units === 1 ? 'шт.' : 'кг';
        let totalQuantity = product.units === 1 ? product.quantity : product.quantity + ' ' + unitLabel;
        let totalPrice = product.price * product.quantity;
        productItem.textContent = `${product.name} - ${totalQuantity} - ${totalPrice} тенге.`;

        let increaseButton = document.createElement("button");
        increaseButton.textContent = "+";
        increaseButton.addEventListener("click", function() {
            addToCart(product);
        });
        productItem.appendChild(increaseButton);

        let decreaseButton = document.createElement("button");
        decreaseButton.textContent = "-";
        decreaseButton.addEventListener("click", function() {
            removeFromCart(product.name);
        });
        productItem.appendChild(decreaseButton);

        cartContent.appendChild(productItem);

        totalProductsCost += totalPrice;
    }

    totalCostElement.textContent = `Итоговая сумма: ${totalProductsCost} тенге.`;
}

// function updateCartOnServer(product, quantity, callback) {
//     let xhr = new XMLHttpRequest();
//     xhr.open('POST', '', true);
//     xhr.setRequestHeader('Content-Type', 'application/json');
  
//     xhr.onreadystatechange = function () {
//       if (xhr.readyState === 4 && xhr.status === 200) {
//         let response = JSON.parse(xhr.responseText);
//           callback(response.cart);
//       }
//     };
  
//     xhr.send(JSON.stringify({ product, quantity }));
//   }

// Функция для анимации корзины
function animateCart() {
    let cartButton = document.getElementById('cart');
    let originalColor = cartButton.style.backgroundColor;
    cartButton.style.backgroundColor = 'green';

   
    setTimeout(() => {
        cartButton.style.backgroundColor = originalColor;
    }, 500); 
}
// Индекс текущего предложения
let currentOfferIndex = 0;
let offers = document.querySelectorAll('.offer');
// Функция для отображения предложения по индексу
function showOffer(index) {
    for (let [idx, offer] of offers.entries()) {
        offer.style.display = idx === index ? 'block' : 'none';
    }
}
// Функции для переключения предложений
function nextOffer() {
    currentOfferIndex = (currentOfferIndex + 1) % offers.length;
    showOffer(currentOfferIndex);
}

function prevOffer() {
    currentOfferIndex = (currentOfferIndex - 1 + offers.length) % offers.length;
    showOffer(currentOfferIndex);
}
// Элементы модального окна с информацией об акции
let modal = document.getElementById('offerDetailsModal');
let offerTitle = document.getElementById('offerTitle');
let offerImage = document.getElementById('offerImage');
let offerDescription = document.getElementById('offerDescription');

// При клике на акцию показываем подробности в модальном окне
for (let offer of offers) {
    offer.addEventListener('click', function() {
        // Получаем данные об акции из атрибутов или другого источника данных
        let title = offer.querySelector('h3').textContent;
        let imageSrc = offer.querySelector('img').getAttribute('src');
        let description = offer.querySelector('p').textContent;

        // Устанавливаем данные в модальное окно
        offerTitle.textContent = title;
        offerImage.setAttribute('src', imageSrc);
        offerDescription.textContent = description;

        // Показываем модальное окно
        modal.style.display = 'block';
    });
}

// Получите элемент с классом 'close'
let closeButton = document.querySelector('.close');

// При клике на крестик закрывайте модальное окно
closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Закрытие модального окна при клике вне окна
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

function closeOfferDetailsModal() {
    let offerDetailsModal = document.getElementById("offerDetailsModal");
    offerDetailsModal.style.display = "none";
}

// Показать первую акцию при загрузке страницы
showOffer(currentOfferIndex);

// Автоматически переключать акции каждые 5 секунд (5000 миллисекунд)
setInterval(nextOffer, 2000);

// Открывает модальное окно подтверждения заказа и заполняет его данными из формы
function openOrderConfirmationModal() {
    let orderConfirmationModal = document.getElementById("orderConfirmationModal1");
    orderConfirmationModal.style.display = "block";

    // Отображение введенных данных в модальном окне
    document.getElementById("modalCity").textContent = document.getElementById("city").value;
    document.getElementById("modalAddress").textContent = document.getElementById("address").value;
    document.getElementById("modalApartment").textContent = document.getElementById("apartment").value;
    document.getElementById("modalEntrance").textContent = document.getElementById("entrance").value;
    document.getElementById("modalFloor").textContent = document.getElementById("floor").value;
}
// Отображение введенных данных в модальном окне
function closeOrderConfirmationModal() {
    let orderConfirmationModal = document.getElementById("orderConfirmationModal1");
    orderConfirmationModal.style.display = "none";
}
// Добавляет слушатель события клика на кнопке подтверждения заказа для открытия модального окна
document.getElementById("confirmOrderBtn").addEventListener("click", function () {
    openOrderConfirmationModal();
});
// Отправляет данные формы на сервер при подтверждении заказа
function submitOrderForm() {
    // Получаем значения из полей формы
    let city = document.getElementById("city").value;
    let address = document.getElementById("address").value;
    let apartment = document.getElementById("apartment").value;
    let entrance = document.getElementById("entrance").value;
    let floor = document.getElementById("floor").value;
    // Создаем объект FormData и добавляем в него данные формы
    let formData = new FormData();
    formData.append("city", city);
    formData.append("address", address);
    formData.append("apartment", apartment);
    formData.append("entrance", entrance);
    formData.append("floor", floor);
  // Создаем объект XMLHttpRequest для отправки данных на сервер
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "", true);
    xhr.onload = function () {
        // Если запрос успешен (статус 200), открываем модальное окно подтверждения заказа
        if (xhr.status === 200) {
            openOrderConfirmationModal();
        }
    };
    xhr.send(formData);
}
// Добавляет слушатель события клика на кнопке подтверждения заказа для отправки данных формы
document.getElementById("confirmOrderBtn").addEventListener("click", function () {
    submitOrderForm();
});

// Данные для начальных отзывов
let reviewsData = [
    { text: "Отличный продукт!", image: "img/review_1.jpg",time: null},
    { text: "Быстрая доставка, всегда свежие продукты.", image: "img/review_2.jpg",time: null },
];
// Добавляет новый отзыв в список отзывов и обновляет данные
function addReview() {
    let reviewText = document.getElementById('reviewText').value;

    // Получаем текущую дату и время
    let currentDate = new Date();
    let formattedDate = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;

    // Создаем элемент отзыва
    let reviewElement = document.createElement('div');
    reviewElement.classList.add('review');

    // Добавляем текст отзыва
    let reviewTextElement = document.createElement('p');
    reviewTextElement.textContent = reviewText;
    reviewElement.appendChild(reviewTextElement);

    // Добавляем информацию о времени
    let timeElement = document.createElement('small');
    timeElement.textContent = `Добавлено: ${formattedDate}`;
    reviewElement.appendChild(timeElement);

    // Определяем порядковый номер отзыва в списке
    let reviewIndex = document.getElementById('reviewList').children.length + 1;

    // Добавляем изображение в зависимости от четности/нечетности
    let reviewImageElement = document.createElement('img');
    if (reviewIndex % 2 === 1) {
        reviewImageElement.src = 'img/review_3.jpg';
    } else {
        reviewImageElement.src = 'img/review_4.jpg';
    }
    reviewImageElement.alt = 'Review Image';
    reviewElement.appendChild(reviewImageElement);

    // Добавляем отзыв в список
    document.getElementById('reviewList').appendChild(reviewElement);

    // Обновляем данные отзыва с текущим временем
    reviewsData.push({ text: reviewText, image: reviewImageElement.src, time: formattedDate });
}

// Заполняем начальные отзывы
function renderInitialReviews() {
    let reviewListElement = document.getElementById('reviewList');

    reviewsData.forEach(review => {
        let reviewElement = document.createElement('div');
        reviewElement.classList.add('review');

        let reviewTextElement = document.createElement('p');
        reviewTextElement.textContent = review.text;
        reviewElement.appendChild(reviewTextElement);

        // Добавляем информацию о времени
        let timeElement = document.createElement('small');
        timeElement.textContent = `Добавлено: ${review.time || generateRandomDateTime()}`;
        reviewElement.appendChild(timeElement);
        // Добавляем изображение, если оно есть в данных отзыва
        if (review.image) {
            let reviewImageElement = document.createElement('img');
            reviewImageElement.src = review.image;
            reviewImageElement.alt = 'Review Image';
            reviewElement.appendChild(reviewImageElement);
        }
        // Добавляем отзыв в список
        reviewListElement.appendChild(reviewElement);
    });
}

// Генерация случайной даты и времени
function generateRandomDateTime() {
    let randomDate = new Date(Date.now() - Math.floor(Math.random() * 10000000000)); // Отнимаем случайное количество миллисекунд
    return `${randomDate.toLocaleDateString()} ${randomDate.toLocaleTimeString()}`;
}

// Вызываем функцию для начального заполнения отзывов
renderInitialReviews();
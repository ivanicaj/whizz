// =====================
// Header Background Fade on Scroll
window.addEventListener("scroll", function () {
    const header = document.getElementById("whizzHeader");
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = window.innerHeight;

    const maxScroll = scrollHeight - clientHeight;
    const opacityProgress = Math.min(scrollTop / maxScroll, 1); // 0 to 1

    // From rgba(54, 54, 54, 0.6) to rgba(0, 0, 0, 1)
    const startColor = [54, 54, 54];
    const endColor = [0, 0, 0];

    const r = Math.round(startColor[0] + (endColor[0] - startColor[0]) * opacityProgress);
    const g = Math.round(startColor[1] + (endColor[1] - startColor[1]) * opacityProgress);
    const b = Math.round(startColor[2] + (endColor[2] - startColor[2]) * opacityProgress);
    const finalOpacity = 0.6 + (1 - 0.6) * opacityProgress;

    header.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${finalOpacity})`;
});


// =====================
// E-Bike Accessories Catalog
const products = [
{
    name: 'Basket',
    image: 'images/accessories/basket.png',
    alt: 'Basket',
    description: 'Deliver more with ease! This spacious and durable basket securely attaches to your bike, keeping your orders safe and hassle-free on every ride.',
    price: '$9'
},
{
    name: 'Phone mount',
    image: 'images/accessories/phone_mount.png',
    alt: 'Phone mount',
    description: 'Stay on track! This branded, secure phone mount keeps your device accessible for seamless navigation and deliveries.',
    price: '$9'
},
{
    name: 'Molded helmet',
    image: 'images/accessories/helmet.png',
    alt: 'Molded helmet',
    description: 'Ensure your safety with a lightweight, durable helmet with integrated lighting.',
    price: '$44'
},
{
    name: 'Winter face Mask',
    image: 'images/accessories/face_mask.png',
    alt: 'Winter face Mask',
    description: 'Stay comfortable throughout your shifts with warmth and breathability in any weather.',
    price: '$19'
},
{
    name: 'Polarized riding glasses',
    image: 'images/accessories/polarized_riding_glasses.png',
    alt: 'Polarized riding glasses',
    description: 'Adaptive photochromic glasses designed for e-bike riders. Stylish, durable, and polarized—your perfect companion for comfortable rides in any conditions!',
    price: '$15'
},
{
    name: 'Riding Gloves',
    image: 'images/accessories/riding_gloves.png',
    alt: 'Riding Gloves',
    description: 'Protect hands with shock-absorbing technology and touchscreen-compatible gloves.',
    price: '$19'
},
{
    name: 'Electric heated gloves',
    image: 'images/accessories/electric_heated_gloves.png',
    alt: 'Electric heated gloves',
    description: 'Keep your hands ultra-warm with USB-recharchable heated gloves.',
    price: '$49'
},
{
    name: 'Handlebar Bag',
    image: 'images/accessories/bag.png',
    alt: 'Handlebar Bag',
    description: 'Stay organized on the go for easy access with our waterproof handlebar or frame bag.',
    price: '$14'
},
{
    name: 'Backpack',
    image: 'images/accessories/backpack.png',
    alt: 'Lightweight e-bike backpack',
    description: 'Increase delivery capacity with a durable backpack featuring a reliable zipper.',
    price: '$49'
},
{
    name: 'Fireproof Battery Bag',
    image: 'images/accessories/fireproof_battery_bag.png',
    alt: 'Fireproof Battery Bag',
    description: 'Secure storage or on-the-go use. Protect your battery with peace and convenience.',
    price: '$45'
},
{
    name: 'Battery cover',
    image: 'images/accessories/battery_cover.png',
    alt: 'Battery cover',
    description: 'Protect your e-bike battery with a durable cover. Dust-proof and designed with reflective elements for added road safety.',
    price: '$25'
},
{
    name: 'Chain Lock',
    image: 'images/accessories/chain_lock.png',
    alt: 'Chain Lock',
    description: 'Park anywhere and ensure your e-bike extra theft protection with a steel chain lock.',
    price: '$14'
},
{
    name: 'Sturdy U-lock',
    image: 'images/accessories/u-lock.png',
    alt: 'Sturdy U-lock',
    description: 'Secure your e-bike with heat-hardened steel resisting up to 13 tons of force.',
    price: '$39'
},
{
    name: 'Safety Vest',
    image: 'images/accessories/safety_vest.png',
    alt: 'Safety Vest',
    description: 'Be seen and safe even in low-light conditions with a high-visibility safety vest.',
    price: '$9'
},
{
    name: 'Bike Mitts',
    image: 'images/accessories/mitts.png',
    alt: 'Bike Mitts',
    description: 'Don\'t let cold weather slow you down. Bike Mitts: waterproof, windproof, and cozy.',
    price: '$34'
},
{
    name: 'Power Bank',
    image: 'images/accessories/power_bank.png',
    alt: 'Power Bank',
    description: 'Always stay online, charge your iPhone XS or Xiaomi 9 up to 6.6 times per one charge.',
    price: '$29'
},
{
    name: 'Charger',
    image: 'images/accessories/charger.png',
    alt: 'Charger',
    description: 'Compact and powerful 163.8W charger with IP65 protection, smart safety features, and UL, ROHS, FCC certification. Designed for reliable performance in any conditions.',
    price: '$49'
},
{
    name: 'Frame bag with phone case',
    image: 'images/accessories/frame_bag_with_phone_case.png',
    alt: 'Frame bag with phone case',
    description: 'Compact and secure, this frame  bag keeps your essentials within reach while protecting your phone. A practical accessory for convenient access during rides.',
    price: '$15'
},
{
    name: 'Single Bike Mirror',
    image: 'images/accessories/mirror.png',
    alt: 'Single Bike Mirror',
    description: 'Enhance your bike\'s safety with this sleek mirror set. Easily attachable, providing a clear rearview for safer rides. A must-have accessory for any cyclist.',
    price: '$9'
},
{
    name: 'Water bottle',
    image: 'images/accessories/water_bottle.png',
    alt: 'Water bottle',
    description: 'Stay hydrated on the go with this durable and lightweight water bottle. Designed to fit various bottle cages, it’s perfect for any cycling adventure.',
    price: '$9'
},
{
    name: 'Floor Pump',
    image: 'images/accessories/floor_pump.png',
    alt: 'Floor Pump',
    description: 'Fast, easy inflation for any ride. Lightweight, durable, and compatible with Presta & Schrader valves. Keep your tires pumped and roll hassle-free!',
    price: '$9'
},
{
    name: 'Multi-Tool Kit',
    image: 'images/accessories/multi-functional-ratchet.png',
    alt: 'Multi-Tool Kit',
    description: 'Effortless repairs on the go. Compact, lightweight and durable multi-tool kit designed for quick and easy bike maintenance. With flexible ratchets and a secure grip, it ensures smooth adjustments in any scenario.',
    price: '$15'
},
{
    name: 'Bungee Cords Set',
    image: 'images/accessories/bungee_cords_set.png',
    alt: 'Bungee Cords Set',
    description: 'Secure your cargo with these durable, flexible bungee cords—built for every ride.',
    price: '$9'
},
{
    name: 'Handlebar Cup Holder',
    image: 'images/accessories/handlebar_cup_holder.png',
    alt: 'Handlebar Cup Holder',
    description: 'Stay refreshed on the move! Convenient handlebar cup holder for easy access to your drink on the go.',
    price: '$9'
}
];

const allProducts = products;

const catalog = document.getElementById('catalog');

allProducts.forEach(product => {
    const article = document.createElement('article');
    article.className = 'whizz-card';
    article.innerHTML = `
    <div class="whizz-card__img">
        <img src="${product.image}" alt="${product.alt}" loading="lazy">
    </div>
    <div class="whizz-card__content">
        <h3 class="whizz-card__title">${product.name}</h3>
        <p class="whizz-card__description">${product.description}</p>
        <button class="whizz-button whizz-card__button" onclick="openModal()">Buy for ${product.price}</button>
    </div>
    `;
    catalog.appendChild(article);
});


// =====================
// Modal Logic
function openModal() {
    modal.classList.add('whizz-modal--active');
    modal.setAttribute('aria-labelledby', 'modalTitle');
}

function closeModal() {
    modal.classList.remove('whizz-modal--active');
}

function openModal() {
    modal.classList.add('whizz-modal--active');
}

function closeModal() {
    modal.classList.remove('whizz-modal--active');
}

const modal = document.getElementById('modal');
const modalContent = modal.querySelector('.whizz-modal__content');
const closeBtnModal = document.getElementById('closeBtnModal');

window.addEventListener('click', (event) => {
if (event.target === modal) {
    closeModal();
}
});

if (closeBtnModal) {
    closeBtnModal.addEventListener('click', () => {
        closeModal();
    });
}

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
});


// =====================
// Mobile Menu
const burger = document.getElementById('burger');
const overlay = document.getElementById('menuOverlay');
const closeBtnMenu = document.getElementById('closeBtnMenu');
const menu = document.getElementById('burgerMenu');

burger.addEventListener('click', () => {
    overlay.classList.add('whizz-overlay--active');
});

if (closeBtnMenu && overlay) {
    closeBtnMenu.addEventListener('click', () => {
        overlay.classList.toggle('whizz-overlay--active');
    });
}

overlay.addEventListener('click', (e) => {
    if (!menu.contains(e.target)) {
        overlay.classList.remove('whizz-overlay--active');
    }
});


// =====================
// Mobile Menu
var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("whizz-select-custom");
l = x.length;
for (i = 0; i < l; i++) {
selElmnt = x[i].getElementsByTagName("select")[0];
ll = selElmnt.length;
/*for each element, create a new DIV that will act as the selected item:*/
a = document.createElement("DIV");
a.setAttribute("class", "whizz-select-custom__selected");
a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
x[i].appendChild(a);
/*for each element, create a new DIV that will contain the option list:*/
b = document.createElement("DIV");
b.setAttribute("class", "whizz-select__items whizz-select-hide");
for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("whizz-select-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
            }
            this.setAttribute("class", "whizz-select-as-selected");
            break;
        }
        }
        h.click();
    });
    b.appendChild(c);
}
x[i].appendChild(b);
a.addEventListener("click", function(e) {
    /*when the select box is clicked, close any other select boxes,
    and open/close the current select box:*/
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("whizz-select-hide");
    this.classList.toggle("whizz-arrow-active");
    });
}
function closeAllSelect(elmnt) {
/*a function that will close all select boxes in the document,
except the current select box:*/
var x, y, i, xl, yl, arrNo = [];
x = document.getElementsByClassName("whizz-select__items");
y = document.getElementsByClassName("whizz-select-custom__selected");
xl = x.length;
yl = y.length;
for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
    arrNo.push(i)
    } else {
    y[i].classList.remove("whizz-arrow-active");
    }
}
for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
    x[i].classList.add("whizz-select-hide");
    }
}
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);
//Header Background Fade on Scroll
$(window).on("scroll", function () {
    const header = $("#whizzHeader");
    const scrollTop = $(window).scrollTop();
    const scrollHeight = $(document).height();
    const clientHeight = $(window).height();

    const maxScroll = scrollHeight - clientHeight;
    const opacityProgress = Math.min(scrollTop / maxScroll, 1); // 0 to 1

    // From rgba(54, 54, 54, 0.6) to rgba(0, 0, 0, 1)
    const startColor = [54, 54, 54];
    const endColor = [0, 0, 0];

    const r = Math.round(startColor[0] + (endColor[0] - startColor[0]) * opacityProgress);
    const g = Math.round(startColor[1] + (endColor[1] - startColor[1]) * opacityProgress);
    const b = Math.round(startColor[2] + (endColor[2] - startColor[2]) * opacityProgress);
    const finalOpacity = 0.6 + (1 - 0.6) * opacityProgress;

    header.css("background-color", `rgba(${r}, ${g}, ${b}, ${finalOpacity})`);
});

//E-Bike Accessories Catalog
const products = [
  // Your products array here...
];

const catalog = $('#catalog');

products.forEach(product => {
    const article = $('<article>').addClass('whizz-card');
    article.html(`
        <div class="whizz-card__img">
            <img src="${product.image}" alt="${product.alt}" loading="lazy">
        </div>
        <div class="whizz-card__content">
            <h3 class="whizz-card__title">${product.name}</h3>
            <p class="whizz-card__description">${product.description}</p>
            <button class="whizz-button whizz-card__button" onclick="openModal()">Buy for ${product.price}</button>
        </div>
    `);
    catalog.append(article);
});

//Modal Logic
let modal = $('#modal');
const closeBtnModal = $('#closeBtnModal');

function openModal() {
    modal.addClass('whizz-modal--active').attr('aria-labelledby', 'modalTitle');
}

function closeModal() {
    modal.removeClass('whizz-modal--active');
}

$(window).on('click', function (event) {
    if ($(event.target).is(modal)) {
        closeModal();
    }
});

closeBtnModal.on('click', function () {
    closeModal();
});

$('form').on('submit', function (e) {
    e.preventDefault();
});

//Mobile Menu
const burger = $('#burger');
const overlay = $('#menuOverlay');
const closeBtnMenu = $('#closeBtnMenu');
const menu = $('#burgerMenu');

burger.on('click', function() {
    overlay.addClass('whizz-overlay--active');
});

if (closeBtnMenu.length && overlay.length) {
    closeBtnMenu.on('click', function() {
        overlay.toggleClass('whizz-overlay--active');
    });
}

overlay.on('click', function (e) {
    if (!menu.is(e.target) && menu.has(e.target).length === 0) {
        overlay.removeClass('whizz-overlay--active');
    }
});

//Custom Select
$(".whizz-select-custom").each(function() {
    const selElmnt = $(this).find("select")[0];
    const selected = $(this).find(".whizz-select-custom__selected");
    
    selected.text(selElmnt.options[selElmnt.selectedIndex].innerHTML);
    
    const itemsContainer = $("<div>").addClass("whizz-select__items whizz-select-hide");
    
    $(selElmnt).find("option").each(function(index) {
        if (index !== 0) {
            const option = $("<div>").text($(this).text());
            option.on("click", function() {
                selElmnt.selectedIndex = index;
                selected.text($(this).text());
                itemsContainer.find(".whizz-select-as-selected").removeClass("whizz-select-as-selected");
                $(this).addClass("whizz-select-as-selected");
                selected.trigger('click');
            });
            itemsContainer.append(option);
        }
    });
    
    $(this).append(itemsContainer);
    
    selected.on("click", function(e) {
        e.stopPropagation();
        closeAllSelect($(this));
        itemsContainer.toggleClass("whizz-select-hide");
        selected.toggleClass("whizz-arrow-active");
    });
});

function closeAllSelect(elmnt) {
    $(".whizz-select__items").each(function() {
        if (elmnt[0] !== $(this).prev().get(0)) {
            $(this).addClass("whizz-select-hide");
        }
    });

    $(".whizz-select-custom__selected").each(function() {
        if (elmnt[0] !== $(this)[0]) {
            $(this).removeClass("whizz-arrow-active");
        }
    });
}

$(document).on('click', closeAllSelect);
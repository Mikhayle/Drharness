$(document).ready(function () {
    $(`.catalog__erotic`).hide();

// переключение вкладок коллекции портупей
    $(`.catalog__btn`).on('click', function () {
        $(`.catalog__btn`).removeClass('active');
        $(this).addClass('active');
    });

    $(`.everyday_btn`).on('click', function () {
        $(`.catalog__erotic`).fadeOut();
        $(`.catalog__everyday`).fadeIn();
    });

    $(`.erotic_btn`).on('click', function () {
        $(`.catalog__everyday`).fadeOut();
        $(`.catalog__erotic`).fadeIn();
    });

   // выбор размера в карточке
    $(`.catalog__size-item`).on('click', function () {
       if ($(this).prop("checked")) {
           $('.catalog__card-size .labeljs').removeClass('active');
           $(this).parent().addClass('active');
       } else {
           $(this).parent().removeClass('active');
        }
    });
// выбор цвета в карточке
    $(`.catalog__color-item`).on('click', function () {
        if ($(this).prop("checked")) {
            $('.catalog__card-color .labeljs').removeClass('active');
            $(this).parent().addClass('active');
        } else {
            $(this).parent().removeClass('active');
        }
    });

// компановка модального окна (подкидывается фото, название и выбранный размер из карточки, по которой был произведн клик
// )
    $(`.catalog__btn-order-js`).on('click', function () {
        const currentPic = $(this).siblings(`.catalog__card-pic`);
        const currentTitle = $(this).siblings(`.catalog__card-title`).text();

        currentPic.clone().appendTo(`.popup__picture`);
        $(`.popup__card-title`).text(currentTitle);
        $(`.popup-container`).fadeIn();
        $(`.popup-modal`).addClass(`popup-active`);
    });
    $(`.catalog__size-item`).on(`click`, function () {
        const checkedSizeValue = $(`.catalog__size-item:checked`).val();
        console.log(checkedSizeValue);
        $(`.popup__size option`).each(function () {
            console.log($(this).val());
            if (checkedSizeValue === $(this).val()) {
                $(this).attr('selected', 'selected');
            };
        });
    });
    $(`.close`).on('click', function () {
        $(`.popup-container`).fadeOut();
        $(`.popup-modal`).removeClass(`popup-active`);
        $(`.popup__picture>.catalog__card-pic`).remove();
        $(`.popup__card-title`).empty();
    });

// запрет клика по неактивной кнопке
        $(`.disabled`).children(`.catalog__size-item`).attr(`disabled`, `disabled`);

});


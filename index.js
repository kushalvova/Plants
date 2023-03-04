console.log('1. +50 \n2. +50 \n3. +25 \ntotal: 125');

(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__navibar');
    const menuCloseFirst = document.querySelector('.header__navibar__close');
    const menuCloseSecond = document.querySelector('.header__navibar__list');
    const menuCloseThird = document.querySelector('main');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__navibarActive');
    });
    menuCloseFirst.addEventListener('click', () => {
        menu.classList.remove('header__navibarActive');
    });
    menuCloseSecond.addEventListener('click', () => {
        menu.classList.remove('header__navibarActive');
    });
    menuCloseThird.addEventListener('click', () => {
        menu.classList.remove('header__navibarActive');
    });
}());

document.querySelectorAll('.accordion__header').forEach((item) =>
    item.addEventListener('click', () => {
        const parent = item.parentNode;

        if (parent.classList.contains('accordion__itemShow')) {
            parent.classList.remove('accordion__itemShow');
        } else {
            document
                .querySelectorAll('.accordion__item')
                .forEach((child) => child.classList.remove('accordion__itemShow'))
            parent.classList.add('accordion__itemShow');
        }
    })
)

let select = function () {
    let selectHeader = document.querySelectorAll ('.contacts__select__header');
    let selectHeaderId = document.getElementById ('header');
    let selectItem = document.querySelectorAll ('.contacts__select__item');
    let selectCanandaigua = document.getElementById('canandaigua');
    let selectNewYork = document.getElementById('newYork');
    let selectYonkers = document.getElementById('yonkers');
    let selectSherrill = document.getElementById('sherrill');
    let selectNameDefault = 'City';
    let selectWomanId = document.getElementById('woman');

    selectHeader.forEach(item=>{
        item.addEventListener ('click', selectToggle)
    });

    selectItem.forEach(item=>{
        item.addEventListener ('click', selectChoose)
    });

    selectHeader.forEach(item=>{
        item.addEventListener ('click', renameHeader)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('contacts__selectShow');
        selectWomanId.classList.toggle('contacts__imgShow');
        let selectName = this.innerText;

        if (selectName !== selectNameDefault){
            this.parentElement.classList.remove('contacts__selectShow');
        }

        if (selectCanandaigua.classList.contains('contacts__cardShow')){
            selectCanandaigua.classList.remove('contacts__cardShow');
        }
        if (selectNewYork.classList.contains('contacts__cardShow')){
            selectNewYork.classList.remove('contacts__cardShow');
        }
        if (selectYonkers.classList.contains('contacts__cardShow')){
            selectYonkers.classList.remove('contacts__cardShow');
        }
        if (selectSherrill.classList.contains('contacts__cardShow')){
            selectSherrill.classList.remove('contacts__cardShow');
        }
        if (selectHeaderId.classList.contains('contacts__select__headerCityActive')){
            selectHeaderId.classList.remove('contacts__select__headerCityActive');
        }
    }

    function selectChoose() {
        let text = this.innerText;
        let select = this.closest('.contacts__select');
        let currentText = select.querySelector('.contacts__select__header');
        
        currentText.innerText = text;
        select.classList.remove('contacts__selectShow');
        selectHeaderId.classList.add('contacts__select__headerCityActive');
        
        if (text === 'New York City') {
            selectNewYork.classList.add('contacts__cardShow');
        }
        if (text === 'Canandaigua, NY') {
            selectCanandaigua.classList.add('contacts__cardShow');
        }
        if (text === 'Yonkers, NY') {
            selectYonkers.classList.add('contacts__cardShow');
        }
        if (text === 'Sherrill, NY') {
            selectSherrill.classList.add('contacts__cardShow');
        }        
    }
    function renameHeader() {
        this.closest('.contacts__select__header').innerText = selectNameDefault;
    }
};
select();

(function () {
    const gardenFocus = document.getElementsByClassName('garden');
    const lownFocus = document.getElementsByClassName('lown');
    const plantingFocus = document.getElementsByClassName('planting');

    const gardenFocusBtn = document.getElementById('garden__btn');
    const lownFocusBtn = document.getElementById('lown__btn');
    const plantingFocusBtn = document.getElementById('planting__btn');

    gardenFocusBtn.addEventListener('click', () => {
        if (lownFocusBtn.classList.contains('service__content__btnActive') &&  plantingFocusBtn.classList.contains('service__content__btnActive')){
            return;
        };      
        if (gardenFocus[0].classList.contains('service__itemBlur')){
            for (let i = 0; i < gardenFocus.length; i++) {
                gardenFocus[i].classList.remove('service__itemBlur');
            };
            gardenFocusBtn.classList.toggle('service__content__btnActive');
            return;
        };
        gardenFocusBtn.classList.toggle('service__content__btnActive');
        if (lownFocusBtn.classList.contains('service__content__btnActive') || plantingFocusBtn.classList.contains('service__content__btnActive')){
            for (let i = 0; i < gardenFocus.length; i++) {
                gardenFocus[i].classList.add('service__itemBlur');
            };
            return;
        };
        for (let i = 0; i < lownFocus.length; i++) {
            lownFocus[i].classList.toggle('service__itemBlur');
        };
        for (let i = 0; i < plantingFocus.length; i++) {
            plantingFocus[i].classList.toggle('service__itemBlur');
        };
    });

    lownFocusBtn.addEventListener('click', () => {
        if (plantingFocusBtn.classList.contains('service__content__btnActive') && gardenFocusBtn.classList.contains('service__content__btnActive')){
            return;
        };
        if (lownFocus[0].classList.contains('service__itemBlur')){
            for (let i = 0; i < lownFocus.length; i++) {
                lownFocus[i].classList.remove('service__itemBlur');
            };
            lownFocusBtn.classList.toggle('service__content__btnActive');
            return;
        }
        lownFocusBtn.classList.toggle('service__content__btnActive');
        if (gardenFocusBtn.classList.contains('service__content__btnActive') || plantingFocusBtn.classList.contains('service__content__btnActive')){
            for (let i = 0; i < lownFocus.length; i++) {
                lownFocus[i].classList.add('service__itemBlur');
            };
            return;
        };
        for (let i = 0; i < gardenFocus.length; i++) {
            gardenFocus[i].classList.toggle('service__itemBlur');
        };
        for (let i = 0; i < plantingFocus.length; i++) {
            plantingFocus[i].classList.toggle('service__itemBlur');
        };
    });

    plantingFocusBtn.addEventListener('click', () => {
        if (lownFocusBtn.classList.contains('service__content__btnActive') && gardenFocusBtn.classList.contains('service__content__btnActive')){
            return;
        };
        if (plantingFocus[0].classList.contains('service__itemBlur')){
            for (let i = 0; i < plantingFocus.length; i++) {
                plantingFocus[i].classList.remove('service__itemBlur');
            };
            plantingFocusBtn.classList.toggle('service__content__btnActive');
            return;
        }
        plantingFocusBtn.classList.toggle('service__content__btnActive');
        if (gardenFocusBtn.classList.contains('service__content__btnActive') || lownFocusBtn.classList.contains('service__content__btnActive')){
            for (let i = 0; i < plantingFocus.length; i++) {
                plantingFocus[i].classList.add('service__itemBlur');
            };
            return;
        };
        for (let i = 0; i < gardenFocus.length; i++) {
            gardenFocus[i].classList.toggle('service__itemBlur');
        };
        for (let i = 0; i < lownFocus.length; i++) {
            lownFocus[i].classList.toggle('service__itemBlur');
        };
    });
}());
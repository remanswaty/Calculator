let value = null;
currentValue = null;
let currentSign = "";

const row = document.querySelector(".calculator");

const children = ([child1, child2, child3,
    child4, child5, child6] = [row.children[1], row.children[2],
    row.children[3], row.children[4],
    row.children[5], row.children[6]]);

const screen = document.querySelector(".screen");

children.map(function (element) {
    element.addEventListener('click', function (event) {
        let buttonClickedName = event.target.innerText;
        switch (buttonClickedName) {
            case '1':
                screen.value = screen.value + "1";
                break;
            case '2':
                screen.value = screen.value + "2";
                break;
            case '3':
                screen.value = screen.value + "3";
                break;
            case '4':
                screen.value = screen.value + "4";
                break;
            case '5':
                screen.value = screen.value + "5";
                break;
            case '6':
                screen.value = screen.value + "6";
                break;
            case '7':
                screen.value = screen.value + "7";
                break;
            case '8':
                screen.value = screen.value + "8";
                break;
            case '9':
                screen.value = screen.value + "9";
                break;
            case '0':
                screen.value = screen.value + "0";
                break;
            case 'C':
                screen.value = null;
                value = null;
        }
    })
})

const plusButton = document.querySelector('.plus-button');
plusButton.addEventListener("click", function () {
    currentSign = "plus";
    screen.focus();
    currentValue = Number(screen.value);
    screen.value = null;
});

const minusButton = document.querySelector('.minus-button');
minusButton.addEventListener("click", function () {
    currentSign = "minus";
    screen.focus();
    currentValue = screen.value;
    screen.value = null;
});

const multiplyButton = document.querySelector('.multiply-button');
multiplyButton.addEventListener("click", function () {
    currentSign = "multiply";
    screen.focus();
    currentValue = screen.value;
    screen.value = null;
});

const devideButton = document.querySelector('.devide-button');
devideButton.addEventListener("click", function () {
    currentSign = "devide";
    screen.focus();
    currentValue = screen.value;
    screen.value = null;
});

const equalButton = document.querySelector(".equal-button");
equalButton.addEventListener("click", function () {
    screen.focus();
    switch (currentSign) {
        case "plus":
            if (value == null) {
                value = currentValue + Number(screen.value);
            } else {
                value = value + Number(screen.value);
            }
            break;
        case "minus":
            if (value == null) {
                value = currentValue - Number(screen.value);
            } else {
                value = value - Number(screen.value);
            }
            break;
        case "multiply":
            if (value == null) {
                value = currentValue * Number(screen.value)
            } else {
                value = value * Number(screen.value);
            }
            break;
        case "devide":
            if (value == null) {
                value = currentValue / Number(screen.value);
            } else {
                value = value / Number(screen.value);
            }
            break;
    }
    screen.value = value;
    currentSign = '';
});
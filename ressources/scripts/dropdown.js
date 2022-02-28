let rotated = false;

export function generateFilterDrop(element) {
    let rotated = false;
    return {
        filterDrop: function() {
            if (!rotated) {
                element.querySelector(".fa-chevron-down").style.transform = "rotate(180deg)";
                rotated = true;
                element.style.height = "auto";
                element.querySelector(".dropdown").style.display = "flex";
                element.querySelector(".dropdown").style.height = "auto"; //400px
                filterWidth(element);
            } else {
                element.querySelector(".fa-chevron-down").style.transform = "rotate(0deg)";
                rotated = false;
                element.querySelector(".dropdown").style.display = "none";
                element.style.height = "50px";
            }
        },

        filterDropDown: function() {
            if (!rotated) {
                element.querySelector(".fa-chevron-down").style.transform = "rotate(180deg)";
                rotated = true;
                element.style.height = "auto";
                element.querySelector(".dropdown").style.display = "flex";
                element.querySelector(".dropdown").style.height = "auto"; //400px
                filterWidth(element);
            }
        },

        filterDropUp: function() {
            if (rotated) {
                element.querySelector(".fa-chevron-down").style.transform = "rotate(0deg)";
                rotated = false;
                element.querySelector(".dropdown").style.display = "none";
                element.style.height = "50px";
            }
        }
    }
}

export function filterDropDown(element) {
    if (!rotated) {
        element.querySelector(".fa-chevron-down").style.transform = "rotate(180deg)";
        rotated = true;
        element.style.height = "auto";
        element.querySelector(".dropdown").style.display = "flex";
        element.querySelector(".dropdown").style.height = "auto"; //400px
        filterWidth(element);
    }
}

export function filterDropUp(element) {
    if (rotated) {
        element.querySelector(".fa-chevron-down").style.transform = "rotate(0deg)";
        rotated = false;
        element.querySelector(".dropdown").style.display = "none";
        element.style.height = "50px";
    }
}

export function filterWidth(element) {
    let divWidth = Math.ceil(element.querySelector(".dropdown").childElementCount / 16) * 155 + 10;
    if (divWidth > document.querySelector(".filter").offsetWidth) {
        element.querySelector(".dropdown").style.width = divWidth.toString() + "px";
    } else { element.querySelector(".dropdown").style.width = "100%"; }
}
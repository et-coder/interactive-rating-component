let rating = document.querySelectorAll(".rating");
let selected = document.querySelector(".selected");
let btn = document.querySelector("button");
let thanks = document.querySelector(".thank-you");
let rating_section = document.querySelector(".rating-section");
let isRated = false;

rating.forEach((rate) => {
    let number = Array.prototype.indexOf.call(rate.parentNode.children, rate) + 1;

    rate.addEventListener("click", () => {
        isRated = "true";
        selected.innerHTML = number;
        rate.classList.add("rated");
        rating.forEach((rates) => {
            if (rates != rate) {
                rates.classList.remove("rated");
            }
        })

    })

})

btn.addEventListener("click", () => {
    if (isRated) {
        thanks.classList.add("active");
        thanks.classList.remove("non-active");
        rating_section.classList.add("non-active");
        rating_section.classList.remove("active");
    }

    else {
        document.querySelector(".not-rated").style.display = "block";

    }


})


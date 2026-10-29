let btn = document.getElementById("btn");
let items = document.querySelectorAll(".form .sidebar .item");
let steps = document.querySelectorAll(".steps .step");
let counter = 1;

btn.addEventListener("click", (e) => {
    e.preventDefault()
    items.forEach((item, index) => {
        item.classList.remove("active");
        if (counter % items.length == index)
            item.classList.add("active");
    });
    steps.forEach((step, index) => {
        step.classList.remove("active");
        if (counter % steps.length == index)
            step.classList.add("active");
    });
    console.log(counter)
    counter++;
});

document.querySelectorAll(".custom-radio").forEach(radio => {
    radio.addEventListener("click", function () {
        this.classList.toggle("active");
    })
})
document.addEventListener("DOMContentLoaded", function () {
    var display = document.getElementById("display");
    var buttons = document.querySelectorAll(".btn");

    var currentValue = "";
    var operator = "";
    var lastOperation = "";

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            var value = this.getAttribute("data-value");

            if (value === "C") {
                currentValue = "";
                display.value = "";
            } else if (value === "=") {
                try {
                    display.value = eval(currentValue);
                    currentValue = display.value;
                } catch (error) {
                    display.value = "Error";
                    currentValue = "";
                }
            } else {
                currentValue += value;
                display.value = currentValue;
            }
        });
    });
});

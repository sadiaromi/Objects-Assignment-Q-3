// ========================================= STEP# 1 =========================================
var product = {
    name: "polo-necked",
    price: 1000,
    color: "Black",
    inventory: {
        stock: 15,
        colorOptions: ["Blue", "Green", "White"],
        changeColor: function (newColor) {
            // ========================================= STEP# 3 ================================================
            product.color = newColor;
            if (newColor == "Blue") {
                // increases the price by 10% when blue color is selected
                product.price += product.price * 0.1;
            }
            // increases the price by 5% when green is selected
            else if (newColor == "Green") {
                product.price = +product.price * 0.5;
            }
            // decreases the price by 5% if white is selected
            else if (newColor == "White") {
                product.price = -product.price * 0.4;
            }
            else {
                // if color is out of list
                console.log("".concat(newColor, " sorry! This color is not available"));
            }
            console.log("Your product price is changed according to color selection to ".concat(newColor));
        }
    }
};
console.log(product.inventory.colorOptions);
product.inventory.changeColor("Black");
product.price;

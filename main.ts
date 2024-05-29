/*art 3: Colorful T-Shirts
Challenge:
1. Design a type alias named Product to represent a T-shirt object with properties like name
(string), price (number), and color (string).
2. Include a nested object named inventory within Product. This inventory object 
should have two properties: 
o stock (number): Represents the number of T-shirts available.
o colorOptions (optional array of strings): Lists available colors (if any).
3. Inside the inventory object, define a function named changeColor. This function 
accepts a new color string as an argument. When called, it should: 
o Update the color property of the Product object.
o Adjust the price based on the new color (implement your own logic, e.g., 
increase by 10% for red, decrease by 5% for blue)*/

// ========================================= STEP# 1 =========================================

type Product ={
    name:string;
    price:number;
    color:string;

// ========================================= STEP# 2 ==========================================

    inventory:{
        stock:number;
        colorOptions?:string[];
        changeColor:(newColor)=> void
    }
 }

 let product:Product={
    name:"polo-necked",
    price:1000,
    color:"Black",
    inventory:{
        stock:15,
        colorOptions:["Blue" , "Green" , "White"],
        changeColor:(newColor)=>{
            
// ========================================= STEP# 3 ================================================

            product.color=newColor
        if (newColor=="Blue"){
                // increases the price by 10% when blue color is selected
                product.price += product.price *0.1
            }
            // increases the price by 5% when green is selected
            else if(newColor == "Green"){
                product.price =+ product.price *0.5
            }
            // decreases the price by 5% if white is selected
            else if(newColor=="White"){
                product.price =- product.price *0.4
            }
            else{
                // if color is out of list
                console.log(`${newColor} sorry! This color is not available`);
            }
            console.log(`Your product price is changed according to color selection to ${newColor}`);
        }
    }

 }
console.log(product.inventory.colorOptions);
product.inventory.changeColor(`Black`);
product.price;
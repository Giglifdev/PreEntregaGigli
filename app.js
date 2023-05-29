//welcome//
let welcome = prompt("Bienvenido a HardwareHaven, por favor ingresa tu nombre");
    console.log("Hola, " + welcome + "!");

    let southAmerica = ["Brazil" , "Argentina" , "Peru" , "Uruguay"]
let northAmerica = ["USA" , "Canada"]
let europe = ["Spain" , "France" , "Germany" , "United Kingdom" , "Italy"]

let chosenContinent = prompt(`
Choose a Continent: 
1: South America
2: North America
3: Europe
`);

let filteredCountries;

if (chosenContinent === "South America" , 1) {
    filteredCountries = southAmerica.filter(country => true);
} else if (chosenContinent === "North America", 2) {
    filteredCountries = northAmerica.filter(country => true);
} else if (chosenContinent === "Europe", 3) {
    filteredCountries = europe.filter(country => true);
} else {
    alert("Invalid Option");
}

console.log(filteredCountries);

//Store//
let StoreBrands = alert("seleccione el tipo de accesorio y acontinuacion se le mostrara una marca a elegir, siga los pasos.");

const selectedproducts = [];
const cartPrices = [];


const Store = prompt(`
    1: Audio
    2: Keyboards
    3: Mouse
    4: Mousepads
    5: Notebooks
    6: Desktop
`);





//condicionales//

switch (Store) {
    case "1":
    let brand1 = prompt(`
    Select a brand:
    1: Razer
    2: HyperX
    3: Logitech
    4: Redragon
    5: Samsung Galaxy
    
    `);
    switch (brand1) {
        case "1":
            selectedproducts.push("Razer audio Products");
            cartPrices.push(120000);
            console.log("you selected Razer audio Products");
        break;
        case "2":
            selectedproducts.push("HyperX audio Products");
            cartPrices.push(66309);
            console.log("you selected HyperX audio Products");
        break;
        case "3":
            selectedproducts.push("Logitech audio Products")
            cartPrices.push(30000);
            console.log("you selected Logitech audio Products");
        break;
        case "4":
            selectedproducts.push("Redragon audio Products");
            cartPrices.push(6600);
            console.log("you selected Redragon audio Products");
        break;
        case "5":
            selectedproducts.push("Samsung Galaxy audio Products");
            cartPrices.push(76000);
            console.log("you selected Samsung Galaxy audio Products");
        break;
        default:
            console.log("invalid option");    
    }
        break;
    case "2":
    let brand2 =prompt(`
    Select a brand:
    1: Razer
    2: Logitech
    3: HyperX
    4: Redragon
    5: Genesis Thor
    `)
    switch (brand2) {
        case "1":
            selectedproducts.push("Razer keyboard Products");
            cartPrices.push(80000);
            console.log("you selected Razer keyboard  Products");
        break;
        case "2":
            selectedproducts.push("Logitech keyboard Products");
            cartPrices.push(45000);
            console.log("you selected Logitech keyboard Products");
        break;
        case "3":
            selectedproducts.push("HyperX keyboard Products");
            cartPrices.push(27000);
            console.log("you selected HyperX keyboard Products");
        break;
        case "4":
            selectedproducts.push("Redragon keyboard Products");
            cartPrices.push(16000);
            console.log("you selected Redragon keyboard Products");
        break;
        case "5":
            selectedproducts.push("Genesis Thor keyboard Products")
            cartPrices.push(20000);
            console.log("you selected Genesis Thor keyboard Products");
        break;
        default:
            console.log("invalid option");    
    }
        break;
    case "3":
    let brand3 = prompt(`
    Select a brand:
    1: Razer
    2: Logitech
    3: Logitech
    `)
    switch (brand3) {
        case "1":
            selectedproducts.push("Razer mouse Products");
            cartPrices.push(85000);
            console.log("you selected Razer mouse Products");
        break;
        case "2":
            selectedproducts.push("Logitech mouse Products");
            cartPrices.push(12000);
            console.log("you selected Logitech mouse Products");
        break;
        case "3":
            selectedproducts.push("Logitech mouse Products");
            cartPrices.push(44000);
            console.log("you selected Logitech mouse Products");
        break;
        default:
            console.log("invalid option");
    }
        break;
    case "4":
    let brand4 = prompt(`
    Select a brand:
    1: HyperX
    2: Logitech
    3: Cooler Master
    4: Genius
    5: Ugo Orizaba
    `)
    switch(brand4) {
        case "1":
            selectedproducts.push("HyperX mousepad Products");
            cartPrices.push(15000);
            console.log("you selected HyperX mousepad Products");
        break;
        case "2":
            selectedproducts.push("Logitech mousepad Products");
            cartPrices.push(18000);
            console.log("you selected Logitech mousepad Products");
        break;
        case "3":
            selectedproducts.push("Cooler Master mousepad Products");
            cartPrices.push(8000);
            console.log("you selected Cooler Master mousepad Products");
        break;
        case "4":
            selectedproducts.push("Genius mousepad Products");
            cartPrices.push(3000);
            console.log("you selected Genius mousepad Products");
        break;
        case "5":
            selectedproducts.push("Ugo Orizaba  mousepad Products");
            cartPrices.push(1500);
            console.log("you selected Ugo Orizaba mousepad Products");
        break;
        default:
            console.log("invalid option");
    }
        break;
    case "5":
    let brand5 = prompt(`
    Select a brand:
    1: Gigabyte Aero
    2: Gigabyte Aorus
    3: Asus Zenbook Duo
    4: Apple Macbook
    5: Lenovo
    6: Bangho
    `)
    switch(brand5) {
        case "1":
            selectedproducts.push("Gigabyte Aero notebook Products");
            cartPrices.push(1102499);
            console.log("you selected Gigabyte Aero notebook Products");
        break;
        case "2":
            selectedproducts.push("Gigabyte Aorus notebook Products");
            cartPrices.push(1047359);
            console.log("you selected Gigabyte Aorus notebook Products");
        break;
        case "3":
            selectedproducts.push("Asus notebook Products");
            cartPrices.push(970189);
            console.log("you selected Asus notebook Products");
        break;
        case "4":
            selectedproducts.push("Apple notebook Products");
            cartPrices.push(937109);
            console.log("you selected Apple notebook Products");
        break;
        case "5":
            selectedproducts.push("Lenovo notebook Products");
            cartPrices.push(762919);
            console.log("you selected Lenovo notebook Products");
        break;
        case "6":
            selectedproducts.push("Bangho notebook Products");
            cartPrices.push(363809);
            console.log("you selected Bangho notebook Products");
        default:
            console.log("invalid option");
    }
        break;
    case "6":
    let brand6 = prompt(`
    Select a brand:
    1: Razer
    2: Kairos Pro Ryzen 7
    3: Kairos Pro Ryzen 3
    4: Intel i5
    5: AMD
    6: Nvidia
    `)

    switch(brand6) {
        case "1":
            selectedproducts.push("Razer desktop Products");
            cartPrices.push(500000);
            console.log("you selected Razer desktop Products");
        break;
        case "2":
            selectedproducts.push("Kairos Pro Ryzen 7 desktop Products");
            cartPrices.push(630109);
            console.log("you selected Kairos Pro Ryzen 7 desktop Products");
        break;
        case "3":
            selectedproducts.push("Kairos Pro Ryzen 3 desktop Products");
            cartPrices.push(566729);
            console.log("you selected Kairos Pro Ryzen 3 desktop Products");
        break;
        case "4":
            selectedproducts.push("Intel i5 desktop Products");
            cartPrices.push(280139);
            console.log("you selected Intel i5 desktop Products");
        break;
        case "5":
            selectedproducts.push("AMD desktop Products");
            cartPrices.push(103079);
            console.log("you selected AMD desktop Products");
        break;
        case "6":
            selectedproducts.push("Nvidia desktop Products");
            cartPrices.push(1200000);
            console.log("you selected Nvidia desktop Products");
        break;
        default:
            console.log("invalid option");
    }
    break;




}
console.log(selectedproducts);
console.log(cartPrices);

//ciclos//

let ConfirmBrand = alert("product added successfully");

let payment = ("Credit Card")


do {
    payment = prompt("ingrese payment method").toLowerCase();
    console.log(payment);
}while(payment !== "credit card") 
    alert("great choice")
    payment++

//array y metodos//

const addProducts = ["Razer Enki Pro"];
const youMightLike = addProducts.map(gamingChair => {
    return gamingChair;
});


alert("You Might Like: " + youMightLike);

let productAdded = prompt(`
1:Yes
2:No

`)


//funciones//

function impuestos_y_envio(num1, num2) {
    const taxes = 450;
    const shipping = 1000;
    const subtotal = num1 + num2;
    const total = subtotal + taxes + shipping;
    return total; 
}

const subtotal = cartPrices.reduce((acc, price) => acc + price, 0);
const total = impuestos_y_envio(subtotal, 0);
console.log("Subtotal: ARS", subtotal);
console.log("Total (incluyendo impuestos y envío): ARS ", total);

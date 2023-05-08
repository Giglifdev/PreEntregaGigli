//welcome//
let welcome = prompt("Bienvenido a SuperTech, por favor ingresa tu nombre");
    console.log("Hola, " + welcome + "!");

//Store//
let StoreBrands = alert("seleccione el tipo de accesorio y acontinuacion se le mostrara una marca a elegir, siga los pasos.");



let Store = prompt(`
1: Audio
2: Keyboards
3: Mouse
4: Mousepads
5: Notebooks
6: Desktop
`)

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
            console.log("you selected Razer audio products");
        break;
        case "2":
            console.log("you selected HyperX audio products");
        break;
        case "3":
            console.log("you selected Logitech audio products");
        break;
        case "4":
            console.log("you selected Redragon audio products");
        break;
        case "5":
            console.log("you selected Samsung Galaxy audio products");
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
            console.log("you selected Razer keyboard  products");
        break;
        case "2":
            console.log("you selected Logitech keyboard products");
        break;
        case "3":
            console.log("you selected HyperX keyboard products");
        break;
        case "4":
            console.log("you selected Redragon keyboard products");
        break;
        case "5":
            console.log("you selected Genesis Thor keyboard products");
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
    3: HyperX
    `)
    switch (brand3) {
        case "1":
            console.log("you selected Razer mouse products");
        break;
        case "2":
            console.log("you selected Logitech mouse products");
        break;
        case "3":
            console.log("you selected HyperX mouse products");
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
            console.log("you selected HyperX mousepad products");
        break;
        case "2":
            console.log("you selected Logitech mousepad products");
        break;
        case "3":
            console.log("you selected Cooler Master mousepad products");
        break;
        case "4":
            console.log("you selected Genius mousepad products");
        break;
        case "5":
            console.log("you selected Ugo Orizaba mousepad products");
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
            console.log("you selected Gigabyte Aero notebook products");
        break;
        case "2":
            console.log("you selected Gigabyte Aorus notebook products");
        break;
        case "3":
            console.log("you selected Asus notebook products");
        break;
        case "4":
            console.log("you selected Apple notebook products");
        break;
        case "5":
            console.log("you selected Lenovo notebook products");
        break;
        case "6":
            console.log("you selected Bangho notebook products");
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
            console.log("you selected Razer desktop products");
        break;
        case "2":
            console.log("you selected Kairos Pro Ryzen 7 desktop products");
        break;
        case "3":
            console.log("you selected Kairos Pro Ryzen 3 desktop products");
        break;
        case "4":
            console.log("you selected Intel i5 desktop products");
        break;
        case "5":
            console.log("you selected AMD desktop products");
        break;
        case "6":
            console.log("you selected Nvidia desktop products");
        break;
        default:
            console.log("invalid option");
    }
    break;



    }


//ciclos//

let ConfirmBrand = alert("product added successfully");

let payment = "credit card"

do {
    payment = prompt("ingrese payment method");
    console.log(payment);
}while(payment != "credit card") {
    alert("great choice")
    payment++
}

//funciones//

function impuestos_y_envio(num1, num2) {
    const taxes = 450;
    const shipping = 1000;
    const subtotal = num1 + num2;
    const total = subtotal + taxes + shipping;
    return total;
}

const result = impuestos_y_envio(20000, 30000);
console.log(result + " " +  "total");


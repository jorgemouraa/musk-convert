
const button = document.querySelector("button");
const select2 = document.querySelector(".select2");
const select1 = document.querySelector(".select1");
const valueConvert = document.querySelector(".value1");
const valueConverted = document.querySelector(".value2");
const currency2 = document.getElementById("currency2");
const currencyImg = document.querySelector(".img-dolar");
const img1 = document.querySelector(".img1");

function changeImageSelect1() {
    const val = select1.value;
    let locale, currencyCode;

   
    if (val === "USD") { locale = "en-US"; currencyCode = "USD"; }
    else if (val === "EUR") { locale = "de-DE"; currencyCode = "EUR"; }
    else if (val === "BTC") { locale = "en-US"; currencyCode = "BTC"; }
    else { locale = "pt-BR"; currencyCode = "BRL"; }

    
    if (val === "USD") img1.src = "./img/eua.png";
    else if (val === "EUR") img1.src = "./img/euro.png";
    else if (val === "BTC") img1.src = "./img/bitcoin 1.png";
    else img1.src = "./img/brasil 2.png";

  
    const currencyText1 = document.querySelector(".currency1");
    currencyText1.innerHTML = val;

    const input = Number(document.querySelector("#valor").value) || 0;
    let valueInBRL;
    if (val === "USD") valueInBRL = input * 5.36;
    else if (val === "EUR") valueInBRL = input * 6.25;
    else if (val === "BTC") valueInBRL = input * 587.106;
    else valueInBRL = input;

    
    if (val === "BTC") {
        valueConvert.innerHTML = `₿ ${valueInBRL.toFixed(6)}`;
    } else {
        valueConvert.innerHTML = new Intl.NumberFormat(locale, {
            style: "currency",
            currency: currencyCode
        }).format(valueInBRL);
    }
}
select1.addEventListener("change", changeImageSelect1);






function convertValues() {
    const input = Number(document.querySelector("#valor").value);
    const from = select1.value;
    const to = select2.value;

    let valueInBRL;
    if (from === "USD") valueInBRL = input * 5.36;
    else if (from === "EUR") valueInBRL = input * 6.25;
    else if (from === "BTC") valueInBRL = input * 587.106;
    else valueInBRL = input;

    let converted;
    if (to === "USD") converted = valueInBRL / 5.36;
    else if (to === "EUR") converted = valueInBRL / 6.25;
    else if (to === "BTC") converted = valueInBRL / 587.106;
    else converted = valueInBRL;

    valueConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(input);

    if (to === "BTC") {
    valueConverted.innerHTML = `₿ ${converted.toFixed(6)}`;
    } else {
    valueConverted.innerHTML = new Intl.NumberFormat(
        to === "EUR" ? "de-DE" : "en-US",
        { style: "currency", currency: to }).format(converted);
}
}



function changeCurrency() {
    const val = select2.value;

    if (val === "USD") {
        currency2.innerHTML = "USD";
        currencyImg.src = "./img/eua.png";
    }
    else if (val === "EUR") {
        currency2.innerHTML = "EUR";
        currencyImg.src = "./img/euro.png";
    }
    else if (val === "BTC") {
        currency2.innerHTML = "BTC";
        currencyImg.src = "./img/bitcoin 1.png";
    }
    else if (val === "BRL") {
        currency2.innerHTML = "BRL";
        currencyImg.src = "./img/brasil 2.png";
    }
    convertValues();
}
select1.addEventListener("change", () => {
    changeImageSelect1(); 
});
select2.addEventListener("change", changeCurrency)
button.addEventListener("click", convertValues)







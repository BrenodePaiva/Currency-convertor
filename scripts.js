
const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelectConvert = document.querySelector(".currency-select-to-convert")
const inputValue = document.querySelector(".input-currency")

async function convertValues(){
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")




    const api = await fetch(`https://api.invertexto.com/v1/currency/${currencySelectConvert.value}_${currencySelect.value}?token=4323|r6lUONclT2hCiHbL076jN8wFKTpUOeP9
    `).then(response => response.json())
    console.log(api)
    

    
    // Converter de Real para ...
    if (currencySelectConvert.value == "BRL"){

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue.value)
    
        
        if(currencySelect.value == "USD") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputValue.value * api.BRL_USD.price)
        }

        else if (currencySelect.value == "EUR") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputValue.value * api.BRL_EUR.price)
        }


        else if(currencySelect.value == "GBP"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-RU", {
                style: "currency",
                currency: "GBP"
            }).format(inputValue.value * api.BRL_GBP.price)  
        }

        else{
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputValue.value)
        }
    }

    // Converte de Dolar para ...
    else if (currencySelectConvert.value == "USD") {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue.value)
    

        if(currencySelect.value == "USD") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputValue.value)
        }

        else if (currencySelect.value == "EUR") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputValue.value * api.USD_EUR.price)
        }

        else if(currencySelect.value == "GBP"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-RU", {
                style: "currency",
                currency: "GBP"
            }).format(inputValue.value * api.USD_GBP.price)    
        }

        else{
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputValue.value * api.USD_BRL.price)
        }
    }

    // Converte de Euro para ...
    else if (currencySelectConvert.value == "EUR") {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue.value)
    

        if(currencySelect.value == "USD") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputValue.value / api.EUR_USD.price)
        }

        else if (currencySelect.value == "EUR") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputValue.value)
        }

        else if(currencySelect.value == "GBP"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-RU", {
                style: "currency",
                currency: "GBP"
            }).format(inputValue.value * api.EUR_GBP.price)    
        }

        else{
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputValue.value * api.EUR_BRL.price)
        }
    }

    // Converte de Libra para ...
    else if (currencySelectConvert.value == "GBP") {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UR", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue.value)
    

        if(currencySelect.value == "USD") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputValue.value / api.GBP_USD.price)
        }

        else if (currencySelect.value == "EUR") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputValue.value / api.GBP_EUR.price)
        }

        else if(currencySelect.value == "GBP"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-RU", {
                style: "currency",
                currency: "GBP"
            }).format(inputValue.value)    
        }

        else{
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputValue.value * api.GBP_BRL.price)
        }
    }
}

// Converter de ...(mudar imagem e Texto da moeda)
function changeCurrencyConvert(){
    const currencyNameConvert = document.querySelector("#currency-name-to-convert")
    const currencyImgConvert = document.querySelector(".currency-img-to-convert")

    if (currencySelectConvert.value == "USD") {
        currencyImgConvert.src = "./assets/dolar.png"
        currencyNameConvert.innerHTML = "Dólar"
    }

    else if (currencySelectConvert.value == "EUR") {
        currencyImgConvert.src = "./assets/euro.png"
        currencyNameConvert.innerHTML = "Euro"
        
    }


    else if (currencySelectConvert.value == "GBP") {
        currencyImgConvert.src = "./assets/libra.png"
        currencyNameConvert.innerHTML = "Libra"
    }

    else{
        currencyImgConvert.src = "./assets/real.png"
        currencyNameConvert.innerHTML = "Real"
    }

    convertValues()
}

// Converter para ...(mudar imagem e Texto da moeda)
function changeCurrency(){
    const currencyName = document.querySelector("#currency-name")
    const currencyImg = document.querySelector(".currency-img")

    if (currencySelect.value == "USD") {
        currencyImg.src = "./assets/dolar.png"
        currencyName.innerHTML = "Dólar"
    }

    else if (currencySelect.value == "EUR") {
        currencyImg.src = "./assets/euro.png"
        currencyName.innerHTML = "Euro"
        
    }

    else if (currencySelect.value == "GBP") {
        currencyImg.src = "./assets/libra.png"
        currencyName.innerHTML = "Libra"
    }

    else{
        currencyImg.src = "./assets/real.png"
        currencyName.innerHTML = "Real"
    }

    convertValues()
}


currencySelectConvert.addEventListener("change", changeCurrencyConvert)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)

const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelectConvert = document.querySelector(".currency-select-to-convert")
const inputValue = document.querySelector(".input-currency")


function convertValues(){
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    // Converter de Real para ...
    if (currencySelectConvert.value == "real"){

        const dolarToday = 4.75
        const euroToday = 6.2
        const bitcoinToday = 138715.91
        const libraToday = 6.12

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue.value)
    
        
        if(currencySelect.value == "dolar") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputValue.value / dolarToday)
        }

        else if (currencySelect.value == "euro") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputValue.value / euroToday)
        }

        else if(currencySelect.value == "bitcoin"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "BTC"
            }).format(inputValue.value / bitcoinToday)
        }

        else if(currencySelect.value == "libra"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-RU", {
                style: "currency",
                currency: "GBP"
            }).format(inputValue.value / libraToday)  
        }

        else{
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputValue.value)
        }
    }

    // Converte de Dolar para ...
    else if (currencySelectConvert.value == "dolar") {
        
        const realToday = 4.75
        const euroToday = 1.11
        const bitcoinToday = 29243.40
        const libraToday = 1.29


        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue.value)
    

        if(currencySelect.value == "dolar") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputValue.value)
        }

        else if (currencySelect.value == "euro") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputValue.value / euroToday)
        }

        else if(currencySelect.value == "bitcoin"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "BTC"
            }).format(inputValue.value / bitcoinToday)
        }

        else if(currencySelect.value == "libra"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-RU", {
                style: "currency",
                currency: "GBP"
            }).format(inputValue.value / libraToday)    
        }

        else{
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputValue.value * realToday)
        }
    }

    // Converte de Euro para ...
    else if (currencySelectConvert.value == "euro") {
        
        const realToday = 5.24
        const euroToday = 1.11
        const bitcoinToday = 26448.42
        const libraToday = 1.17


        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue.value)
    

        if(currencySelect.value == "dolar") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputValue.value * euroToday)
        }

        else if (currencySelect.value == "euro") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputValue.value)
        }

        else if(currencySelect.value == "bitcoin"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "BTC"
            }).format(inputValue.value / bitcoinToday)
        }

        else if(currencySelect.value == "libra"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-RU", {
                style: "currency",
                currency: "GBP"
            }).format(inputValue.value * libraToday)    
        }

        else{
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputValue.value * realToday)
        }
    }

    // Converte de Bitcoin para ...
    else if (currencySelectConvert.value == "bitcoin") {
        
        const realToday = 138451.63
        const euroToday = 26400.98
        const dolarToday = 29243.40
        const libraToday = 22613.30


        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputValue.value)
    

        if(currencySelect.value == "dolar") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputValue.value * dolarToday)
        }

        else if (currencySelect.value == "euro") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputValue.value * euroToday)
        }

        else if(currencySelect.value == "bitcoin"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "BTC"
            }).format(inputValue.value)
        }

        else if(currencySelect.value == "libra"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-RU", {
                style: "currency",
                currency: "GBP"
            }).format(inputValue.value * libraToday)    
        }

        else{
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputValue.value * realToday)
        }
    }

    // Converte de Libra para ...
    else if (currencySelectConvert.value == "libra") {
        
        const realToday = 6.12
        const euroToday = 1.17
        const dolarToday = 1.29
        const bitcoinToday = 22613.30


        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UR", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue.value)
    

        if(currencySelect.value == "dolar") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputValue.value * dolarToday)
        }

        else if (currencySelect.value == "euro") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputValue.value * euroToday)
        }

        else if(currencySelect.value == "bitcoin"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "BTC"
            }).format(inputValue.value / bitcoinToday)
        }

        else if(currencySelect.value == "libra"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-RU", {
                style: "currency",
                currency: "GBP"
            }).format(inputValue.value)    
        }

        else{
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputValue.value * realToday)
        }
    }
}

// Converter de ...(mudar imagem e Texto da moeda)
function changeCurrencyConvert(){
    const currencyNameConvert = document.querySelector("#currency-name-to-convert")
    const currencyImgConvert = document.querySelector(".currency-img-to-convert")

    if (currencySelectConvert.value == "dolar") {
        currencyImgConvert.src = "./assets/dolar.png"
        currencyNameConvert.innerHTML = "Dólar"
    }

    else if (currencySelectConvert.value == "euro") {
        currencyImgConvert.src = "./assets/euro.png"
        currencyNameConvert.innerHTML = "Euro"
        
    }

    else if (currencySelectConvert.value == "bitcoin") {
        currencyImgConvert.src = "./assets/bitcoin.png"
        currencyNameConvert.innerHTML = "Bitcoin"
    }

    else if (currencySelectConvert.value == "libra") {
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

    if (currencySelect.value == "dolar") {
        currencyImg.src = "./assets/dolar.png"
        currencyName.innerHTML = "Dólar"
    }

    else if (currencySelect.value == "euro") {
        currencyImg.src = "./assets/euro.png"
        currencyName.innerHTML = "Euro"
        
    }

    else if (currencySelect.value == "bitcoin") {
        currencyImg.src = "./assets/bitcoin.png"
        currencyName.innerHTML = "Bitcoin"
    }

    else if (currencySelect.value == "libra") {
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
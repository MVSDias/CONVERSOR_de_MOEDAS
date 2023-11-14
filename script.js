
 // new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number);


const convertButton = document.querySelector(".convert-button") //trás as informações do button p o js

const currencySelect = document.querySelector(".currency-select") // trás a informação de qual "currency" (moeda) foi selecionada


const currencySelect2 = document.querySelector(".currency-select2") // trás a informação de qual "currency" (moeda) foi selecionada


convertButton.addEventListener("click", convertValues)

// const convertValues = async ()=>{}

async function convertValues() {


  const inputCurrencyValue = document.querySelector(".input-currency").value // estou pegando especificamente o valor dentro do input

  const currencyValueToConvert = document.querySelector(
    ".currency-value-to-convert"
  ) //busca o valor a ser convertido e guarda na constante (currencyValueToConvert)
  const currencyValueConverted = document.querySelector(
    ".currency-value-converted"
  ) //guarda o valor convertido na constante (currencyValueConverted)

  const data = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL').then(response => response.json())//com o fetch consigo "consumir" a api moedas, e retornar para minha const data em formato json. O await faz o js "esperar" a requisição terminar, para depois continuar o codigo.
  console.log(data)

  const dolarToday = data.USDBRL.high
  const euroToday = data.EURBRL.high
  const poundSterlingToday = data.GBPBRL.high
  const bitcoinToday = data.BTCBRL.high

  const currencyIn = document.querySelector(".currency-in")// mapeio o elemento de moeda a converter

  const currencyLogoIn = document.querySelector(".currency-logo-in") //mapeando elemento troca de logo de moeda a converter

  const currencyOut = document.getElementById("currency-out") //elemento de troca de moeda p converter mapeado

  const currencyLogoOut = document.querySelector(".currency-logo-out")//mapeando elemento troca de logo


//SELECIONADO REAL COMO MOEDA A SER CONVERTIDA

  if (currencySelect.value == "real") {
       
    
        currencyIn.innerHTML = "Real"
        currencyLogoIn.src = "./images/Brasil-logo.png"
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
          }).format(inputCurrencyValue)


        if (currencySelect2.value == "real") {//SELECIONA PARA QUAL MOEDA SERÁ CONVERTIDA
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
            }).format(inputCurrencyValue * 1)

            currencyOut.innerHTML = "Real"
            currencyLogoOut.src = "./images/Brasil-logo.png"
        } // converte e formata a apresentação, troca a logo e o nome da moeda


        if (currencySelect2.value == "dolar") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("En-US", {
            style: "currency",
            currency: "USD",
            }).format(inputCurrencyValue / dolarToday)

            currencyOut.innerHTML = "Dolar Americano"
            currencyLogoOut.src = "./images/EUA-logo.png"
        }


        if (currencySelect2.value == "euro") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
            }).format(inputCurrencyValue / euroToday)

            currencyOut.innerHTML = "€ Euro"
            currencyLogoOut.src = "./images/euro-logo.png"
        } 

        if (currencySelect2.value == "libra") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP",
            }).format(inputCurrencyValue / poundSterlingToday)
            
            currencyOut.innerHTML = "£ Pounds"
            currencyLogoOut.src = "./images/libra-logo.png"
        }

        if (currencySelect2.value == "bitcoin") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("Mundo", {
            style: "currency",
            currency: "BTC",
            maximumSignificantDigits: 7//coloca numero de casas decimais
            }).format(inputCurrencyValue / bitcoinToday)

            currencyOut.innerHTML = "₿ Bitcoin"
            currencyLogoOut.src = "./images/bitcoin-logo.png"
        }

  }

//SELECIONADO DOLAR COMO MOEDA A SER CONVERTIDA

  if (currencySelect.value == "dolar") {


        currencyIn.innerHTML = "Dolar Americano"
        currencyLogoIn.src = "./images/EUA-logo.png"
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("En-US", {
          style: "currency",
          currency: "USD",
          }).format(inputCurrencyValue)


        if (currencySelect2.value == "real") {//SELECIONA PARA QUAL MOEDA SERÁ CONVERTIDA
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
            }).format(inputCurrencyValue * dolarToday)

            currencyOut.innerHTML = "Real"
            currencyLogoOut.src = "./images/Brasil-logo.png"
        } // converte e formata a apresentação, troca a logo e o nome da moeda


        if (currencySelect2.value == "dolar") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("En-US", {
            style: "currency",
            currency: "USD",
            }).format(inputCurrencyValue * 1)

            currencyOut.innerHTML = "Dolar Americano"
            currencyLogoOut.src = "./images/EUA-logo.png"
        } 


        if (currencySelect2.value == "euro") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
            }).format(inputCurrencyValue * 0.92)

            currencyOut.innerHTML = "€ Euro"
            currencyLogoOut.src = "./images/euro-logo.png"
        } 


        if (currencySelect2.value == "libra") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP",
            }).format(inputCurrencyValue * 0.79)

            currencyOut.innerHTML = "£ Pounds"
            currencyLogoOut.src = "./images/libra-logo.png"
        } 


        if (currencySelect2.value == "bitcoin") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("Mundo", {
            style: "currency",
            currency: "BTC",
            maximumSignificantDigits: 7 //coloca numero de casas decimais
            }).format(inputCurrencyValue * 0.000038)

            currencyOut.innerHTML = "₿ Bitcoin"
            currencyLogoOut.src = "./images/bitcoin-logo.png"
        }

    // currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    //   style: "currency",
    //   currency: "BRL",
    // }).format(inputCurrencyValue)
    // // ferramenta interna do Js que permite formatar o valor na moeda corrente escolhida

  }

//SELECIONADO EURO COMO MOEDA A SER CONVERTIDA

  if (currencySelect.value == "euro") {


        currencyIn.innerHTML = "€ Euro"
        currencyLogoIn.src = "./images/euro-logo.png"
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
          style: "currency",
          currency: "EUR",
          }).format(inputCurrencyValue)

        if (currencySelect2.value == "real") {//SELECIONA PARA QUAL MOEDA SERÁ CONVERTIDA
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
            }).format(inputCurrencyValue * euroToday)

            currencyOut.innerHTML = "Real"
            currencyLogoOut.src = "./images/Brasil-logo.png"
        } // converte e formata a apresentação, troca a logo e o nome da moeda


        if (currencySelect2.value == "dolar") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("En-US", {
            style: "currency",
            currency: "USD",
            }).format(inputCurrencyValue * 1.09)

            currencyOut.innerHTML = "Dolar Americano"
            currencyLogoOut.src = "./images/EUA-logo.png"
        }


        if (currencySelect2.value == "euro") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
            }).format(inputCurrencyValue * 1)

            currencyOut.innerHTML = "€ Euro"
            currencyLogoOut.src = "./images/euro-logo.png"
        }

    
        if (currencySelect2.value == "libra") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP",
            }).format(inputCurrencyValue * 0.85)

            currencyOut.innerHTML = "£ Pounds"
            currencyLogoOut.src = "./images/libra-logo.png"
        }

       

        if (currencySelect2.value == "bitcoin") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("Mundo", {
            style: "currency",
            currency: "BTC",
            maximumSignificantDigits: 7 //coloca numero de casas decimais
            }).format(inputCurrencyValue * 0.000041)

            currencyOut.innerHTML = "₿ Bitcoin"
            currencyLogoOut.src = "./images/bitcoin-logo.png"
        }



      }

//SELECIONADA LIBRA COMO MOEDA A SER CONVERTIDA

  if (currencySelect.value == "libra") {


        currencyIn.innerHTML = "£ Pounds"
        currencyLogoIn.src = "./images/libra-logo.png"
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
          style: "currency",
          currency: "GBP",
          }).format(inputCurrencyValue)

        if (currencySelect2.value == "real") {//SELECIONA PARA QUAL MOEDA SERÁ CONVERTIDA
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
            }).format(inputCurrencyValue * poundSterlingToday)

            currencyOut.innerHTML = "Real"
            currencyLogoOut.src = "./images/Brasil-logo.png"
        } //converte e formata a apresentação, troca a logo e o nome da moeda


        if (currencySelect2.value == "dolar") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("En-US", {
            style: "currency",
            currency: "USD", 
            }).format(inputCurrencyValue * 1.27)

            currencyOut.innerHTML = "Dolar Americano"
            currencyLogoOut.src = "./images/EUA-logo.png"
        }


        if (currencySelect2.value == "euro") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
            }).format(inputCurrencyValue * 1.17)

            currencyOut.innerHTML = "€ Euro"
            currencyLogoOut.src = "./images/euro-logo.png"
        }


        if (currencySelect2.value == "libra") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP",
            }).format(inputCurrencyValue * 1)

            currencyIn.innerHTML = "£ Pounds"
            currencyLogoIn.src = "./images/libra-logo.png"
        }

        
        if (currencySelect2.value == "bitcoin") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("Mundo", {
            style: "currency",
            currency: "BTC",
            maximumSignificantDigits: 7 //coloca numero de casas decimais
            }).format(inputCurrencyValue * 0.000048)

            currencyOut.innerHTML = "₿ Bitcoin"
            currencyLogoOut.src = "./images/bitcoin-logo.png"
        }



  }


//SELECIONADO BITCOIN COMO MOEDA A SER CONVERTIDA

  if (currencySelect.value == "bitcoin") {//selecionado btc como moeda a ser convertida


        currencyIn.innerHTML = "₿ Bitcoin"
        currencyLogoIn.src = "./images/bitcoin-logo.png"
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("Mundo", {
          style: "currency",
          currency: "BTC",
          }).format(inputCurrencyValue)

        if (currencySelect2.value == "real") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
            minimumSignificantDigits: 8//coloca numero de casas decimais
            }).format(inputCurrencyValue * bitcoinToday)

            currencyOut.innerHTML = "Real"
            currencyLogoOut.src = "./images/Brasil-logo.png"
        } //converte e formata a apresentação, troca a logo e o nome da moeda



        if (currencySelect2.value == "dolar") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("En-US", {
            style: "currency",
            currency: "USD",
            minimumSignificantDigits: 6//coloca numero de casas decimais
            }).format(inputCurrencyValue * 36874.70)

            currencyOut.innerHTML = "Dolar Americano"
            currencyLogoOut.src = "./images/EUA-logo.png"
        }


        if (currencySelect2.value == "euro") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR", 
            minimumSignificantDigits: 6//coloca numero de casas decimais
            }).format(inputCurrencyValue * 34545.51)

            currencyOut.innerHTML = "€ Euro"
            currencyLogoOut.src = "./images/euro-logo.png"
        }


        if (currencySelect2.value == "libra") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP",
            minimumSignificantDigits: 6//coloca numero de casas decimais
            }).format(inputCurrencyValue * 30131.05)

            currencyIn.innerHTML = "£ Pounds"
            currencyLogoIn.src = "./images/libra-logo.png"
        }

        
        if (currencySelect2.value == "bitcoin") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("Mundo", {
            style: "currency",
            currency: "BTC",
            maximumSignificantDigits: 7 //coloca numero de casas decimais
            }).format(inputCurrencyValue * 1)

            currencyOut.innerHTML = "₿ Bitcoin"
            currencyLogoOut.src = "./images/bitcoin-logo.png"
        }



  }
 


}//fechamento da function  
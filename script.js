
 // new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number);


const convertButton = document.querySelector(".convert-button") //trás as informações do button p o js

const currencySelect = document.querySelector(".currency-select") // trás a informação de qual "currency" (moeda) foi selecionada


const currencySelect2 = document.querySelector(".currency-select2") // trás a informação de qual "currency" (moeda) foi selecionada


convertButton.addEventListener("click", convertValues)



function convertValues() {


  const inputCurrencyValue = document.querySelector(".input-currency").value // estou pegando especificamente o valor dentro do input

  const currencyValueToConvert = document.querySelector(
    ".currency-value-to-convert"
  ) //busca o valor a ser convertido e guarda na constante (currencyValueToConvert)
  const currencyValueConverted = document.querySelector(
    ".currency-value-converted"
  ) //guarda o valor convertido na constante (currencyValueConverted)

  const dolarToday = 5.0
  const euroToday = 5.4
  const poundSterlingToday = 6.34
  const bitcoinToday = 132726.14

  const currencyIn = document.querySelector(".currency-in")// mapeio o elemento de moeda a converter

  const currencyLogoIn = document.querySelector(".currency-logo-in") //mapeando elemento troca de logo de moeda a converter

  const currencyOut = document.getElementById("currency-out") //elemento de troca de moeda p converter mapeado

  const currencyLogoOut = document.querySelector(".currency-logo-out")//mapeando elemento troca de logo


//SELECIONADO REAL COMO MOEDA A SER CONVERTIDA

  if (currencySelect.value == "real") {
       
    
        currencyIn.innerHTML = "Real"
        currencyLogoIn.src = "./Brasil-logo.png"
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
            currencyLogoOut.src = "./Brasil-logo.png"
        } // converte e formata a apresentação, troca a logo e o nome da moeda


        if (currencySelect2.value == "dolar") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("En-US", {
            style: "currency",
            currency: "USD",
            }).format(inputCurrencyValue / dolarToday)

            currencyOut.innerHTML = "Dolar Americano"
            currencyLogoOut.src = "./EUA-logo.png"
        }


        if (currencySelect2.value == "euro") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
            }).format(inputCurrencyValue / euroToday)

            currencyOut.innerHTML = "€ Euro"
            currencyLogoOut.src = "./euro-logo.png"
        } 

        if (currencySelect2.value == "libra") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP",
            }).format(inputCurrencyValue / poundSterlingToday)
            
            currencyOut.innerHTML = "£ Pounds"
            currencyLogoOut.src = "./libra-logo.png"
        }

        if (currencySelect2.value == "bitcoin") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("Mundo", {
            style: "currency",
            currency: "BTC",
            maximumSignificantDigits: 7//coloca numero de casas decimais
            }).format(inputCurrencyValue / bitcoinToday)

            currencyOut.innerHTML = "₿ Bitcoin"
            currencyLogoOut.src = "./bitcoin-logo.png"
        }

  }

//SELECIONADO DOLAR COMO MOEDA A SER CONVERTIDA

  if (currencySelect.value == "dolar") {


        currencyIn.innerHTML = "Dolar Americano"
        currencyLogoIn.src = "./EUA-logo.png"
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
            currencyLogoOut.src = "./Brasil-logo.png"
        } // converte e formata a apresentação, troca a logo e o nome da moeda


        if (currencySelect2.value == "dolar") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("En-US", {
            style: "currency",
            currency: "USD",
            }).format(inputCurrencyValue * 1)

            currencyOut.innerHTML = "Dolar Americano"
            currencyLogoOut.src = "./EUA-logo.png"
        } 


        if (currencySelect2.value == "euro") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
            }).format(inputCurrencyValue * 0.92)

            currencyOut.innerHTML = "€ Euro"
            currencyLogoOut.src = "./euro-logo.png"
        } 


        if (currencySelect2.value == "libra") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP",
            }).format(inputCurrencyValue * 0.79)

            currencyOut.innerHTML = "£ Pounds"
            currencyLogoOut.src = "./libra-logo.png"
        } 


        if (currencySelect2.value == "bitcoin") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("Mundo", {
            style: "currency",
            currency: "BTC",
            maximumSignificantDigits: 7 //coloca numero de casas decimais
            }).format(inputCurrencyValue * 0.000038)

            currencyOut.innerHTML = "₿ Bitcoin"
            currencyLogoOut.src = "./bitcoin-logo.png"
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
        currencyLogoIn.src = "./euro-logo.png"
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
            currencyLogoOut.src = "./Brasil-logo.png"
        } // converte e formata a apresentação, troca a logo e o nome da moeda


        if (currencySelect2.value == "dolar") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("En-US", {
            style: "currency",
            currency: "USD",
            }).format(inputCurrencyValue * 1.09)

            currencyOut.innerHTML = "Dolar Americano"
            currencyLogoOut.src = "./EUA-logo.png"
        }


        if (currencySelect2.value == "euro") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
            }).format(inputCurrencyValue * 1)

            currencyOut.innerHTML = "€ Euro"
            currencyLogoOut.src = "./euro-logo.png"
        }

    
        if (currencySelect2.value == "libra") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP",
            }).format(inputCurrencyValue * 0.85)

            currencyOut.innerHTML = "£ Pounds"
            currencyLogoOut.src = "./libra-logo.png"
        }

       

        if (currencySelect2.value == "bitcoin") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("Mundo", {
            style: "currency",
            currency: "BTC",
            maximumSignificantDigits: 7 //coloca numero de casas decimais
            }).format(inputCurrencyValue * 0.000041)

            currencyOut.innerHTML = "₿ Bitcoin"
            currencyLogoOut.src = "./bitcoin-logo.png"
        }



      }

//SELECIONADA LIBRA COMO MOEDA A SER CONVERTIDA

  if (currencySelect.value == "libra") {


        currencyIn.innerHTML = "£ Pounds"
        currencyLogoIn.src = "./libra-logo.png"
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
            currencyLogoOut.src = "./Brasil-logo.png"
        } //converte e formata a apresentação, troca a logo e o nome da moeda


        if (currencySelect2.value == "dolar") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("En-US", {
            style: "currency",
            currency: "USD", 
            }).format(inputCurrencyValue * 1.27)

            currencyOut.innerHTML = "Dolar Americano"
            currencyLogoOut.src = "./EUA-logo.png"
        }


        if (currencySelect2.value == "euro") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
            }).format(inputCurrencyValue * 1.17)

            currencyOut.innerHTML = "€ Euro"
            currencyLogoOut.src = "./euro-logo.png"
        }


        if (currencySelect2.value == "libra") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP",
            }).format(inputCurrencyValue * 1)

            currencyIn.innerHTML = "£ Pounds"
            currencyLogoIn.src = "./libra-logo.png"
        }

        
        if (currencySelect2.value == "bitcoin") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("Mundo", {
            style: "currency",
            currency: "BTC",
            maximumSignificantDigits: 7 //coloca numero de casas decimais
            }).format(inputCurrencyValue * 0.000048)

            currencyOut.innerHTML = "₿ Bitcoin"
            currencyLogoOut.src = "./bitcoin-logo.png"
        }



  }


//SELECIONADO BITCOIN COMO MOEDA A SER CONVERTIDA

  if (currencySelect.value == "bitcoin") {//selecionado btc como moeda a ser convertida


        currencyIn.innerHTML = "₿ Bitcoin"
        currencyLogoIn.src = "./bitcoin-logo.png"
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("Mundo", {
          style: "currency",
          currency: "BTC",
          }).format(inputCurrencyValue)

        if (currencySelect2.value == "real") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
            minimumSignificantDigits: 6//coloca numero de casas decimais
            }).format(inputCurrencyValue * bitcoinToday)

            currencyOut.innerHTML = "Real"
            currencyLogoOut.src = "./Brasil-logo.png"
        } //converte e formata a apresentação, troca a logo e o nome da moeda



        if (currencySelect2.value == "dolar") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("En-US", {
            style: "currency",
            currency: "USD",
            minimumSignificantDigits: 6//coloca numero de casas decimais
            }).format(inputCurrencyValue * 1.27)

            currencyOut.innerHTML = "Dolar Americano"
            currencyLogoOut.src = "./EUA-logo.png"
        }


        if (currencySelect2.value == "euro") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR", 
            minimumSignificantDigits: 6//coloca numero de casas decimais
            }).format(inputCurrencyValue * 1.17)

            currencyOut.innerHTML = "€ Euro"
            currencyLogoOut.src = "./euro-logo.png"
        }


        if (currencySelect2.value == "libra") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP",
            minimumSignificantDigits: 6//coloca numero de casas decimais
            }).format(inputCurrencyValue * 0.000048)

            currencyIn.innerHTML = "£ Pounds"
            currencyLogoIn.src = "./libra-logo.png"
        }

        
        if (currencySelect2.value == "bitcoin") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("Mundo", {
            style: "currency",
            currency: "BTC",
            maximumSignificantDigits: 7 //coloca numero de casas decimais
            }).format(inputCurrencyValue * 1)

            currencyOut.innerHTML = "₿ Bitcoin"
            currencyLogoOut.src = "./bitcoin-logo.png"
        }



  }
 


}//fechamento da function  
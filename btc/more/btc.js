window.onload = () => 
    {
        var bpi = {}
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
          .then(res => res.json())
          .then(data =>{
              bpi = data.bpi
              console.log(bpi)
              const currencies = Object.keys(bpi)
              console.log(currencies)
              document.getElementById('info').innerHTML = '<ul>' + currencies.map(currency => "<li>"+bpi[currency].rate_float+" "+bpi[currency].symbol+"</li>").join('') + '</ul>'
              document.getElementById('disc').innerHTML = data.disclaimer
          })
    document.getElementById('trac').addEventListener("click",traduce)

}



var traduced = false

function traduce(){
    var txt = ['Estos datos se produjeron a partir del &Iacute;ndice de Precios de Bitcoin CoinDesk (USD). Los datos de las monedas que no son USD se han convertido utilizando la tasa de conversi&oacute;n horaria de openexchangersates.org',
    'This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org']
    if(traduced){
        document.getElementById('disc').innerHTML = txt[1]
        document.getElementById('trac').innerHTML = 'Traducir'
        traduced = false
    }else{
    document.getElementById('disc').innerHTML = txt[0]
    document.getElementById('trac').innerHTML = 'Ver Original'
    traduced = true
    }
}

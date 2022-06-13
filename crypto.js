const subm = document.getElementById('subm');
const currin = document.getElementById('cin')
const fromunit = document.getElementById('from');
const op = document.getElementById('opbtn');
const to=document.getElementById('to');

subm.addEventListener('click', () => {
    const v = currin.value;
    console.log(v);
    const base = 'http://api.coinlayer.com/api/live?access_key=a1d1670595924a8aa3cdf79bcaae8722';
    const api = "https://api.exchangerate-api.com/v4/latest/USD";
    fetch(base).then(response => response.json()).then(data =>
    {
        console.log(data);
        if (v >= 0) 
        {
            if (fromunit.value == "BTC")
            {
                const {BTC}=data.rates;
                var opvalue = BTC * v;
            }
            if (fromunit.value == 'ETH') 
            {
                const {ETH}=data.rates;
                var opvalue = ETH * v;
            }
            if (fromunit.value == 'DOGE') 
            {
                const {DOGE}=data.rates;
                var opvalue = DOGE * v;
            }
            op.value=(opvalue).toFixed(2);
            if(to.value== 'INR')
            {
                fetch(api).then(currency => currency.json()).then(result =>
                {
                    console.log(result);
                    const {INR}=result.rates;
                    const tgt= INR * opvalue;
                    op.value=(tgt).toFixed(2);;
                });
            }
            if(to.value== 'EUR')
            {
                fetch(api).then(currency => currency.json()).then(result =>
                {
                    console.log(result);
                    const {EUR}=result.rates;
                    const tgt= EUR * opvalue;
                    op.value=(tgt).toFixed(2);;
                });
            }
            console.log(op.value);
            console.log(op.innerText);
        }
        else {
            op.innerText = "enter positive number";
        }
    });
});


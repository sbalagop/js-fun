/* globals console */
/* jshint esversion: 6*/
(function () {
    'use strict';

    var  getTopGainers = () => {
        return fetch('https://api.iextrading.com/1.0/stock/market/list/gainers')
            .then(response => response.json())
            .then(data => {
                let symbols = data.map(item => item.symbol);
                return Promise.resolve(symbols);
            });
    }

    var getTopGainersStats = () => {
        return getTopGainers().then(symbols => {
            const statsPromises = [];
            symbols.forEach(symbol => {
                let statsPromise = fetch(`https://api.iextrading.com/1.0/stock/${symbol}/stats`).then(response => response.json());
                statsPromises.push(statsPromise);
            });
            return Promise.all(statsPromises);
        });
    }

    getTopGainersStats().then(allStats => {
        console.log(allStats);
    });


})();
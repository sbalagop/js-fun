/* globals console */
/* jshint esversion: 6*/
(function () {
    'use strict';
    var myPromiseAll = (promises) => {

        return new Promise((resolve, reject) => {
            let responses = [];

            promises.forEach(promise => {
                promise
                .then((response) => {
                    responses.push(response);
                    if (responses.length === promises.length) {
                        resolve(responses);
                    }
                }).catch((error) => {
                    reject(error);
                });
            });
        });

    };

    let p1 = new Promise( (resolve, reject) => setTimeout(resolve, 5000, 'p1.5000'));
    let p2 = new Promise( (resolve, reject) => setTimeout(resolve, 1000, 'p2.1000'));
    let p3 = new Promise( (resolve, reject) => setTimeout(resolve, 3000, 'p3.3000'));

    myPromiseAll([p1, p2, p3]).then((values) => console.log(values));

})();
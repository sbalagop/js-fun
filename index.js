/* jshint esversion: 6 */
(function () {
    'use strict';
    let container = document.querySelector('.container');
    if (container) {
        addEventListener('click', (event) => {
            if (event.target.tagName.toUpperCase() === 'BUTTON') {
                let page = event.target.dataset.page;
                window.location = page;
            }
        });
    }

})();
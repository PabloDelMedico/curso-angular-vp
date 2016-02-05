var app = angular.module('gemStore', []);

var gems = [{
    name: 'Azurite',
    price: 2.95
}, {
    name: 'Bloodstone',
    price: 5.95
}, {
    name: 'Zircon',
    price: 3.95
},];

app.controller('StoreController', function($log) {
    this.gems = gems;
    this.purchase = function(gem) {
        $log.warn('Purchase function not implemented yet. ' + gem.name);
    };
});

var app = angular.module('gemStore', []);

var gem = { name: 'Azurite', price: 2.95 };

app.controller('StoreController', function() {
    this.gem = gem;
});

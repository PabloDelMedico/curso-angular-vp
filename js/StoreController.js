(function () {
    angular
        .module('gemStore')
        .controller('StoreController', StoreController);

    function StoreController($log, productSvc) {
        var vm = this;
        vm.gems = [];
        vm.purchase = function (gem) {
            $log.warn('Purchase function not implemented yet. ' + gem.name);
        };

        fillProducts();

        function fillProducts() {
            productSvc.findAll().then(function (products) {
                vm.gems = products;
            });
        }
    }
})();

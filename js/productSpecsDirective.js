(function () {
    angular
        .module('gemStore')
        .directive('productSpecs', productSpecs);

    function productSpecs() {
        return {
            templateUrl: 'specs.html',
            restrict: 'A'
        };
    }
})();

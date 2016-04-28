(function () {
    angular
        .module('gemStore')
        .directive('productSpecs', productSpecs);

    function productSpecs() {
        return {
            templateUrl: 'app/directives/specs/specs.html',
            restrict: 'A'
        };
    }
})();

(function () {
    angular
        .module('gemStore')
        .directive('productDescription', productDescription);

    function productDescription() {
        return {
            templateUrl: 'desc.html'
        };
    }
})();

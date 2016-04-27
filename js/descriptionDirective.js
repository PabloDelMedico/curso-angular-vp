(function () {
    angular
        .module('gemStore')
        .directive('description', description);

    function description() {
        return {
            templateUrl: 'desc.html',
            transclude: true
        };
    }
})();

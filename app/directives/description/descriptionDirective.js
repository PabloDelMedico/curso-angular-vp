(function () {
    angular
        .module('gemStore')
        .directive('description', description);

    function description() {
        return {
            templateUrl: 'app/directives/description/desc.html',
            transclude: true
        };
    }
})();

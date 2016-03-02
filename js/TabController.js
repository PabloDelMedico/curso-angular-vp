(function () {
    angular
        .module('gemStore')
        .controller('TabController', TabController)
        .directive('productDescription', productDescription)
        .directive('productSpecs', productSpecs)
        .directive('productReviews', productReviews);

    function TabController() {
        this.tab = 1;
        this.setTab = setTab;
        this.isSet = isSet;

        function setTab(tab) {
            this.tab = tab;
        }

        function isSet(tab) {
            return this.tab === tab;
        }
    }

    function productDescription() {
        return {
            templateUrl: 'desc.html'
        };
    }

    function productSpecs() {
        return {
            templateUrl: 'specs.html',
            restrict: 'A'
        };
    }

    function productReviews() {
        return {
            templateUrl: 'reviews.html',
            restrict: 'E'
        };
    }

})();

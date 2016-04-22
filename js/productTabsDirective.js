(function () {
    angular
        .module('gemStore')
        .directive('productTabs', productTabs);

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

    function productTabs() {
        var directive = {
            restrict: 'E',
            templateUrl: 'tabs.html',
            controller: TabController,
            controllerAs: 'tab'
        };

        return directive;
    }

})();

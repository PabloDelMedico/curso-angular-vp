(function() {
    angular
        .module('gemStore')
        .controller('TabController', TabController);

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

})();

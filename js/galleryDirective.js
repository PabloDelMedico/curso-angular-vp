(function() {
    angular
        .module('gemStore')
        .directive('gallery', gallery);

    function gallery() {
        var directive = {
            restrict: 'E',
            templateUrl: 'gallery.html',
            controller: GalleryController,
            controllerAs: 'gallery',
            scope: {
                images: '='
            }
        };

        return directive;
    }

    function GalleryController() {
        this.current = 0;
        this.setCurrent = setCurrent;

        function setCurrent(value) {
            this.current = value;
        }
    }

})();

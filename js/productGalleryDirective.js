(function() {
    angular
        .module('gemStore')
        .directive('productGallery', productGallery);

    function productGallery() {
        var directive = {
            restrict: 'E',
            templateUrl: 'gallery.html',
            controller: GalleryController,
            controllerAs: 'gallery'
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

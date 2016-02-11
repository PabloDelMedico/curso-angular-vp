(function() {
    angular
        .module('gemStore')
        .controller('GalleryController', GalleryController);

    function GalleryController() {
        this.current = 0;
        this.setCurrent = setCurrent;

        function setCurrent(value) {
            this.current = value;
        }
    }

})();

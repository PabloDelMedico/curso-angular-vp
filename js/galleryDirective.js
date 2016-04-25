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
            },
            bindToController: true
        };

        return directive;
    }

    function GalleryController() {
        var vm = this;

        vm.current = getFirst();
        vm.setCurrent = setCurrent;
        vm.hasImages = hasImages();

        function setCurrent(value) {
            vm.current = value || getFirst();
        }

        function hasImages(){
            return vm.images.length;
        }

        function getFirst() {
            if (hasImages()){
                return vm.images[0];
            }

        }
    }

})();

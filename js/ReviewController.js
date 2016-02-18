(function() {
    angular
        .module('gemStore')
        .controller('ReviewController', ReviewController);

    function ReviewController() {

        this.review = {};
        this.addReview = addReview;
        var vm= this;

        function addReview(gem) {
            gem.reviews.push(this.review);
            resetReview();
        }

        function resetReview() {
            vm.review = {};
        }
    }

})();

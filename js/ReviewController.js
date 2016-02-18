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
            return true;
        }

        function resetReview() {
            vm.review = {};
        }
    }

})();

(function() {
    angular
        .module('gemStore')
        .directive('reviews', review);

    function review() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/directives/reviews/reviews.html',
            controller: ReviewController,
            controllerAs: 'reviewCtrl'
        };

        return directive;
    }

    function ReviewController() {

        this.review = {};
        this.addReview = addReview;
        var vm= this;

        function addReview(gem) {
            this.review.createdOn = Date.now();
            gem.reviews.push(this.review);
            resetReview();
            return true;
        }

        function resetReview() {
            vm.review = {};
        }
    }

})();

(function () {
    angular
        .module('gemStore')
        .service('productSvc', ProductSvc);

    function ProductSvc($http) {

        this.findAll = findAll;

        function findAll() {
            // Simple GET request example:
            return $http({
                method: 'GET',
                url: 'store-products.json'
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                return response.data;
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                return response.data;
            });

        }
    }
})();
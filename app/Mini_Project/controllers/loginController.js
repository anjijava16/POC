app.controller("loginController",loginController);
loginController.$inject=["$scope","loginService"];
function loginController($scope,loginService) {
    $scope.login_details = function (data) {
        loginService.authenticate(data).then(function (response) {
            console.log(response);
        });
    };
};
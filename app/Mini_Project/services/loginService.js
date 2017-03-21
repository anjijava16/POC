app.service("loginService",loginService);
loginService.$inject=["$http"];
function loginService($http) {
    this.authenticate = function (data) {
        return $http.post("/api/login",data).then(function (response) {
            return response;
        })
    };
}
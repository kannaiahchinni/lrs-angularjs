
export function userComponent() {
    return {
        controller: userController,
        template: require('./user.html')
    };
}

function userController($scope, $log) {
    var ctrl = this;
    function onInit () {
        ctrl.title = 'Users';
    }
    ctrl.$onInit = onInit;
}

userController.$inject = ['$scope', '$log'];
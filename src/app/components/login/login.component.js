export default function loginComponent() {
    return {
        controller: loginController,
        template: require('./login.html')
    };
}
loginController.$inject = ['$scope', '$log'];

function loginController($scope,$log) {
    let ctrl = this;
    function onInit() {
        ctrl.title = 'Login Module';
    }
    ctrl.$onInit = onInit;
}


export function registrationComponent() {
    return {
        controller: registrationController,
        template: require('./registration.html')
    };
}

function registrationController($scope, $log) {
    const ctrl = this;

    ctrl.$onInit = () => {
        ctrl.title = 'Registrations';
        $log.info(" Inside of registration Controller ");
    };
}

registrationController.$inject = ['$scope', '$log'];
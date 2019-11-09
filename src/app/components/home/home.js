export function homeComponent() {
    return {
        controller: homeController,
        template: require('./home.html')
    };
}
homeController.$inject = ['$scope', '$log', '$timeout'];

function homeController($scope,$log, $timeout) {
    var ctrl = this;
    ctrl.title = 'Karunakar Yadav';
    function onInit() {
        $log.log('inside of home controller init function ');
    }
    ctrl.$onInit = onInit;
}


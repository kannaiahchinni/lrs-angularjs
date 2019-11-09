export function courseComponent() {
    return {
        controller: courseController,
        template: require('./course.html')
    };
}

function courseController($scope, $log, $sce) {

    const ctrl = this;
    ctrl.$onInit = () => {
        ctrl.title = 'Courses';
        $log.log(" Inside of course controller ");
        ctrl.url = $sce.trustAsResourceUrl('http://localhost:3000/resources/1573208114881-Activity 4 - Flow Designer Fundamentals - Build an Action (1)/index.html');
    };
}

courseController.$inject = ['$scope', '$log', '$sce'];
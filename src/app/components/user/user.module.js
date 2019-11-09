import { userComponent } from './user.component';
require('./user.scss');
export default angular.module('lrs.user', [])
.component('userComponent', userComponent()).name;
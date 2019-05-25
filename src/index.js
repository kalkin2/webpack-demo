import _ from 'lodash';
import {area,circumference} from './js/circle'

//default import 는 {}필요없고 이름을 마음대로 정할 수 있다
import aa from './js/cube'
import './css/style.css'
import './css/hello.scss'


function component() {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
console.log(area(10),circumference(10));
console.log('default : ',aa(10))
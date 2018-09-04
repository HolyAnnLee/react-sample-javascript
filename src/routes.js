/**
 * @Author : Duanjl
 * @Date: 9/4/2018
 * @Last Modified by：Duanjl
 * @Last modified time： 9/4/2018
 **/
import Loadable from 'react-loadable';
import { Spin } from 'antd';

const paths = ['./pages/Home'];
function createLoadable() {
  let routes = {};
  paths.forEach(path => {
    let pathArr = path.split('/');
    let property = pathArr[pathArr.length - 1];
    routes[property] = Loadable({
      loader: () => import('./pages/Home'),
      loading: Spin,
      delay: 300
    });
  });
  return paths;
}
const routes = createLoadable();

export default routes;

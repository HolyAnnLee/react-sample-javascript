/**
 * @Author : Duanjl
 * @Date: 9/4/2018
 * @Last Modified by：Duanjl
 * @Last modified time： 9/4/2018
 **/
import Loadable from 'react-loadable';
import { Spin } from 'antd';
// import Home from './pages/Home/Home';

const paths = ['./pages/Home'];
function createLoadable() {
  return paths.map((path) => {
    const pathArr = path.split('/');
    const property = pathArr[pathArr.length - 1];
    return Loadable({
      name: property,
      loader: () => import(`${path}`),
      // loader: () => Home,
      Spin,
      delay: 300,
    });
  });
}
const routes = createLoadable();
console.log('routes', routes);
export default routes;

/**
 * @Author : Duanjl
 * @Date: 9/4/2018
 * @Last Modified by：Duanjl
 * @Last modified time： 9/4/2018
 **/
import Loadable from 'react-loadable';
import Loading from './component/loading';
// import Home from './pages/Home/Home';

const paths = ['./pages/Home/Home'];
const routes = () => paths.map((path) => {
  const pathArr = path.split('/');
  const property = pathArr[pathArr.length - 1];
  return Loadable({
    name: property,
    loader: () => import(`${path}.js`),
    loading: Loading,
    delay: 0,
    timeout: 10000,
  });
});
export default routes();

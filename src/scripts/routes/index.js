import Home from '../pages/home';
import Favorite from '../pages/favorite';
import Details from '../pages/details';

const routesObj = {
  '/': Home,
  '/favorite': Favorite,
  '/details/:id': Details,
};

export default routesObj;

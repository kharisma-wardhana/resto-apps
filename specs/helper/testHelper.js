import btnFav from '../../src/scripts/components/details-resto/btnFav';
import FavResto from '../../src/scripts/data/fav-restoDB';

const createLikeButtonWithResto = async (resto) => {
  await btnFav.init({
    btnContainer: document.querySelector('.btn-container'),
    favResto: FavResto,
    resto,
  });
};

export default createLikeButtonWithResto;

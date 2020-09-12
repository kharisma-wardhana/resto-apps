// Like resto test case:
// - Resto blm di like
// - Show button like type outline (heart icon outline)
// - User click button like
// - Show button like type solid (heart icon change to solid)
// - Add data resto ke idb
// Negative:
// Resto sudah di like :
// 0> Tidak perlu menyimpan data resto ke idb
// Missing ID resto:
// 0> Skip save process

import createLikeButtonWithResto from './helper/testHelper';
import FavResto from '../src/scripts/data/fav-restoDB';

describe('Liking A Restaurant', () => {
  const addButtonContainer = () => {
    document.body.innerHTML = '<div class="btn-container"></div>';
  };

  beforeEach(() => {
    addButtonContainer();
  });

  it('should show the like button when the resto hasn/\'t been liked before', async () => {
    await createLikeButtonWithResto({ id: 1 });

    expect(document.querySelector('.far')).toBeTruthy();
  });

  it('should not show the unlike button when the resto hasn/\'t been liked before', async () => {
    await createLikeButtonWithResto({ id: 1 });

    expect(document.querySelector('.fas')).toBeFalsy();
  });

  it('should be able to like the resto', async () => {
    await createLikeButtonWithResto({ id: 1 });

    document.querySelector('.fav').dispatchEvent(new Event('click'));
    const resto = await FavResto.getResto(1);
    expect(resto).toEqual({ id: 1 });
    FavResto.deleteResto(1);
  });

  it('should not add a resto again when its already liked', async () => {
    await createLikeButtonWithResto({ id: 1 });

    await FavResto.putResto({ id: 1 });

    document.querySelector('.fav').dispatchEvent(new Event('click'));
    expect(await FavResto.getAllRestoes()).toEqual([{ id: 1 }]);
    FavResto.deleteResto(1);
  });

  it('should not add a resto when it has no id', async () => {
    await createLikeButtonWithResto({});

    document.querySelector('.fav').dispatchEvent(new Event('click'));
    expect(await FavResto.getAllRestoes()).toEqual([]);
  });
});

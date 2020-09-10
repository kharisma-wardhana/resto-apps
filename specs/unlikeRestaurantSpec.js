// Unlike resto test case:
// - Resto sudah di like
// - Show button like type solid (heart icon solid) 
// - User click button like  
// - Show button like type outline (heart icon change to outline)
// - Remove data resto dari idb
// Negative:
// 0> Resto not found di idb

import createLikeButtonWithResto from './helper/testHelper';
import FavResto from '../src/scripts/data/fav-restoDB';

describe('Unliking A Restaurant', () => {

  const addButtonContainer = () => {
    document.body.innerHTML = '<div class="btn-container"></div>';
  };

  beforeEach(async () => {
    addButtonContainer();
    await FavResto.putResto({ id: 1 });
  });

  afterEach(async () => {
    await FavResto.deleteResto(1);
  });

  it('should display unlike button when the movie has been liked', async () => {
    await createLikeButtonWithResto({ id: 1 });

    expect(document.querySelector('.fas')).toBeTruthy();
  });

  it(`shouldn/'t display like button when the resto has been liked`, async () => {
    await createLikeButtonWithResto({ id: 1 });

    expect(document.querySelector('.far')).toBeFalsy();
  });

  it('should be able to remove liked resto from the list', async () => {
    await createLikeButtonWithResto({ id: 1 });

    document.querySelector('.fav').dispatchEvent(new Event('click'));

    expect(await FavResto.getAllRestoes()).toEqual([]);
  });

  it(`shouldn/'t throw error if the unliked resto isn/'t in the list`, async () => {
    await createLikeButtonWithResto({ id: 1 });
    await FavResto.deleteResto(1);

    document.querySelector('.fav').dispatchEvent(new Event('click'));

    expect(await FavResto.getAllRestoes()).toEqual([]);
  });
});

const assert = require('assert');

Feature('like restaurant');

Before((I) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', (I) => {
  I.seeElement('spinner-loading');
  I.see('Belum ada restaurant yang Anda sukai', '#fav-notfound');
});

Scenario('liked first restaurant', async (I) => {
  I.see('Belum ada restaurant yang Anda sukai', '#fav-notfound');
  I.amOnPage('/');

  I.seeElement('details');
  const firstResto = locate('.resto-name span').first();
  const firstRestoName = await I.grabTextFrom(firstResto);

  const firstRestoDetail = locate('details').first();
  I.click(firstRestoDetail);

  I.seeElement('.detail');
  I.click(locate('.detail').first());

  I.seeElement('.fav');
  I.click('.fav');

  I.amOnPage('/#/favorite');
  I.seeElement('item-resto');
  I.seeElement('.resto-name span');
  const likedRestoName = await I.grabTextFrom('.resto-name span');

  assert.strictEqual(firstRestoName, likedRestoName);
});

Scenario('checking feature like and unlike restaurant', async (I) => {
  I.see('Belum ada restaurant yang Anda sukai', '#fav-notfound');
  I.amOnPage('/');

  I.seeElement('details');
  const firstResto = locate('.resto-name span').first();
  const firstRestoName = await I.grabTextFrom(firstResto);

  const firstRestoDetail = locate('details').first();
  I.click(firstRestoDetail);

  I.seeElement('.detail');
  I.click(locate('.detail').first());

  I.seeElement('.fav');
  I.click('.fav');

  I.amOnPage('/#/favorite');
  I.seeElement('item-resto');
  I.seeElement('.resto-name span');
  const likedRestoName = await I.grabTextFrom('.resto-name span');

  assert.strictEqual(firstRestoName, likedRestoName);

  I.seeElement('details');
  I.click(firstRestoDetail);

  I.seeElement('.detail');
  I.click(locate('.detail').first());

  I.seeElement('.fav');
  I.click('.fav');

  I.amOnPage('/#/favorite');
  I.seeElement('spinner-loading');
  I.see('Belum ada restaurant yang Anda sukai', '#fav-notfound');
});
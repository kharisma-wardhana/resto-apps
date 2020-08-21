import '../../components/spinner-loading/index.js';
import '../../components/list-resto/index.js';
import '../../components/item-resto/index.js';

const Favorite = {
  async render() {
    return `
    <section id="section-fav">
        <div>Favorite</div>
        <spinner-loading></spinner-loading>
        <list-resto class="grid-container"></list-resto>
    </section>`;
  },
  async afterRender() {},
};

export default Favorite;

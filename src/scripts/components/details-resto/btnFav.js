const btnFav = {
  async init({ btnContainer, favResto, resto }) {
    this._btnContainer = btnContainer;
    this._favResto = favResto;
    this._resto = resto;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._resto;

    if (await this._isRestoExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestoExist(id) {
    const resto = await this._favResto.getResto(id);
    return !!resto;
  },

  _renderLike() {
    this._btnContainer.innerHTML = '<button class="fav bg-dark"><i class="iconFav far fa-heart"></i></button>';
    const likeButton = document.querySelector('.fav');
    likeButton.addEventListener('click', async () => {
      await this._favResto.putResto(this._resto);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._btnContainer.innerHTML = '<button class="fav bg-dark"><i class="iconFav fas fa-heart"></i></button>';
    const likeButton = document.querySelector('.fav');
    likeButton.addEventListener('click', async () => {
      await this._favResto.deleteResto(this._resto.id);
      this._renderButton();
    });
  },
}

export default btnFav;
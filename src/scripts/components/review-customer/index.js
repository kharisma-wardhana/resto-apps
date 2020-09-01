class ReviewCustomer extends HTMLElement {
  set reviews(reviews) {
    this._reviews = reviews;
    this.render();
  }

  render() {
    // console.log(this._resto);
    this.innerHTML = '';

    this._reviews.map((_review) => {
      const reviewerName = document.createElement('strong');
      reviewerName.innerHTML = _review.name;
      this.appendChild(reviewerName);

      const reviewComment = document.createElement('div');
      reviewComment.innerHTML = `<q>${_review.review}</q>`;
      this.appendChild(reviewComment);

      const reviewDate = document.createElement('div');
      reviewDate.classList.add('review-date');
      reviewDate.innerHTML = _review.date;
      this.appendChild(reviewDate);

      return this.appendChild(document.createElement('hr'));
    });
  }

  renderError(message) {
    this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define('review-customer', ReviewCustomer);

import View from './View.js';
import icons from 'url:../../img/icons.svg'; // Parcel 2

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query. Please try again!';
  _message = '';

  _generateMarkup() {
    console.log(this._data);
    return this._data.map(this._generateMarkupPreview).join('');
  }

  _generateMarkupPreview(result) {
    return `
        <li class="preview">
        <a class="preview__link" href="#${result.id}">
        <figure class="preview__fig">
        <img src="${result.image}" alt=" ${result.title}" />
        </figure>
        <div class="preview__data">
        <h4 class="preview__name">
        ${result.title}
        </h4>
        <div>
        <p class="preview__publisher">${result.publisher}</p>
        </div>
        </div>
        </a>
        </li>
        `;
  }
}

export default new ResultsView();

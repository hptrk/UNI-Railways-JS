export default class View {
  _views = [
    document.querySelector('.game'),
    document.querySelector('.main-menu'),
    document.querySelector('.description'),
  ];
  _data;

  render(data, render = true) {
    this._data = data;
    const markup = this._generateMarkup();

    if (!render) return markup;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  _clear() {
    this._parentElement.innerHTML = '';
  }
  showView() {
    // Hide all views
    this._views.forEach((view) => view.classList.add('hidden'));
    // Show current view
    this._parentElement.classList.remove('hidden');
  }
}

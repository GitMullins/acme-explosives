import categoriesData from '../helpers/data/categoriesData';
import util from '../helpers/util';
import typesData from '../helpers/data/typesData';
import detailsData from '../helpers/data/detailsData';


const domStringBuilder = (x) => {
  let domString = '';
  x.forEach((board) => {
    domString += '<div class="col-4">';
    domString += `<div id="${board.id}" class="card p-2">`;
    domString += '<div class="card-body">';
    domString += `<h3>${board.type[0].description}<h3>`;
    domString += `<h5>${board.name}</h5>`;
    domString += `<h5>${board.details[0].name}</h5>`;
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('printDiv', domString);
};

const initCategories = () => {
  categoriesData.loadCategories()
    .then(resp => typesData.getTypesForEachCategory(resp.data.categories))
    .then((categoryTypes) => {
      detailsData.getDetailsForEachType(categoryTypes)
        .then((x) => {
          domStringBuilder(x);
        });
    })
    .catch(err => console.error('error from initBoards requests', err));
};

export default { initCategories };

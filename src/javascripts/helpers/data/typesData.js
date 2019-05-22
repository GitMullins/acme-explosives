import axios from 'axios';
import detailsData from './detailsData';


const getTypesForEachCategory = categories => new Promise((resolve, reject) => {
  axios.get('../db/types.json')
    // .then(console.error(data.types))
    // .then(resp => console.error(resp.data))
    .then((resp) => {
      const { types } = resp.data;
      const categoriesWithTypes = categories.map((category) => {
        const categoryAndType = category;
        const matchingTypes = types.filter(type => type.category === category.id);
        categoryAndType.type = matchingTypes;
        return categoryAndType;
      });
      detailsData.getDetailsForEachType(categoriesWithTypes)
        .then((x) => {
          const allData = x;
          return allData;
        });
      resolve(categoriesWithTypes);
    })
    .catch(err => reject(err));
});


export default { getTypesForEachCategory };

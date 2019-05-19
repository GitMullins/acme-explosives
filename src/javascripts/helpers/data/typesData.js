import axios from 'axios';


const getTypesForEachCategory = categories => new Promise((resolve, reject) => {
  axios.get('../db/types.json')
    .then((resp) => {
      const { types } = resp.data;
      const categoriesWithTypes = categories.map((category) => {
        const categoryAndType = category;
        const matchingTypes = types.filter(type => type.category === category.id);
        categoryAndType.type = matchingTypes;
        // const test = categoryAndType.type[0].description;
        // console.error(categoryAndType.type[0].description);
        return categoryAndType;
      });
      resolve(categoriesWithTypes);
    })
    .catch(err => reject(err));
});


export default { getTypesForEachCategory };

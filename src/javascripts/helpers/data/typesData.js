import axios from 'axios';


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
        // categoryAndType.name = detailsData.getDetailsForEachType(resp.data.types);
        // console.error(categoryAndType.name);
        return categoryAndType;
      });
      // console.error(types[0]);
      console.error(types.name);
      resolve(categoriesWithTypes);
    })
    .catch(err => reject(err));
});


export default { getTypesForEachCategory };

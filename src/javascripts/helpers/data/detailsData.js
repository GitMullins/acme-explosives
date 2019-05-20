import axios from 'axios';


const getDetailsForEachType = types => new Promise((resolve, reject) => {
  axios.get('../db/details.json')
    .then((resp) => {
      // console.error(resp.data.products);
      const { products } = resp.data;
      const typesWithDetails = types.map((type) => {
        // const typeAndDetail = type;
        const matchingDetails = products.filter(product => product.type === type.id);
        // typeAndDetail.detail = matchingDetails;
        // console.error(products.filter(product => product.type === type.id));
        // console.error(matchingDetails[0].name);
        return matchingDetails[0].name;
      });
      resolve(typesWithDetails);
    })
    .catch(err => reject(err));
});


export default { getDetailsForEachType };

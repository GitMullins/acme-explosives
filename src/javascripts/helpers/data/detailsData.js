import axios from 'axios';


const getDetailsForEachType = types => new Promise((resolve, reject) => {
  axios.get('../db/details.json')
    .then((resp) => {
      const { products } = resp.data;
      const typesWithDetails = types.map((type) => {
        const typeAndDetail = type;
        const matchingDetails = products.filter(product => product.type === type.type[0].id);
        typeAndDetail.details = matchingDetails;
        // console.error(typeAndDetail);
        return typeAndDetail;
      });
      resolve(typesWithDetails);
    })
    .catch(err => reject(err));
});


export default { getDetailsForEachType };

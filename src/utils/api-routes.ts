const url = process.env.NEXT_PUBLIC_URL_API;
const apiTuClick = `${url}/api/`;
console.log('🚀 ~ file: api-routes.ts ~ line 3 ~ apiTuClick', apiTuClick);

const product = {
  getContractsAndContacts: () => `${apiTuClick}contacts`,
  getClients: () => `${apiTuClick}clients`,
};
const apiRoutes = {
  ...product,
};

export default apiRoutes;

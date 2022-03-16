import { request } from '@utilities/fetch';
import apiRoutes from '@utilities/api-routes';

export const getContractsAndContactsInfo = () =>
  request({
    route: apiRoutes.getContractsAndContacts(),
    method: 'GET',
  });

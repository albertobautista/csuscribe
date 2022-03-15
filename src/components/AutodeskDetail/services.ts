import { request } from '@utils/fetch';
import apiRoutes from '@utils/api-routes';

export const getContractsAndContactsInfo = () =>
  request({
    route: apiRoutes.getContractsAndContacts(),
    method: 'GET',
  });

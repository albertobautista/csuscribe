import { request } from '@utilities/fetch';
import apiRoutes from '@utilities/api-routes';

export const getClientsInfo = () =>
  request({
    route: apiRoutes.getClients(),
    method: 'GET',
  });

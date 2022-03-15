import { request } from '@utils/fetch';
import apiRoutes from '@utils/api-routes';

export const getClientsInfo = () =>
  request({
    route: apiRoutes.getClients(),
    method: 'GET',
  });

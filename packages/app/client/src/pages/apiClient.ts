import { APIClient } from '@znewbee/client';

const apiClient = new APIClient({
  baseURL: process.env.API_BASE_URL,
  headers: {
    'X-Hostname': window?.location?.hostname,
  },
});

export default apiClient;

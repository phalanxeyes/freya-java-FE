import type { HealthDTO } from './api.d';
import { createResourceClient } from './api';

const client = createResourceClient('health');

export const healthService = {
  getHealth: () => client.getAll<HealthDTO>(),
};
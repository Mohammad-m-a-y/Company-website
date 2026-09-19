import type { About } from './About';
import type { AboutValue } from './AboutValue';
import type { AboutService } from './AboutService';

export interface AboutDetail {
  about: About;
  values: AboutValue[];
  services: AboutService[];
}
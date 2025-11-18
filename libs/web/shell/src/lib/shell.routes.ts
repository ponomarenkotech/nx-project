import { Route } from '@angular/router';
import { Shell } from './shell/shell';
import { pageMainRoutes } from '@nx-project/page-main';

export const shellRoutes: Route[] = [
  { path: '', component: Shell, children: pageMainRoutes },
];

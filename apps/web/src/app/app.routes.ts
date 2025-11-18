import { Route } from '@angular/router';
import { shellRoutes } from '@nx-project/shell';

export const appRoutes: Route[] = [{ path: '', children: shellRoutes }];

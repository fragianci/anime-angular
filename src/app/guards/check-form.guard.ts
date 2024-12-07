import { CanDeactivateFn, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export type CanDeactivateType = Observable<UrlTree | boolean> | Promise<boolean | UrlTree> | boolean | UrlTree;

export interface CanDeactivateComponent {
  canDeactivate: () => CanDeactivateType;
}

export const checkFormGuard: CanDeactivateFn<CanDeactivateComponent> = (component, currentRoute, currentState, nextState) => {
  return component.canDeactivate ? component.canDeactivate() : true;
};

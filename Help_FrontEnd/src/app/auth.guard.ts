import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { StorageService } from './storage.service';
import { UserType } from './user-type.enum';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const storageService = inject(StorageService);
  if (
    storageService.storedUserType === UserType.APP_USER ||
    storageService.storedUserType === UserType.GUEST
  ) {
    return true;
  }
  router.navigate(['/'], { replaceUrl: true });
  return false;
};

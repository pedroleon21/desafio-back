import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthGuard } from './auth.guard';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private guard: AuthGuard) { }
    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        return this.guard.canActivate(context);
    }
}

import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private jwtService: JwtService) { }
    //provavelmente esta implementação esta errada

    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        return this.validateRequest(request);
    }
    private validateRequest(request: any): boolean {
        const bearerToken: string = request.headers["authorization"];
        let tokenJWT: string;
        if (!!bearerToken) tokenJWT = bearerToken.split("Bearer")[1].trim();
        try {
            this.jwtService.verify(tokenJWT);
        } catch (e) {
            throw new HttpException(e, HttpStatus.UNAUTHORIZED);
        }
        return true;
    }
}
import { ExecutionContext, Injectable, Logger } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LdapAuthGuard extends AuthGuard('ldap') {
  private readonly logger = new Logger('LdapAuthGuard');
  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }
  handleRequest(err, user, info) {
    if (err || !user) {
      // Puedes personalizar el mensaje de error aquí
      throw err || new RpcException('Credenciales inválidas');
    }
    return user;
  }
}

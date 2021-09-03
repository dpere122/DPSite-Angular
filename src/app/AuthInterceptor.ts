import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { OktaAuthService } from '@okta/okta-angular';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private oktaAuth: OktaAuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return from(this.handleAccess(request, next));
  }

  private async handleAccess(request: HttpRequest<any>, next: HttpHandler): Promise<HttpEvent<any>> {
    // Only add an access token to whitelisted origins

    let editMethods = ["POST","DELETE","PUT"];
    if(editMethods.includes(request.method)){
      const accessToken = this.oktaAuth.getAccessToken();
      request = request.clone({
      setHeaders: {
        Authorization: 'Bearer ' + accessToken,
        "content-type": "Application/Json"
      }});
    }
    return next.handle(request).toPromise();
  }
}
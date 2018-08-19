import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {catchError, tap } from 'rxjs/operators';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

//import { Configuration } from '../../app.constants';

@Injectable()
export class DataService {

    private actionUrl: string;

    constructor(private http: HttpClient) {
        this.actionUrl ='';
    }

    public getAll<T>(url:string): Observable<T> {
         this.actionUrl=url;
        return this.http.get<T>(this.actionUrl).pipe(
            catchError(this.handleError)
          );;
    }

    public getSingle<T>(id: number): Observable<T> {
        return this.http.get<T>(this.actionUrl + id);
    }

    public add<T>(itemName: string): Observable<T> {
        const toAdd = JSON.stringify({ ItemName: itemName });

        return this.http.post<T>(this.actionUrl, toAdd);
    }

    public update<T>(id: number, itemToUpdate: any): Observable<T> {
        return this.http
            .put<T>(this.actionUrl + id, JSON.stringify(itemToUpdate));
    }

    public delete<T>(id: number): Observable<T> {
        return this.http.delete<T>(this.actionUrl + id);
    }
    
        private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
          'Something bad happened; please try again later.');
      };
}


@Injectable()
export class CustomInterceptor implements HttpInterceptor {

    constructor(private loaderService: DataService, private spinnerService: Ng4LoadingSpinnerService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!req.headers.has('Content-Type')) {
            req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        }

        req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
        console.log(JSON.stringify(req.headers));
        this.spinnerService.show();
        return next.handle(req).pipe(tap((event: HttpEvent<any>) => { 
            if (event instanceof HttpResponse) {
              this.onEnd();
            }
          },
            (err: any) => {
              this.onEnd();
          }));
    }

    private onEnd()
    {
        this.spinnerService.hide();
    }
}
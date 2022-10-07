import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class UtilService {
  static get(url: string, http: HttpClient, store: any) {
    return http.get(url)
      .pipe(
        tap((result: any) => {
          if (result.success) {
            store.set(result.data);
          } else {
            console.log(result.error);
          }
        }, error => {
          console.log(error.message)
        })
      );
  }

  static add(url: string, data: any, http: HttpClient, store: any) {
    return http.post(url, data)
      .pipe(
        tap((result: any) => {
          if (result.success) {
            store.add(result.data);
          } else {
            let errors = '';
            result.errors.forEach((ele: any) => { errors += ele + '\n'; });
            console.log(errors)
          }
        }, failure => {
          let errors = '';
          failure.error.errors.forEach((ele: any) => { errors += ele + '\n'; });
          console.log(errors)
        })
      );
  }

  static update(url: string, data: any, http: HttpClient, store: any): Observable<any> {
    return http.put(url, data)
      .pipe(
        tap((result: any) => {
          if (result.success) {
            store.update(result.data.id, result.data);
          } else {
            let errors = '';
            result.errors.forEach((ele: any) => { errors += ele + '\n'; });
            console.log(errors);
          }
        }, failure => {
          let errors = '';
          failure.error.errors.forEach((ele: any) => { errors += ele + '\n'; });
          console.log(errors);
        })
      );
  }

  static delete(url: string, id: number, http: HttpClient, store: any) {
    return http.delete(url)
      .pipe(
        tap((result: any) => {
          if (result.success) {
            store.remove(id);
          } else {
            console.log(result.error);

          }
        }, failure => {
          console.log(failure.error.error)
        })
      );
  }

  static fetch(url: string, data: any, http: HttpClient, store: any) {
    return http.post(url, data)
      .pipe(
        tap((result: any) => {
          if (result.success) {
            store.set(result.data);
          } else {
            console.log(result.error);
          }
        }, error => {
          console.log(error.message);
        })
      );
  }

  static bulk_update(url: string, data: any, http: HttpClient, store: any) {
    return http.post(url, data)
      .pipe(
        tap((result: any) => {
          if (result.success) {
            for (const d of result.data) {
              store.update(d.id, d);
            }
          } else {
            let errors = '';
            result.errors.forEach((ele: any) => { errors += ele + '\n'; });
            console.log(errors);
          }
        }, failure => {
          let errors = '';
          failure.error.errors.forEach((ele: any) => { errors += ele + '\n'; });
          console.log(errors);
        })
      );
  }

  static decodeJWT(token: any): any {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(window.atob(base64));
  }
}

import { Injectable } from '@angular/core';
import { Http, Response, UrlSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { fbAppId } from '../../../shared/private/fbAppInfo';
@Injectable()
export class UserSearchService {
  appId: number = fbAppId;
  constructor(private http: Http) {

  }

  searchFolks(term: string) {
    let params = new UrlSearchParams;
    params.set('appId', `${fbAppId}`);
    window['FB'].init(params);
    return this.http.get( `http://api.spotify.com/v1/search?q=${term}&type=track`)
    .map((res: Response) => res.json().tracks.items);
  }
}

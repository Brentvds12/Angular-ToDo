import { Injectable } from '@angular/core';
import { ListItem } from './list-item/list-item';

import { HttpClient } from '@angular/common/http';
import { Observable, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListItemService {

  constructor(private httpClient: HttpClient) {}

  getListItems(): Observable<ListItem[]> {
    return timer(1, 3000).pipe(switchMap(() => this.httpClient.get<ListItem[]>("http://localhost:3000/listItems")));
  }

  getListItemById(id: number) : Observable<ListItem> {
    return this.httpClient.get<ListItem>("http://localhost:3000/listItems/" + id);
  }
}

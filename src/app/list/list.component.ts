import { Component, Input, OnInit } from '@angular/core';
import { List } from './list';
import { ListItem } from '../list-item/list-item';
import { ListItemService } from '../list-item.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() list: List = {id: 0, listitems: []};

  listItems$:Observable<ListItem[]> = new Observable<ListItem[]>();

  constructor(private listItemService: ListItemService) { }

  ngOnInit(): void {
    this.listItems$ = this.listItemService.getListItems();
  }

}

import { Component, OnInit } from '@angular/core';
import { ListItem } from '../list-item/list-item';
import { ListItemService } from '../list-item.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-item-detail',
  templateUrl: './list-item-detail.component.html',
  styleUrls: ['./list-item-detail.component.scss']
})
export class ListItemDetailComponent implements OnInit {
  listItem: ListItem = { id: 0, description: "", isDone: false };

  constructor(private listItemService: ListItemService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const listItemId = this.route.snapshot.paramMap.get('id');
    console.log(this.route.snapshot.paramMap.get('test'));
    if (listItemId != null) {
      this.listItemService.getListItemById(+listItemId).subscribe(result => this.listItem = result);
    }
  }
}

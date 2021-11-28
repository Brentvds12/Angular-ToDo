import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListItem } from './list-item';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() listItem: ListItem = {id: 0, description: "", isDone: false};
  @Input() isDetail: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  detail(id: number){
    this.router.navigate(['/listItem', id]);
  }

}

import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, MatListModule],
  templateUrl: './scrollable-list.component.html',
  styleUrl: './scrollable-list.component.css'
})
export class ScrollableListComponent {
  items: string[] = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
    'Item 7',
    'Item 8',
    'Item 9',
    'Item 10'
  ];

  onClick(item: string) {
    console.log(item + ' clicked');
    // You can perform any action here when a list item is clicked
  }
}

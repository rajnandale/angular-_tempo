import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [MatInputModule, MatIconModule], // Import MatInputModule for standalone component
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Input() placeholder = '';
  @Output() searchTerm = new EventEmitter<string>();

  onSearch(searchInput: HTMLInputElement) {
    this.searchTerm.emit(searchInput.value);
    searchInput.value = ''; // Clear the input field after search
  }
}

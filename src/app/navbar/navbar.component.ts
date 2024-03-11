import { Component,  OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { BackendApiService } from '../api.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title: string = '';

  constructor(private backendApiService: BackendApiService) {}

  ngOnInit() {
    this.fetchTitleFromBackend();
  }

  fetchTitleFromBackend() {
    this.backendApiService.getTitle()
      .subscribe(data => {
        this.title = data.title;
      });
  }
}

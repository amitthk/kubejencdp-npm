import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pys3viewer';

  showsidebar = false;

  onSidebarToggle(showsidebar: boolean){
    this.showsidebar=showsidebar;
  }
}

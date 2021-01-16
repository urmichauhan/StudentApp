import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'studentapp';
  public year = new Date().getFullYear();

  constructor(public router: Router) {

  }

   /**
   * @description Navigate method to redirect the page
   * @param page Page name to navigate
   */
  navigatePage(page: string) {
    this.router.navigate([page]);
  }

}

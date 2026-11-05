import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-unavailable.page',
  templateUrl: './unavailable.page.html',
})
export class UnavailablePage {
  tryAgain(): void {
    window.location.reload();
  }
}

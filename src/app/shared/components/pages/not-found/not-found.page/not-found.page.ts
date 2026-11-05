import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  LucideFileExclamationPoint,
  LucideHouse
} from '@lucide/angular';

@Component({
  imports: [
    RouterLink,
    LucideFileExclamationPoint,
    LucideHouse
  ],
  selector: 'app-not-found.page',
  templateUrl: './not-found.page.html',
})
export class NotFoundPage {

}

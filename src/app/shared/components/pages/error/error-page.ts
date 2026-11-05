import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {
  LucideServerCrash,
  LucideHouse
} from '@lucide/angular';

@Component({
  imports: [
    RouterLink,
    LucideServerCrash,
    LucideHouse
  ],
  selector: 'app-error-page',
  templateUrl: './error-page.html',
})
export class ErrorPage implements OnInit {
  private activatedRoute = inject(ActivatedRoute);

  readonly status = signal(0);

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    console.log(id);

    this.status.set(Number(id));
  }
}

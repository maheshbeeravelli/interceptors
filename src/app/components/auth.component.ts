import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { paths } from '../const';

@Component({
  template: `
    Auth
    <button (click)="run()">Run</button>
  `
})
export class AuthComponent {
  constructor(private http: HttpClient) {}

  run() {
    this.http.get(paths.auth).subscribe();
  }
}

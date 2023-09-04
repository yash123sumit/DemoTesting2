import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BrandDetailsService } from './services/brand-details.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'InVehicle';

  constructor(private service: BrandDetailsService, private router: Router) {}

  brandData: any;
  ngOnInit(): void {
    this.brandData = this.service.brandDetails;
  }
  onActive() {
    window.scroll(0, 0);
  }
  resetPage(id: any) {
    this.router.navigate(['./brand', id]);
  }
  refresh() {
    window.location.reload();
  }
}

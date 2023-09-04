import { Component, OnInit } from '@angular/core';
import { BrandDetailsService } from '../services/brand-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service: BrandDetailsService) { }

  brandData : any;
  ngOnInit(): void {
    this.brandData = this.service.brandDetails;
  }

}

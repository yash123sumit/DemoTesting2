import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrandDetailsService } from '../services/brand-details.service';
import { LearnMorepageService } from '../services/learn-morepage.service';

@Component({
  selector: 'app-learn-morepage',
  templateUrl: './learn-morepage.component.html',
  styleUrls: ['./learn-morepage.component.scss']
})
export class LearnMorepageComponent {
  constructor(private service: LearnMorepageService, private param: ActivatedRoute , private service2 : BrandDetailsService){}
  learnMoreData : any;
  learnMoreId : any;
  bdData : any;
  ngOnInit(): void {
    this.learnMoreId = this.param.snapshot.paramMap.get('id');
  
    if (this.learnMoreId) {
      this.learnMoreData = this.service.learnMoreDetails.filter((value) => {
        return value.id == this.learnMoreId;
      });
    }
    this.bdData = this.service2.brandDetails;
  }
  
  toOverview(){
    document.getElementById("sec2")?.scrollIntoView({behavior:"smooth"});
  }
  toKey()
  {
  document.getElementById("sec3")?.scrollIntoView({behavior:"smooth"});
  }
  toSummary(){
    document.getElementById("sec4")?.scrollIntoView({behavior:"smooth"});
  }
  toColours(){
    document.getElementById("sec5")?.scrollIntoView({behavior:"smooth"});
  }
  toMileage(){
    document.getElementById("sec6")?.scrollIntoView({behavior:"smooth"});
  }
  
}

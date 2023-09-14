
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleryPageService } from '../services/gallery-page.service';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss']
})
export class GalleryPageComponent {
  constructor(private _gal: GalleryPageService, private param: ActivatedRoute) { }

  galleryInfo: any;
  getGalleryId: any;

  ngOnInit(): void {

    this.getGalleryId = this.param.snapshot.paramMap.get('Id'); 
    
    if (this.getGalleryId) {
      this.galleryInfo = this._gal.gallery.filter((value) => { 
        return value.Id == this.getGalleryId; 
      });
    }

  }
}


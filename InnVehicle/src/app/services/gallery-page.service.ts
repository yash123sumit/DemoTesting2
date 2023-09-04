
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GalleryPageService {

  constructor() { }
  gallery = [
    {
      Id : 'Ferrari', 
      path1: "../assets/ferGallery/1.jpg",
      path2: "../assets/ferGallery/2.jpg",
      path3: "../assets/ferGallery/3.jpg",
      path4: "../assets/ferGallery/4.jpg",
      path5: "../assets/ferGallery/5.jpg",
      path6: "../assets/ferGallery/6.jpg",
      path7: "../assets/ferGallery/7.jpg",
      path8: "../assets/ferGallery/8.jpg"
    },
    {
      Id : 'Jaguar',
      path1: "../assets/jaguGallery/1.jpg",
      path2: "../assets/jaguGallery/2.jpg",
      path3: "../assets/jaguGallery/3.jpg",
      path4: "../assets/jaguGallery/4.jpeg",
      path5: "../assets/jaguGallery/5.jpg",
      path6: "../assets/jaguGallery/6.avif",
      path7: "../assets/jaguGallery/7.jpg",
      path8: "../assets/jaguGallery/8.webp"
    },
    
    {
      Id : 'Lamborghini', 
      path1: "../assets/lambGallery/1.jpg",
      path2: "../assets/lambGallery/2.jpeg",
      path3: "../assets/lambGallery/3.jpg",
      path4: "../assets/lambGallery/4.jpeg",
      path5: "../assets/lambGallery/5.jpg",
      path6: "../assets/lambGallery/6.jpg",
      path7: "../assets/lambGallery/7.jpg",
      path8: "../assets/lambGallery/8.webp"
    },
    {
      Id : 'Rolls-Royce',
      path1: "../assets/rollsGallery/1.jpg",
      path2: "../assets/rollsGallery/2.jpg",
      path3: "../assets/rollsGallery/3.jpg",
      path4: "../assets/rollsGallery/4.jpg",
      path5: "../assets/rollsGallery/5.jpg",
      path6: "../assets/rollsGallery/6.jpeg",
      path7: "../assets/rollsGallery/7.webp",
      path8: "../assets/rollsGallery/8.jpg"
    },
  ];
}


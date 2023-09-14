import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BrandDetailsService {
  constructor() {}

  brandDetails = [
    {
      id: 'Ferrari',
      brandName: 'Ferrari',
      brandModel: '488',
      brandLogo: '../assets/ferBrand/ferrari_logo.png',
      modelPower: '659.78',
      modelMilage: '7.7 Kmpl',
      modelFuel: 'Petrol',
      brandLogoText:'Symbols of Italian excellence',
      brandCarousel1: '../assets/ferBrand/ferrari_488_1.jpg',
      brandCarousel1Text2: 'We build cars, symbols of Italian excellence',
      brandCarousel2: '../assets/ferBrand/ferrari_4882.jpg',
      brandCarousel2Text: 'Delivering Complex Power Solutions..',
      brandCarousel3: '../assets/ferBrand/Ferraricor3.jpg',
      brandCarousel3Text: 'Take the Best that Exists.',
      brandFeature1Title: 'Powerful Performance.',
      brandFeature1Text:
        "The Ferrari 488 Spider is the latest chapter in Maranello's ongoing history of open-top v8 sports cars, a story that started with the targa-top version of the 308 GTB - the immortal 308 GTS - and which ultimately resulted in the full convertible spider architecture.",
      brandFeature1Img: '../assets/ferBrand/ferrari_4884.jpg',
      brandFeature2Title: "New V8's Soundtrack",
      brandFeature2Text:
        "Every Ferrari has its own unique and distinctive soundtrack and the 488 Spider is no exception to this rule. The new V8's soundtrack is seductively full and powerful even at low speeds and increases in volume and clarity as revs rise, underscoring the engine's exceptional responsiveness, torque and performance.",
      brandFeature2Img: '../assets/ferBrand/ferrari_4885.jpg',
      brandFeature3Title: 'And lastly, Cockpit.',
      brandFeature3Text:
        "The 488 Spider's cockpit was designed to underscore Ferrari's Formula 1-inspired philosophy of creating a seamless relationship between driver and car: the commands not clustered on the steering wheel are on the wraparound satellite pods which are angled directly towards the driver. The new lighter, horizontally more compact dashboard also curves around the cockpit and features ultra-sporty air vents.",
      brandFeature3Img: '../assets/ferBrand/ferrari_4886.jpg',
    },
    {
      id: 'Jaguar',
      brandName: 'Jaguar',
      brandModel: 'XF',
      brandLogo: '../assets/jaguBrand/jaguar_logo.png',
      modelPower: '246.74',
      modelMilage: '7.6 Kmpl',
      modelFuel: 'Petrol/Diesel',
      brandLogoText:'Grace…, Space… Pace.',
      brandCarousel1: '../assets/jaguBrand/jaguar_xf1.webp',
      brandCarousel1Text2:
        "Grace…, Space… Pace. Unleash a Jaguar. Don't dream it. Drive it!",
      brandCarousel2: '../assets/jaguBrand/Jagcor.jpg',
      brandCarousel2Text: 'Delivering Complex Power Solutions..',
      brandCarousel3: '../assets/jaguBrand/jaguar_xf_3.jpg',
      brandCarousel3Text: 'Take the Best that Exists.',
      brandFeature1Title: 'Elegant Design.',
      brandFeature1Text:
        "The XF is an evolution of the original J-Blade design pioneered in the X250 XF, with a largely similar silhouette. Effort was made to build a uniform design language across Jaguar's saloon range.",
      brandFeature1Img: '../assets/jaguBrand/jaguar_xf_4.jpg',
      
      brandFeature2Title: 'Impressive Engine',
      brandFeature2Text:
        "If you are eyeing the XF 20t, chances are that you are looking forward to what's under the hood more than rear seat space or cabin quality. In that case, the XF gets a 1997cc, four-cylinder engine that makes 200bhp. There's 320Nm on tap from low revs, however, the XF doesn't hurl itself out of the block like the smaller XE-blame it on the added weight.",
      brandFeature2Img: '../assets/jaguBrand/jaguar_xf5.jpg',
      brandFeature3Title: 'And lastly, Smooth Control.',
      brandFeature3Text:
        'The shifts from the XF 8-speed gearbox are quick yet smooth enough to be indiscernible. Unlike cars with dual clutch autos, this torque converter allows the XF to pick up speed from standstill in a linear manner with no hesitancy whatsoever. The Dynamic mode, in fact, sharpens the throttle response and makes the gearbox more engaging.',
      brandFeature3Img: '../assets/jaguBrand/jaguar_xf6.jpg',
    },
    {
      id: 'Lamborghini',
      brandName: 'Lamborghini',
      brandModel: 'Aventador',
      brandLogo: '../assets/lambBrand/lamborghini_logo.png',
      modelPower: '759.01',
      modelMilage: '7.69 Kmpl',
      modelFuel: 'Petrol',
      brandLogoText:'We are Lamborghini. Dream, inspire, lead',
      brandCarousel1: '../assets/lambBrand/lambo1.jpg',
      brandCarousel1Text2:
        'We are Lamborghini. Dream, inspire, lead, wait, last: see the future and write your history.',
      brandCarousel2: '../assets/lambBrand/lamborghini_aventador2.webp',
      brandCarousel2Text: 'Delivering Complex Power Solutions..',
      brandCarousel3: '../assets/lambBrand/lamborghini_aventador3.jpg',
      brandCarousel3Text: 'Take the Best that Exists.',
      brandFeature1Title: 'Powerful Production.',
      brandFeature1Text:
        "Over the years, every new variant of the Aventador has always churned out more power than their predecessor, and this time, the Ultimae is no exception. With its 6.5-liter naturally aspirated fire-breathing V12 the Aventador's latest edition has been crowned as the most powerful V12 Lamborghini to date.",
      brandFeature1Img: '../assets/lambBrand/lamborghini_aventador4.avif',
      brandFeature2Title: 'Only 350 Units',
      brandFeature2Text:
        'Automotive experts believe that the Aventador Ultimae could potentially become a future classic. The limited production numbers and last all-naturally aspirated drivetrain could be the driving factors for future pricing. Well, the Aventador being the poster car for the Millennials and Gen Z is an added bonus as well.',
      brandFeature2Img: '../assets/lambBrand/lamborghini_aventador5.avif',
      brandFeature3Title: 'Carbon Fiber Chassis.',
      brandFeature3Text:
        'Common to every Aventador, the Ultimae also gets an extremely rigid carbon fiber monocoque chassis. This chassis which is famously known as the "Tub" is used to mount the front and rear subframes. Following the attachment of this, all the suspension and drivetrain components are added to ultimately create the ferocious V12 Lambo bull.',
      brandFeature3Img: '../assets/lambBrand/lamborghini_aventador6.avif',
    },
    {
      id: 'Rolls-Royce',
      brandName: 'Rolls-Royce',
      brandModel: 'Phantom',
      brandLogo: '../assets/rollesBrand/rolls_royce_logo.png',
      modelPower: '563.0',
      modelMilage: '9.8 Kmpl',
      modelFuel: 'Petrol',
      brandLogoText: 'Trusted to Deliver Excellence',
      brandCarousel1: '../assets/rollesBrand/rolls1.jpg',
      brandCarousel1Text2:
        'Trusted to Deliver Excellence; Like nothing else on earth.',
      brandCarousel2: '../assets/rollesBrand/Image2.jpg',
      brandCarousel2Text: 'Delivering Complex Power Solutions..',
      brandCarousel3: '../assets/rollesBrand/Image3.jpg',
      brandCarousel3Text: 'Take the Best that Exists.',
      brandFeature1Title: 'Starlight Headliner.',
      brandFeature1Text:
        'Twinkling out of the ceiling above is the Starlight Headliner. Rolls-Royce achieves this by fitting fiber optic strands to shine down through the ceiling. Each strand is scattered at different lengths and depths to simulate a starry night sky.',
      brandFeature1Img: '../assets/rollesBrand/Feature1.jpg',
      brandFeature2Title: 'Customized Interiors',
      brandFeature2Text:
        'Committed to crafting your visions into reality. With Rolls-Royce Bespoke you can build your very own Rolls-Royce from pure inspiration, working in collaboration with our team to perfect and realise your vision.',
      brandFeature2Img: '../assets/rollesBrand/Feature2.jpg',
      brandFeature3Title: "And lastly, Phantom's gallery.",
      brandFeature3Text:
        "Something that's not common in the automotive world is the Phantom's gallery. Rolls-Royce has added a place to display artwork behind a glass partition that stretches the length of the dashboard. The Gallery feature is certainly unique, though purely aesthetic, and doesn't seem like it belongs in any other car.",
      brandFeature3Img: '../assets/rollesBrand/Feature3.png',
    },
  ];
}

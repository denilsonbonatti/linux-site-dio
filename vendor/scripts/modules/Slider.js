import $ from 'jquery';
import 'slick-carousel';

class Slider{
  constructor(){
    this.testimonialSlider = $(".slider-testimonial");
    this.projectSlider = $(".slider-project");
    this.testimonial();
    this.project();
  }

  event(){
    
  }

  testimonial(){
    this.testimonialSlider.slick({
      infinite: true,
      loop: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      arrows: true,
      prevArrow: '<i class="fas fa-angle-double-left"></i>', 
      nextArrow: '<i class="fas fa-angle-double-right"></i>',
      appendArrows: $(".slider-testimonial")
    });
  }

  project(){
    this.projectSlider.slick({
      infinite: true, 
      loop: true,
      fade: true,
      dots: true,
      arrows: false,
      initialSlide: 1,
      appendDots: $(".slider-project-dots")
    });
  }
  
}


export default Slider;
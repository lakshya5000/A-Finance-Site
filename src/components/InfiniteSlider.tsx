import slide1 from "@/assets/slide-1.jpg";
import slide2 from "@/assets/slide-2.jpg";
import slide3 from "@/assets/slide-3.jpg";
import slide4 from "@/assets/slide-4.jpg";
import slide5 from "@/assets/slide-5.jpg";
import slide6 from "@/assets/slide-6.jpg";
import slide7 from "@/assets/slide-7.jpg";
import slide8 from "@/assets/slide-8.jpg";
import slide9 from "@/assets/slide-9.jpg";
import slide10 from "@/assets/slide-10.jpg";

const images = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9, slide10];

const InfiniteSlider = () => {
  return (
    <div className="w-full overflow-hidden py-8">
      <div className="flex animate-scroll-left">
        {/* Duplicate the images for seamless infinite loop */}
        {[...images, ...images].map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-72 h-72 md:w-96 md:h-96 mx-4 rounded-2xl overflow-hidden shadow-2xl border-4 border-rose-200"
          >
            <img
              src={src}
              alt={`Love moment ${(i % 10) + 1}`}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;
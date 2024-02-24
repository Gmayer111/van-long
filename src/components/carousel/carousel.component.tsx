import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BoatImage from "public/assets/images/boat.jpg";
import EntranceImage from "public/assets/images/entrance.jpg";
import LanternesImage from "public/assets/images/lanternes.jpg";
import PaintImage from "public/assets/images/paint.jpg";
import RoomOneImage from "public/assets/images/room.jpg";
import RoomImage from "public/assets/images/room-1.jpg";
import RoomTwoImage from "public/assets/images/room-2.jpg";
import { useWindowSize } from "src/hooks/use-window-size";

const CarouselComponent = () => {
  const size = useWindowSize();
  const carouselItems = [
    EntranceImage,
    BoatImage,
    LanternesImage,
    PaintImage,
    RoomImage,
    RoomOneImage,
    RoomTwoImage,
  ];
  return (
    <Carousel
      centerMode={size.width < 768 ? false : true}
      infiniteLoop
      showStatus={false}
    >
      {carouselItems.map((carouselItem, index) => (
        <div key={`${carouselItem}-${index}`}>
          <Image src={carouselItem} alt={`Photo ${index} du restaurant`} />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;

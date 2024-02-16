import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BoatImage from "public/assets/img/boat.jpg";
import EntranceImage from "public/assets/img/entrance.jpg";
import LanternesImage from "public/assets/img/lanternes.jpg";
import PaintImage from "public/assets/img/paint.jpg";
import RoomOneImage from "public/assets/img/room.jpg";
import RoomImage from "public/assets/img/room-1.jpg";
import RoomTwoImage from "public/assets/img/room-2.jpg";
import { useWindowSize } from "src/utils/windowSize";

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
        <Image src={carouselItem} alt={`Photo ${index} du restaurant`} />
      ))}
    </Carousel>
  );
};

export default CarouselComponent;

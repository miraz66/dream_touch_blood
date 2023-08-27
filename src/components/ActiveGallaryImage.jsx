/* eslint-disable react/prop-types */
import gallary_1 from "../assets/gallery_1.jpg";
import gallary_2 from "../assets/gallery_2.jpg";
import gallary_3 from "../assets/gallery_3.jpg";
import gallary_4 from "../assets/gallery_4.jpg";
import gallary_5 from "../assets/gallery_5.jpg";
import gallary_6 from "../assets/gallery_6.jpg";
import gallary_7 from "../assets/event_3.jpg";
import gallary_8 from "../assets/testimonyFeatImg.jpg";

const gallaryImages = [
  { id: 1, images: gallary_1 },
  { id: 2, images: gallary_2 },
  { id: 3, images: gallary_3 },
  { id: 4, images: gallary_4 },
  { id: 5, images: gallary_5 },
  { id: 6, images: gallary_6 },
  { id: 7, images: gallary_7 },
  { id: 8, images: gallary_8 },
];

export default function ActiveGallaryImage({ imagesId }) {
  return (
    <>
      {gallaryImages.map(
        ({ id, images }) =>
          imagesId == id && (
            <img
              className="w-80 h-60 md:w-[30rem] md:h-[25rem] lg:w-[35rem] lg:h-[25rem] 2xl:w-[40rem] 2xl:h-[30rem] 3xl:h-[40rem] 3xl:w-[50rem]"
              key={id}
              src={images}
              alt=""
            />
          )
      )}
    </>
  );
}

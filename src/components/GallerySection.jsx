import SectionTemplate from "./SectionTemplate";
import { cropPhoto } from "../utils";
import { useRef, useState } from "react";

const imgGap = 20,
  imgWidth = 180;

export default function GallerySection() {
  const [images, setImages] = useState([]);
  const scrollerRef = useRef();

  const addImage = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.click();
    input.addEventListener("change", async () => {
      const file = input.files[0];
      //  get cropped photo
      const bolbUrl = URL.createObjectURL(file);
      const croppedPhotoSrc = await cropPhoto(bolbUrl);
      setImages((curr) => [...curr, croppedPhotoSrc]);
    });
  };

  const scrollLeft = () => {
    if (scrollerRef.current) {
      const currentTransform = scrollerRef.current.style.transform;
      const scrollerWidth = scrollerRef.current.offsetWidth;
      const currentTranslateX = currentTransform
        ? parseInt(currentTransform.match(/-?\d+/)[0], 10)
        : 0;

      if (currentTranslateX < 0 && currentTranslateX < scrollerWidth) {
        const newTranslateX = currentTranslateX + imgWidth + imgGap;
        scrollerRef.current.style.transform = `translateX(${newTranslateX}px)`;
      }
    }
  };

  const scrollRight = () => {
    if (scrollerRef.current && images.length > 0) {
      const currentTransform = scrollerRef.current.style.transform;
      const scrollerWidth = scrollerRef.current.scrollWidth;
      const imagesNoThatCanFit = parseInt(
        scrollerRef.current.offsetWidth / (imgWidth + imgGap)
      );
      const currentTranslateX = currentTransform
        ? parseInt(currentTransform.match(/-?\d+/)[0], 10)
        : 0;
      console.log(scrollerWidth);
      if (
        images.length > imagesNoThatCanFit &&
        currentTranslateX + scrollerWidth >
          (imgWidth + imgGap) * imagesNoThatCanFit
      ) {
        const newTranslateX = currentTranslateX - (imgWidth + imgGap);
        scrollerRef.current.style.transform = `translateX(${newTranslateX}px)`;
      }
    }
  };

  return (
    <SectionTemplate className="w-full pr-10 overflow-hidden">
      <div className="flex justify-between w-full items-center pl-5">
        <div className="bg-primary rounded-[20px] font-poppins text-xl py-4 px-8">
          Gallery
        </div>
        <div className="flex gap-8 items-center">
          <button
            className="font-pjs flex gap-2 items-center px-4 py-3 h-fit rounded-3xl text-[13px] font-semibold"
            style={{
              boxShadow:
                "inset 0px 3.26px 3.26px 0px rgba(255, 255, 255, 0.15), inset 0px 0px 48.91px 0px rgba(255, 255, 255, 0.05), 9px 10px 7.1px 0px rgba(0, 0, 0, 0.4), -0.5px -0.5px 6.9px 0px rgba(255, 255, 255, 0.25)",
            }}
            onClick={addImage}
          >
            <img src="add.svg" />
            <p>Add IMAGE</p>
          </button>
          <div className="flex gap-3">
            <button
              className="gradient-1 h-[45px] w-[45px] rounded-full relative flex items-center justify-center transition-all duration-700"
              onClick={scrollLeft}
            >
              <img
                src="left.svg"
                className="active:brightness-0 active:invert p-[13px] absolute rounded-full"
              />
            </button>
            <button
              className="gradient-1 h-[45px] w-[45px] rounded-full relative flex items-center justify-center transition-all duration-700"
              onClick={scrollRight}
            >
              <img
                src="left.svg"
                className="rotate-180 active:brightness-0 active:invert p-[13px] absolute rounded-full"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-hidden min-h-[150px]">
        <div
          className={`flex pt-10 pb-[21px] pl-5 transition-transform duration-[600ms] ${
            images.length > 0 ? "w-fit" : "w-full"
          }`}
          style={{
            gap: `${imgGap}px`,
          }}
          ref={scrollerRef}
        >
          {images.length === 0 && (
            <div className="mt-3 text-center w-full font-poppins opacity-25">
              <p>No images to show</p>
            </div>
          )}
          {images.map((img, i) => (
            <img
              src={img}
              style={{
                width: `${imgWidth}px`,
              }}
              className={`grayscale rounded-3xl hover:scale-110 hover:rotate-[-2deg] cursor-pointer duration-500 hover:grayscale-0 transition-all hover:translate-x-[6px] hover:translate-y-[-6px] hover:shadow-2xl hover:shadow-zinc-900`}
            />
          ))}
        </div>
      </div>
    </SectionTemplate>
  );
}

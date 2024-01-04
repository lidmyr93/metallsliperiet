import PhotoBlock from "./PhotoBlock";
import { FirstPageImages } from "../../images/firstPageMap";

const buildMasonry = () => {
  let items = [];
  for (let index = 1; index < 3; index++) {
    items.push(
      <div key={index} className="flex flex-col justify-start gap-8 lg:gap-14">
        {FirstPageImages.filter((img) => img.column === index).map(
          ({ id, src, height }) => (
            <PhotoBlock key={id} image={src} height={height} />
          )
        )}
      </div>
    );
  }
  return items;
};
export default function ImageGallery({}) {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mt-5 mx-5 md:mx-8 lg:gap-14">
      {buildMasonry()}
    </div>
  );
}

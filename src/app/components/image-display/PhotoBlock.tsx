import Image from "next/image";

type Props = {
  image: string;
  height: number;
};

const PhotoBlock = ({ image, height }: Props) => {
  return (
    <>
      <div>
        <div className={`group relative cursor-pointer`}>
          <Image
            className="transition ease-in-out delay-150 duration-700 grayscale group-hover:grayscale-0 w-full"
            src={image}
            width={400}
            height={height}
            objectFit="cover"
            objectPosition="50%,50%"
            alt="Photo"
          />
        </div>
      </div>
    </>
  );
};
export default PhotoBlock;

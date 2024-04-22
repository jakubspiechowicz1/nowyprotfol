import Image from 'next/image';

const DevImg = ({ imgSrc, alt, containerStyles }) => {
  return (
    <div className={containerStyles}>
      <Image src={imgSrc} fill priority alt={alt} />
    </div>
  );
};

export default DevImg;
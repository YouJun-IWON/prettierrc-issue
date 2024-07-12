import Image from "next/image";

const NoMobile = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4">
      <Image
        src="/page/no_mobile.svg"
        width={500}
        height={400}
        alt="no_mobile"
      />
      <h2 className="text-3xl">Mobile is not supported.</h2>
    </div>
  );
};

export default NoMobile;

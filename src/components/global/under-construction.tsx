import Image from "next/image";

const UnderConstruction = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4">
      <Image
        src="/page/under_construction.svg"
        width={500}
        height={400}
        alt="under_construction"
      />
      <h2 className="text-3xl">Under Construction</h2>
    </div>
  );
};

export default UnderConstruction;

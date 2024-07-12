import Image from "next/image";

export default async function Home() {
  return (
    <>
      <section className="relative mt-[-70px] flex h-full w-full flex-col items-center justify-center md:pt-44">
        {/* grid */}

        <div className="bottom-0 left-0 right-0 top-0 -z-10 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] dark:absolute" />

        <div className="mt-20">
          <p className="text-center">Run your LLM, in safe zone</p>
          <div className="relative bg-gradient-to-r from-primary to-secondary-foreground bg-clip-text text-transparent">
            <h1 className="text-center text-9xl font-bold md:text-[200px]">
              AIM Supervisor
            </h1>
          </div>
          <div className="relative flex items-center justify-center md:mt-[-50px]">
            <Image
              src={"/assets/landing_image.png"}
              alt="banner image"
              height={1200}
              width={1200}
              className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
            />
            <div className="absolute bottom-0 left-0 right-0 top-[50%] z-10 bg-gradient-to-t dark:from-background"></div>
          </div>
        </div>
      </section>
    </>
  );
}

import React from "react";

const Landing = () => {
  return (
    <>
      <div className="relative isolate px-6  lg:px-8">
        {/* <div
      aria-hidden="true"
      className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
    >
      <div
        style={{
          clipPath:
            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
        }}
        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ffffff] to-[#fcccfc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
      />
    </div> */}
        <div className="mx-auto max-w-4xl py-20 sm:py-48 lg:py-20">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
          <div className="text-center">
            <h1 className="text-7xl font-lite tracking-tight  sm:text-7xl pb-2 ">
              Passionate React Developer
            </h1>
            <h2 className="font-lite tracking-tight  sm:text-4xl ">
              Creating Dynamic Web Experiences
            </h2>

            <p className="mt-6 text-lg leading-7 tracking-tight ">
              As a dedicated React developer, I specialize in crafting
              high-performance, interactive web applications that deliver
              seamless user experiences. With a solid foundation in modern
              JavaScript and a deep understanding of React’s ecosystem, I build
              scalable solutions that drive user engagement and business growth.
            </p>
          </div>
        </div>
      </div>
      <div className=" relative isolate px-6  lg:px-8 bg-black">
        <div className="mx-auto max-w-4xl  sm:py-20 ">
          <div className="text-center">
            <p className="text-xl text-white justify-start leading-7 tracking-tight ">
              As a dedicated React developer, I specialize in crafting
              high-performance, interactive web applications that deliver
              seamless user experiences. With a solid foundation in modern
              JavaScript and a deep understanding of React’s ecosystem, I build
              scalable solutions that drive user engagement and business growth.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;

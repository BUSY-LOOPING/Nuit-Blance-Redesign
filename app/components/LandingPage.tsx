import React from "react";

const LandingPage = () => {
  return (
    <div className="h-[89vh] w-full flex flex-row justify-between">
      <div className="">
        <h1 className="text-9xl font-bold flex flex-col text-gray-900 tracking-tighter leading-[7rem] mt-[12vh]">
          <span>NUIT</span>
          <span>BLANCHE</span>
          <span className="leading-[9rem] font-[EditorialNew] italic tracking-tight font-thin">
            Toronto
          </span>
        </h1>

        <article>
          <h2 className="text-3xl font-normal text-gray-800">October 2-4</h2>
          <p className="text-2xl font-light text-gray-500">
            7:00 PM - 7:00AM (EST)
          </p>
        </article>
      </div>

      <div className="mt-[20vh] font-light text-gray-700 text-4xl w-[40vw] w-max-[600px] ">
        <p>
          Translating the City reimagines Toronto through art, culture, and
          language. Experience how over 200 voices shape identity, place, and
          connection.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;

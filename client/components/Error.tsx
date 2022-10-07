import React from "react";

const Error = () => {
  return (
    <section className="bg-primary min-h-screen w-full flex items-center justify-center flex-col">
      <h1 className="text-white font-nunito text-3xl font-bold">
        Oops Something Went Wrong!
      </h1>
      <p className="text-white font-nunito text-xl mt-4 max-w-[400px] text-center">
        We will try to fix it, please try again later after sometime
      </p>
    </section>
  );
};

export default Error;

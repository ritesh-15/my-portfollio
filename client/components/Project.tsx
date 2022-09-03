import Image from "next/image";
import React, { FC } from "react";

const Project: FC = (): JSX.Element => {
  return (
    <div className="relative rounded-xl project__container">
      <div className="absolute p-4 top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center project__detail_container">
        <h1 className="text-xl text-white text-center font-bold font-nunito project__detail_container__text">
          Myntra Clone
        </h1>
        <p className="text-center mt-4 text-lg font-nunito text-white project__detail_container__text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
          inventore modi quaerat quo veniam!
        </p>
      </div>

      <Image
        src="https://images.unsplash.com/photo-1662061492294-79bac8b40a41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
        alt=""
        width={400}
        height={250}
        objectFit="cover"
        className="rounded-xl"
      />
    </div>
  );
};

export default Project;

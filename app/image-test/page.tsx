import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <>
      <h1>Image Test</h1>
      <Image
        src="/image/sample.png"
        width={58}
        height={40}
        alt="Sample Image"
      />
    </>
  );
}

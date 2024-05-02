import React, { Suspense } from "react";
import Loading from "./loading";
import WaitComponent from "./wait";

export default function Page() {
  return (
    <div>
      <h1>Loading Test</h1>
      <Suspense fallback={<Loading />}>
        {/* @ts-expect-error Server Component */}
        <WaitComponent />
      </Suspense>
    </div>
  );
}

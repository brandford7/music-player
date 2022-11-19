import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/router";
import UserAvatar from "./UserAvatar";
import Plans from "./Plans";

const SubscriptionComponent = () => {
  const router = useRouter();

  return (
    <div className="w-full">
      <section className="flex justify-between">
        <section className="">
          <div className="m-4 cursor-pointer" onClick={() => router.back()}>
            <IoMdArrowRoundBack />
          </div>
          <h1>You are currently on the basic plan</h1>
        </section>
        <section className="flex justify-end mb-10">
          <UserAvatar name="Brand Jr" subscription="Basic" />
        </section>
          </section>
          <Plans/>
    </div>
  );
};

export default SubscriptionComponent;

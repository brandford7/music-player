import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/router";
import UserAvatar from "./UserAvatar";

const SubscriptionComponent = () => {
  const router = useRouter();

  return (
    <div>
      <section className="flex">
        <section>
          <div className="m-4 cursor-pointer" onClick={() => router.back()}>
            <IoMdArrowRoundBack />
          </div>
          <h1>You are currently on the basic plan</h1>
        </section>
        <section className="flex justify-end mb-">
          <UserAvatar name='Brand Jr' subscription='Basic' />bbbb
        </section>
      </section>
    </div>
  );
};

export default SubscriptionComponent;

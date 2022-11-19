import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/router";

const SubscriptionComponent = () => {
const router = useRouter()

  return (
    <div>
      <section>
        <div className="m-4 cursor-pointer" onClick={() => router.back()}>
          <IoMdArrowRoundBack />
        </div>
        <h1>You are currently on the basic plan</h1>
          </section>
          <section></section>
    </div>
  );
}

export default SubscriptionComponent
import React from 'react';

export default function SplitSection({ id, primarySlot, secondarySlot, reverseOrder }) {
  return (
    <section id={id} className="py-10">
      <div className="container mx-auto px-20 items-center flex flex-col lg:flex-row">
        <div className="lg:w-1/2">{primarySlot}</div>
        <div
          className={`mt-10 lg:mt-0 w-full lg:w-1/2 flex justify-center ${reverseOrder &&
            `order-last lg:order-first`}`}
        >
          {secondarySlot}
        </div>
      </div>
    </section>
  );
}

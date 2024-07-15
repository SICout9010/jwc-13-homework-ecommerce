import React from "react";

function Rating({ rating }: { rating: number }) {
  const renderStar = (i: number) => {
    const isHalfStar = rating > i && rating < i + 1;
    const isFullStar = rating >= i + 1;

    if (isFullStar) {
      return (
        <svg
          width="19"
          height="17"
          viewBox="0 0 19 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.65059 0L12.2698 5.63991L18.4431 6.38809L13.8886 10.6219L15.0846 16.7243L9.65059 13.701L4.21655 16.7243L5.41263 10.6219L0.858134 6.38809L7.03139 5.63991L9.65059 0Z"
            fill="#FFC633"
          />
        </svg>
      );
    } else if (isHalfStar) {
      return (
        <svg
          key={i}
          width="9"
          height="17"
          viewBox="0 0 9 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
        >
          <path
            d="M3.56595 16.7243L8.99999 13.701V0L6.38079 5.63991L0.207535 6.38809L4.76203 10.6219L3.56595 16.7243Z"
            fill="#FFC633"
          />
        </svg>
      );
    } else {
      return (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5 text-gray-400"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.960-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
          ></path>
        </svg>
      );
    }
  };

  return (
    // <div className="flex gap-1 items-center">
    //   {[...Array(5)].map((_, i) => (
    //     <svg
    //         key={i}
    //       xmlns="http://www.w3.org/2000/svg"
    //       viewBox="0 0 24 24"
    //       fill="currentColor"
    //       className={`h-5 w-5 ${i < rating ? 'text-yellow-500' : 'text-gray-400'}`}
    //     >
    //       <path
    //         fill-rule="evenodd"
    //         d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
    //         clip-rule="evenodd"
    //       ></path>
    //     </svg>
    //   ))}
    //   {rating}/5
    // </div>
    <div className="flex gap-1 items-center">
      {[...Array(5)].map((_, i) => renderStar(i))}
      {rating}/5
    </div>
  );
}

export default Rating;

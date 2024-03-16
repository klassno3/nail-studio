import { reviews } from "../Data/Data.js";
const Review = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex items-center justify-center ">
        <div className="w-11/12 flex flex-wrap gap-8 justify-center lg:gap-12">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="relative shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-4 flex flex-col gap-4 font-roboto w-[25em] justify-around quote"
            >
              <div className="flex gap-4">
                <div className="w-[4em] ">
                  <img
                    className="size-[4em] object-cover rounded-full"
                    src={review.photo}
                    alt="review"
                  />
                </div>
                <div className="font-roboto">
                  <h1 className="font-medium">{review.name}</h1>
                  <span className="text-darkGray font-light">
                    {review.location}
                  </span>
                </div>
              </div>
              <div>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="hidden md:inline-block border border-accentRed-dark lg:w-[46em] rounded-lg mx-auto self-center relative" />
    </div>
  );
};

export default Review;

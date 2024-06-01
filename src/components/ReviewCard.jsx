import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, feedback, rating, customerName }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt="Customer"
        className="w-[120px] h-[120px] objec-cover rounded-full"
      />
      <p className="info-text max-w-sm m-auto text-center mt-6">{feedback}</p>
      <div className="flex justify-center items-center gap-2.5 my-4">
        <img
          src={star}
          alt="stars"
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className="text-xl text-slate-gray font-montserrat">({rating})</p>
      </div>
      <h3 className="text-3xl font-bold font-palanquin">{customerName}</h3>
    </div>
  );
};
export default ReviewCard;

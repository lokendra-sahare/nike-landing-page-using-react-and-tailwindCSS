import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-col flex-1 w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px], h-[280px]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="leading-normal text-slate-gray text-xl font-montserrat">
          (4.5)
        </p>
      </div>
      <h3 className="text-xl font-semibold mt-2 leading-normal font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-montserrat text-coral-red font-semibold">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;

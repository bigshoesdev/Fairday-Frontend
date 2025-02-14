import { FaStar, FaStarHalfAlt } from "react-icons/fa";

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex space-x-2 text-yellow-400">
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={index} />
      ))}
      {hasHalfStar && <FaStarHalfAlt />}
    </div>
  );
};

export default StarRating;

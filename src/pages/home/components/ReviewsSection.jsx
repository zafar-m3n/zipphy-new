import React from "react";
import { reviews } from "@/data/data";
import AnimatedContent from "@/components/animated/AnimatedContent";
import useWidth from "@/hooks/useWidth";
import ReviewCard from "./ReviewCard";

const ReviewsSection = () => {
  const { width, breakpoints } = useWidth();
  const isMobile = width < breakpoints.md;

  return (
    <div className="container mx-auto px-6 py-8 md:py-0 md:px-12 lg:px-16 flex flex-col justify-center items-center space-y-8 md:mb-8">
      <h2 className="text-[2rem] font-bold text-secondary text-center mb-12">What our customers say about us</h2>

      <div className={`grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full`}>
        {reviews.map((review, index) => (
          <ReviewCard review={review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;

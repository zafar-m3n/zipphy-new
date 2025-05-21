import React, { useState, useRef, useEffect } from "react";
import Rate from "@/components/ui/Rate";
import Icon from "@/components/ui/Icon";

const ReviewCard = ({ review }) => {
  const { name, profile_picture, rating, review: reviewText } = review;
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef(null);
  const wrapperRef = useRef(null);
  const charLimit = 110;
  const isTruncated = reviewText.length > charLimit;

  // Used to animate the height smoothly
  useEffect(() => {
    const contentEl = contentRef.current;
    const wrapperEl = wrapperRef.current;
    if (contentEl && wrapperEl) {
      wrapperEl.style.maxHeight = expanded ? `${contentEl.scrollHeight + 10}px` : "70px";
    }
  }, [expanded]);

  const displayText = !isTruncated ? reviewText : expanded ? reviewText : reviewText.slice(0, charLimit).trim() + "...";

  return (
    <div
      className="bg-[#010101] border rounded-3xl p-8 w-full max-w-sm flex flex-col justify-between"
      style={{
        borderColor: "#0bf40a77",
        boxShadow: `0 0 20px #0bf40a77`,
      }}
    >
      <div>
        <div className="flex items-center gap-3 mb-3">
          <img src={profile_picture} alt={name} className="w-10 h-10 rounded-full border border-gray-300" />
          <h3 className="text-sm font-semibold text-white">{name}</h3>
        </div>

        <Rate value={rating} allowHalf size={14} />
        <div ref={wrapperRef} className="overflow-hidden transition-all duration-500 ease-in-out mt-2">
          <p ref={contentRef} className="text-sm text-gray-200 leading-relaxed">
            {displayText}
            {isTruncated && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="ml-1 text-[#0bf40a] text-xs inline underline hover:text-[#15ff00] focus:outline-none"
              >
                {expanded ? "Read less" : "Read more"}
              </button>
            )}
          </p>
        </div>
      </div>

      {/* Sticky Footer */}
      <div className="pt-4 mt-3 border-t border-gray-700 text-right text-xs text-white">
        <p>
          Review from <span className="text-[#0bf40a]">TrustyAsia.com</span>
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;

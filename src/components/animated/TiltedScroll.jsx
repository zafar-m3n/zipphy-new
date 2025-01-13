import Icon from "@/components/ui/Icon";

const TiltedScroll = ({ items }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative overflow-hidden [mask-composite:intersect] [mask-image:linear-gradient(to_right,transparent,black_5rem),linear-gradient(to_left,transparent,black_5rem),linear-gradient(to_bottom,transparent,black_5rem),linear-gradient(to_top,transparent,black_5rem)]">
        <div className="grid h-[250px] w-[300px] gap-5 animate-skew-scroll grid-cols-1 sm:w-[300px] sm:grid-cols-1">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={item.onClick}
              className="flex items-center gap-2 cursor-pointer rounded-md border border-[#0bf40a] bg-[#010101] p-4 shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-xl"
            >
              <Icon icon={item.icon} />
              <p className="text-white">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TiltedScroll;

const ShinyText = ({
  text,
  disabled = false,
  speed = 5,
  textColor = "#b5b5b5a4",
  shineColor = "#b5b5b5",
  className = "",
}) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`inline-block ${disabled ? "" : "animate-shine"} ${className}`}
      style={{
        color: textColor,
        backgroundImage: `linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, ${shineColor} 50%, rgba(255, 255, 255, 0) 60%)`,
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        animationDuration: animationDuration,
      }}
    >
      {text}
    </div>
  );
};

export default ShinyText;

/** @format */

function Spinner() {
  return (
    <div className="flex items-center justify-center">
      <div
        className="w-24 h-24 rounded-full bg-gradient-conic border-[8px] border-transparent animate-spin"
        style={{
          backgroundImage: "conic-gradient(#0000 10%, #4F46E5 0)",
          WebkitMaskImage:
            "radial-gradient(farthest-side, #0000 calc(100% - 8px), #000)",
        }}
      ></div>
    </div>
  );
}

export default Spinner;

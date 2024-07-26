import React from "react";

const ComponentLayout = ({ children }) => {
  return (
    <div className="w-[700px] h-[500px] text-center font-extrabold bg-orange-500 border-8 border-purple-700 m-auto">
      {children}
    </div>
  );
};

export default ComponentLayout;

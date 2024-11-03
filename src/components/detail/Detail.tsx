import React from "react";

interface DetailProps {
  className?: string;
}

const Detail: React.FC<DetailProps> = ({ className }) => {
  return <div className={className}>Detail</div>;
};

export default Detail;

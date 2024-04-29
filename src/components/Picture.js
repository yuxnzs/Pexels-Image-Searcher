import React from "react";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <p>{data.photographer}</p>
      <div className="imageContainer">
        <img src={data.src.large2x} alt="Image" />
      </div>

      <a href={data.src.large2x} target="_blank" rel="noopener noreferrer">
        點擊下載
      </a>
    </div>
  );
};

export default Picture;

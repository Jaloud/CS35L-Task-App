import React from "react";

export default function ProgressBar(props) {
  const { color, percent } = props;
  return (
    <div className="progressBar">
      <span>{`${percent}%`}</span>
    </div>
  );
}

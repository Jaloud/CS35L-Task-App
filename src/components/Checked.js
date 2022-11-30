import React, { useState } from "react";

function Checked() {
  const [checked, setChecked] = useState(false);

  //   const handleChange = (event) => {
  //     setChecked(!checked);
  //   };

  return (
    <input
      className="checkBox"
      type="checkBox"
      checked={checked}
      onChange={() => setChecked(!checked)}
    />
  );
}

export default Checked;

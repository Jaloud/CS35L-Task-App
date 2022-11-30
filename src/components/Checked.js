import React, { useState } from "react";

function Checked(props) {
  const { value } = props;
  const [checked, setChecked] = useState(false);

  return (
    <input
      className="checkBox"
      type="checkBox"
      checked={checked}
      value={value}
      onChange={(checked) => setChecked(!checked)}
    />
  );
}

export default Checked;

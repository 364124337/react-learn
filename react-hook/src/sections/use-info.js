import React, { useState } from "react";
import useUserInfo from "../components/custom-hooks/use-user-info";

function UserInfo() {
  const [value, setValue] = useState("dan");
  const userInfo = useUserInfo(value);
  const str = JSON.stringify(
    userInfo,
    ["name", "company", "location", "blog", "email"],
    "\t"
  );
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <br />
      <pre>{str}</pre>
    </>
  );
}

export default UserInfo;

import React, { useContext } from "react";
import { Menu } from '.';
import { userContext } from "./context";


export default function Contact() {
  let user = useContext(userContext);
  return (
    <>
      <Menu />
      <h3>{user}</h3>
      <h3>มหาวิทยาลัยอุบลราชธานี</h3>
      <div>
        85 ถนนสถลมาร์ค ตำบลเมืองศรีไค<br />
        อำเภอวารินชำราบ จังหวัดอุบลราชธานี<br />
        34190
      </div>
    </>
  );
}
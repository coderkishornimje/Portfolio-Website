// randome profile picture genrate package
// npm i @dicebear/open-peeps
// npm i @dicebear/avatars

import React from 'react'
import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/open-peeps";
import { useMemo } from "react";
import './data.css';
function Avtar() {
  const avatar = useMemo(() => {
    return createAvatar(style, {
      dataUri: true,
      size: 128
    });
  }, []);

  return (
    <div>
    {/* <h1>Avtart</h1>
     */}
    <img src={avatar} id='comm-pic' loading="lazy" alt="profiles"/>
    </div>
  )
}

export default Avtar
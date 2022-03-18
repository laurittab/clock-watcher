import React, { useState, useRef } from "react";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import Portal from "@mui/material/Portal";
import ClockWatcher from "./ClockWatcher";
import TheBlurb from "./TheBlurb.jsx";

export default function ClockPortal() {
  const [show, setShow] = useState(false);
  const container = useRef(null);

  return (
    <div className="mainbox">
      <Button type="button" onClick={() => setShow(!show)}>
        {show ? "close blurb" : "the blurb"}
      </Button>
      <Box sx={{ p: 1, my: 1 }}>
        <ClockWatcher />
        {show ? (
          <Portal className="mainbox" container={container.current}>
            <TheBlurb />
          </Portal>
        ) : null}
      </Box>
      <Box
        className="mainbox"
        sx={{ p: 1, my: 1, width: "50%" }}
        ref={container}
      />
    </div>
  );
}

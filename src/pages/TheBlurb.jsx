import React from "react";

export default function theBlurb() {
  return (
    <div className="description">
      <h2>clock-watcher-for-all-time-zones</h2>
      <p>
        An in-your-face app displaying the current time, including hours minutes
        and seconds, for your time zone. It's ideal for those of us working from
        home, who need to end-shift at a precise time. <span>IYKYK!</span>{" "}
        <br />
        <br />
        Chances are, you're logged into a secure platform which doesn't show the
        time in seconds. Now you have a handy means for watching the seconds go
        by, whilst you hover your mouse over the button (on your work platform)
        to end all incoming calls.
        <br />
        <br />
        [TIPS]
        <br />
        --&#62; open the link from your phone
        <br />
        --&#62; from the browser option, 'Add to Home Screen'
        <br />
        --&#62; move the new icon front and centre on your device
        <br />
        --&#62; stop and start it as you need, it automatically jumps to the
        current time in start mode
        <br />
        <br />
        [NOTE]
        <br />
        --&#62; for desktop browsers, e.g. Chrome, you may need to add an
        extension to allow CORS
        <br />
      </p>
    </div>
  );
}

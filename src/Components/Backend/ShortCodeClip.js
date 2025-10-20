import { useState } from "react";
import { ClipboardButton } from "@wordpress/components";

const ClipBoard = ({ shortcode }) => {
  const [hasCopied, setHasCopied] = useState(false);

  return (
    <div className="clipBoard">
      <div className="clipBtnWrapper">
        <p>
          {" "}
          Copy this shortcode and paste it into your post, page, or text widget
          content{" "}
        </p>
        <ClipboardButton
          text={shortcode}
          onCopy={() => setHasCopied(true)}
          onFinishCopy={() => setHasCopied(false)}
        >
          {hasCopied ? "Copied Shortcode!" : shortcode}
        </ClipboardButton>
      </div>
    </div>
  );
};
export default ClipBoard;

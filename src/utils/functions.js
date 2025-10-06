import { produce } from "immer";

export const updateData = (attr, value, ...props) => {
  if (props.length === 0) {
    return value;
  }
  const [currentProp, ...remainingProps] = props;
  if (remainingProps.length === 0) {
    return produce(attr, (draft) => {
      draft[currentProp] = value;
    });
  }
  return produce(attr, (draft) => {
    if (!Object.prototype.hasOwnProperty.call(draft, currentProp)) {
      draft[currentProp] = {};
    }
    draft[currentProp] = updateData(
      draft[currentProp],
      value,
      ...remainingProps
    );
  });
};

export const themeSwitch = (theme = "default", attributes) =>
  produce(attributes, (draft) => {
    draft["theme"] = theme;

    switch (theme) {
      case "default":
        draft["barBackground"] = "#dddddd";
        draft["barDotColor"] = "#dddddd";
        draft["itemBg"] = "#ffffff";
        draft["labelColor"] = "#000";
        draft["itemColor"] = " #4c5663";
        draft["contentBorder"] = {
          width: "1px",
          style: "solid",
          color: "#dddddd",
        };
        draft["labelTypo"]["fontVariant"] = "300";
        draft["labelTypo"]["fontWeight"] = 300;
        break;
      case "timeline-with-accordion":
        draft["type"] = "vertical";
        draft["barBackground"] = "#dddddd";
        draft["barDotColor"] = "#dddddd";
        draft["itemBg"] = "#ffffff";
        draft["labelColor"] = "#000";
        draft["itemColor"] = " #4c5663";
        draft["contentBorder"] = {
          width: "1px",
          style: "solid",
          color: "#dddddd",
        };
        draft["labelTypo"]["fontVariant"] = "300";
        draft["labelTypo"]["fontWeight"] = 300;
        break;
      case "theme-2":
        draft["barBackground"] = "#ff4400";
        draft["dateStyles"]["dateColor"] = "#000000";
        draft["itemColor"] = " #4c5663";
        draft["itemBg"] = "#ffffff";
        draft["labelColor"] = "#000";
        draft["contentBorder"] = {
          width: "1px",
          style: "solid",
          color: "#dddddd",
        };
        draft["labelTypo"]["fontVariant"] = "500";
        draft["labelTypo"]["fontWeight"] = 500;
        break;
      case "theme-3":
        draft["barDotColor"] = "#2664eb";
        draft["dateStyles"]["dateColor"] = "#2664eb";
        draft["contentBorder"] = {
          width: "1px",
          style: "solid",
          color: "#dddddd",
        };
        draft["dateStyles"]["dateTypo"]["fontSize"]["desktop"] = 18;
        draft["dateStyles"]["dateTypo"]["fontVariant"] = "700";
        draft["dateStyles"]["dateTypo"]["fontWeight"] = 700;
        draft["labelTypo"]["fontSize"]["desktop"] = 20;
        draft["itemBg"] = "#ffffff";
        draft["itemColor"] = " #4c5663";
        draft["labelColor"] = "#000000";
        break;
      case "theme-4":
        draft["contentBorder"] = {
          top: { width: "5px", style: "solid", color: "#06b6d4" },
          right: { width: "0px", style: "solid", color: "#0000" },
          bottom: { width: "0px", style: "solid", color: "#0000" },
          left: { width: "0px", style: "solid", color: "#0000" },
        };
        draft["barBackground"] = "#06b6d4";
        draft["dateStyles"]["dateColor"] = "#ffffff";
        draft["dateStyles"]["dateTypo"]["fontSize"]["desktop"] = 16;
        break;
      case "theme-5":
        draft["contentBorder"] = {
          width: "1px",
          style: "solid",
          color: "#dddddd",
        };
        draft["barBackground"] = "#f97316";
        draft["barDotColor"] = "#f97316";
        draft["itemBg"] = "#ffffff";
        draft["labelColor"] = "#000000";
        draft["itemColor"] = " #4c5663";
        draft["dateStyles"]["dateColor"] = "#f97316";
        draft["dateStyles"]["dateTypo"]["fontSize"]["desktop"] = 18;
        draft["dateStyles"]["dateTypo"]["fontVariant"] = "700";
        draft["dateStyles"]["dateTypo"]["fontWeight"] = 700;
        draft["labelTypo"]["fontSize"]["desktop"] = 20;
        break;
      case "theme-6":
        draft["contentBorder"] = {
          width: "0px",
          style: "solid",
          color: "#0000",
        };
        draft["itemBg"] = "#dc2626";
        draft["vigibleItems"] = 3;
        draft["labelColor"] = "#ffffff";
        draft["itemColor"] = "#ffedb3";
        draft["barBackground"] = "#f97316";
        draft["barDotColor"] = "#e8471e";
        draft["labelTypo"]["fontSize"]["desktop"] = 18;
        draft["labelTypo"]["fontVariant"] = "700";
        draft["labelTypo"]["fontWeight"] = 700;
        break;
      case "theme-7":
        draft["labelColor"] = "#000000";
        draft["itemColor"] = "black";
        draft["barBackground"] = "#000000";
        draft["barDotColor"] = "#787878";
        draft["dateStyles"]["dateTypo"]["fontSize"]["desktop"] = 35;
        draft["dateStyles"]["dateTypo"]["fontVariant"] = "400";
        draft["dateStyles"]["dateTypo"]["fontWeight"] = 400;
        draft["labelTypo"]["fontSize"]["desktop"] = 35;
        draft["labelTypo"]["fontVariant"] = "400";
        draft["labelTypo"]["fontWeight"] = 400;
        break;
    }
  });

<div style="padding:18px;text-align:center;border:1px solid #eee;border-radius:8px;">
  <p style="margin:0 0 12px;font-size:16px;line-height:1.5;color:#333;">
    This is a simple paragraph explaining the image below. Use this for short
    announcements or featured notes.
  </p>
  <img
    src="https://images.pexels.com/photos/12323407/pexels-photo-12323407.jpeg"
    alt="Beautiful scene"
    style="width:100%;height:300px;border-radius:6px;margin-bottom:12px;display:block;"
  />
  <a
    href="#"
    style="display:inline-block;padding:10px 18px;border-radius:6px;background:#0073aa;color:#fff;text-decoration:none;font-weight:600;"
  >
    Learn more
  </a>
</div>;

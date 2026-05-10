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

    }
  });

export const toolTipPresets = [
  {
    label: "Default",
    value: "default",
    height: "auto",
    width: "160px",
    isPro: false,
  },
  {
    label: "Accordion Timeline",
    value: "timeline-with-accordion",
    height: "auto",
    width: "160px",
    isPro: false,
  }
];

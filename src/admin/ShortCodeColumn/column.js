import './column.scss';

window.copyTlgbAdminShortcode = (id) => {
  var input = document.querySelector("#tlgbAdminShortcode-" + id + " input");
  var tooltip = document.querySelector(
    "#tlgbAdminShortcode-" + id + " .tooltip"
  );
  input.select();
  input.setSelectionRange(0, 30);
  document.execCommand("copy");
  tooltip.innerHTML = wp.i18n.__("Copied Successfully!", "timeline-block");
  setTimeout(() => {
    tooltip.innerHTML = wp.i18n.__("Copy To Clipboard", "timeline-block");
  }, 1500);
};

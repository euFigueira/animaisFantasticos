export default function outsideClick(element, events, callback) {
  const outside = "data-ouside";
  const html = document.documentElement;

  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));
    });
    element.setAttribute(outside, "");
  }
  function handlesOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside, "");
      events.forEach((userEvent) => {
        html.removeEventListener("click", handleOutsideClick);
      });
      callback();
    }
  }
}

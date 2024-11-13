

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");

  dropdownMenus.forEach((menu) => {
    ["touchstart", "click"].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });
}

function handleClick(event) {
  event.preventDefault();

  this.classList.add("active");
  outsideClick(this, ["touchstart", "click"], () => {
    this.classList.remove("active");
  });
}

function outsideClick(element, events, callback) {
  const outside = "data-outside";
  const html = document.documentElement;

  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      html.addEventListener("click", handleOutsideClick);
    });
    element.setAttribute(outside, "");
  }
  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside, "");
      events.forEach((userEvent) => {
        html.removeEventListener("click", handleOutsideClick);
      });
      callback();
    }
  }
}

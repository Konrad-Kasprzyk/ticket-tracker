const breakpoints = {
  small: "600px",
  medium: "900px",
  large: "1200px",
  extra_large: "1536px",
};

for (const [css_class, width] of Object.entries(breakpoints)) {
  let media_query = window.matchMedia(`(min-width: ${width})`);
  let toggle_breakpoint = function () {
    if (media_query.matches) {
      document.body.classList.add(css_class);
    } else {
      document.body.classList.remove(css_class);
    }
  };
  // watch for changes to update the value:
  media_query.addEventListener("change", toggle_breakpoint);
  // call the function immediately to set the initial value:
  toggle_breakpoint();
}

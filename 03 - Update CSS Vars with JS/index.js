const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
  //   console.log(this.value);
  const suffix = this.dataset.sizing || "";

  //   dynamically set CSS custom properties (variables)
  //   property name is constructed using --${this.name}, which corresponds to the name attribute of the input element
  //   value for the property is set to this.value + suffix, which combines the input's current value with the suffix (e.g., 10px)
  document.documentElement.style.setProperty(
    `--${this.name} `,
    this.value + suffix
  );
}

inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("input", handleUpdate));

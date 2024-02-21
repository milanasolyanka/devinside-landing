function scrollToForm(): void {
  const formElement: HTMLElement | null = document.getElementById("form");

  if (formElement) {
    formElement.scrollIntoView({ behavior: "smooth" });
  }
}

export default scrollToForm;

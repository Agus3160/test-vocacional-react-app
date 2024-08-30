const handleBeforeUnload = (event: BeforeUnloadEvent) => {
  const message = "Are you sure you want to leave this page? Unsaved changes will be lost.";
  event.preventDefault();
  return message;
};

export { handleBeforeUnload }
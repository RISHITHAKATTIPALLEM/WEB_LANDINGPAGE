// FAQ toggle
document.querySelectorAll(".question").forEach((btn) => {
    btn.addEventListener("click", () => {
      const answer = btn.nextElementSibling;
      answer.style.display = answer.style.display === "block" ? "none" : "block";
    });
  });
// FAQ toggle behavior
document.querySelectorAll(".question").forEach((btn) => {
    btn.addEventListener("click", () => {
      const answer = btn.nextElementSibling;
      const isOpen = answer.style.display === "block";
  
      // Close all open answers
      document.querySelectorAll(".answer").forEach((a) => a.style.display = "none");
      document.querySelectorAll(".question").forEach((q) => q.classList.remove("active"));
  
      // Open the clicked one
      if (!isOpen) {
        answer.style.display = "block";
        btn.classList.add("active");
      }
    });
  });
    
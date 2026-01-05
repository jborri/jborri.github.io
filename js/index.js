const lotusImage = document.getElementById("lotus");
const lotusModal = document.getElementById("lotus-modal");
const closeLotus = document.getElementById("close-lotus");

// Open the modal when the lotus image is clicked
lotusImage.addEventListener("click", () => {
  lotusModal.classList.remove("hidden");
});

// Close the modal when the close button is clicked
closeLotus.addEventListener("click", () => {
  lotusModal.classList.add("hidden");
});

// Close the modal when clicking outside the modal content
window.addEventListener("click", (event) => {
  if (event.target === lotusModal) {
    lotusModal.classList.add("hidden");
  }
});
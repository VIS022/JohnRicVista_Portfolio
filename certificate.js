// Function to open the modal with the clicked image
function openModal(imgElement) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");

    // Ensure modal is displayed only when an image is clicked
    modal.style.display = "flex";
    modalImg.src = imgElement.src;
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none"; // Close the modal
}

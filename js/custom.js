// JavaScript Document
/*window.openModal = function (img) {
	const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  modal.style.display = "block";
  modalImg.src = img.src;
}

window.closeModal = function () {
  document.getElementById("modal").style.display = "none";
}*/

// Function to open modal and display the clicked image
// Mở modal
window.openModal = function (img) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  modal.style.display = "flex"; // dùng flex nên để là flex
  modalImg.src = img.src;
}

// Đóng modal khi click ra ngoài ảnh
window.closeModal = function (event) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");

  // Chỉ đóng modal nếu click KHÔNG phải vào ảnh
  if (!modalImg.contains(event.target)) {
    modal.style.display = "none";
  }
}




/*window.openModal = function (img) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  modal.style.display = "block";
  modalImg.src = img.src;
}

window.addEventListener("click", function (event) {
  const modal = document.getElementById("modal");
  const modalImg document.getElementById("modal-img");
  // Nếu đang hiển thị modal và click vào vùng ngoài ảnh thì ẩn đi
  if (event.target === modal) {
    modal.style.display = "none";
  }
});*/




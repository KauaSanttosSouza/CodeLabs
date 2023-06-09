export default function controls({PresentationVideo}) {

function viewModal() {
   PresentationVideo.classList.remove("hide");
}
function closeModal() {
   PresentationVideo.classList.add("hide");
}

return {
   viewModal,
   closeModal
}
}

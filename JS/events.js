import {
   buttonPresentationVideo,
   buttonClosePresentationVideo,
} from "./elements.js"

export default function events({
   control
}) {

   function startModal() {
      buttonPresentationVideo.addEventListener("click", () => {
         control.viewModal()
        })
   }
   startModal()
     
   function stopModal() {
      buttonClosePresentationVideo.addEventListener("click", () => {
       control.closeModal()
      })
   }
   stopModal()


   return {
      startModal,
      stopModal
   }
}

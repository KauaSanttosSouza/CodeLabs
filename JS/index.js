import {
   PresentationVideo,
} from "./elements.js"

import controls from "./controls.js"
import events from "./events.js"

const control = controls({PresentationVideo})

events({
   control
})
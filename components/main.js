
// takes all the features we are exporting from views and placing them
// in an this object called views.
import html from "html-literal";
import * as views from "../views";

export default () => html`
   ${views['home']()}
   ${views['aboutMe']()}
   ${views['pizza']()}
   ${views['order']()}
`;

// componets file string or variable that ref each key in the views object temperate literal


// replaced with
export default state => html`${views[state.view](state)} `;
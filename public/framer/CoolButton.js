import { render } from "react-dom";
import { html } from "htm/react";
import CoolButton from "https://framer.com/m/CoolButton-pyyo.js@zH4xWO6VPpzOeabNGwey";

window.CoolButton = (id, props) => {
  render(
    html`
      <${CoolButton}
        title=${props.title}
        onClick=${props.onClick}
      >
      </${CoolButton}>
    `,
    document.getElementById(id)
  );
};

import CoolButton from "https://framer.com/m/CoolButton-pyyo.js@zH4xWO6VPpzOeabNGwey";

export default function comp() {
  return (
    <CoolButton
      title="This button is made in Framer"
      onClick={() => {
        window.open("https://www.framer.com/docs/guides/handshake/", "_blank");
      }}
    ></CoolButton>
  );
}

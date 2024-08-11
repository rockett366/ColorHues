import { LuFish } from "react-icons/lu";
// import { MainBackgound } from "../../App.css";

function Right() {
  // const assignRef = (element) => {
  //   this.container = element;
  // };
  // assignRef(this);
  // const getStyle = () => {
  //   const styles = this.container.style;
  //   console.log(styles);
  //   // for getting computed styles
  //   const computed = window
  //     .getComputedStyle(this.container)
  //     .getPropertyValue("background-color"); // border-radius can be replaced with any other style attributes;
  //   console.log(computed);
  // };

  // const myObj = window.getComputedStyle(document.getElementById("home"));
  // let myelement = myObj.getPropertyValue("background-color");

  // const element = await Right.waitForSelector("div");
  // const color = await element.evaluate((el) => {
  //   return window.getComputedStyle(el).getPropertyValue("background-color");
  // });
  // console.log(color);

  // const colorDisplay = () => {
  //   let element3 = document.getElementById("exampleElement");
  //   let backgroundColor3 = element3.style.backgroundColor;
  //   document.getElementById("colorDisplay").innerText +=
  //     "\nColor: " + backgroundColor3;
  // };

  return (
    <div className="mainComponent">
      <div className="title">
        <h1>Color Hue</h1>
      </div>
      <div className="firstContainter">
        <div className="logoContainer">
          <LuFish className="logo" />
        </div>
        <div className="firstContainerWords">
          <h2>A Colorful Pallet</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          </p>
        </div>
      </div>
      <div className="closureComponent" id="exampleElement">
        <h2>Color Pallet</h2>
        <p>Background: #fff </p>
      </div>
      <p id="colorDisplay"></p>
    </div>
  );
}

export default Right;

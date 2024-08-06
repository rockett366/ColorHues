import { LuFish } from "react-icons/lu";

function Right() {
  const assignRef = (element) => {
    this.container = element;
  };
  assignRef(this);
  const getStyle = () => {
    const styles = this.container.style;
    console.log(styles);
    // for getting computed styles
    const computed = window
      .getComputedStyle(this.container)
      .getPropertyValue("background-color"); // border-radius can be replaced with any other style attributes;
    console.log(computed);
  };

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
      <div className="closureComponent">
        <h2>Color Pallet</h2>
        <p>Background: #fff {getStyle()}</p>
      </div>
    </div>
  );
}

export default Right;

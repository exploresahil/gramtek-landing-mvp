import OptImage from "@/components/common/image/OptImage";

const test = () => {
  return (
    <section id="test" style={{ display: "flex" }}>
      <div className="img_container">
        <OptImage
          src="gramtek_mockup_left.png"
          width={500}
          height={1014}
          loading="eager"
        />
      </div>
      <div
        className="img_container"
        style={{
          width: "500px",
          height: "1014px",
        }}
      >
        <img src="/assets/distribution/gramtek_mockup_left.png" alt="phone" />
      </div>
    </section>
  );
};

export default test;

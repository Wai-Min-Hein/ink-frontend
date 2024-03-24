const RenderService = ({ service }) => {
  const { title, text, img } = service;
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
      }}
      className="basis-[32%] bg-center w-full h-80 object-cover relative z-20 rounded"
    >
      <div className="overlay absolute top-0 right-0 z-30 bg-black opacity-60 w-full h-full"></div>

      <div className="relative z-30 pt-[40%] px-12">
        <h6>{title}</h6>
        <p>{text}</p>
        <p className="c cursor-pointer">Read More</p>
      </div>
    </div>
  );
};

export default RenderService;
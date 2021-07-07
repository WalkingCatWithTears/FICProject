const Image = ({ style, index, setIndex }) => {
  console.log(style);
  const { useState, useEffect } = React;
  const [currentImage, setCurrentImage] = useState(style[0]);
  const [expand, setexpand] = useState(false);

  useEffect(() => {
    setCurrentImage(style[index]);
  });

  const changeImage = (inc) => {
    let idx = index + inc;
    if (idx <= style.length - 1 && idx >= 0) {
      setCurrentImage(style[index + inc]);
      setIndex(index + inc);
    }
  };

  return (
    <div className="slider">
      <div className="navigation-expand">
        <div
          id="icon"
          className="fas fa-expand ml-50 cursor-pointer"
          onClick={() => setexpand(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
            />
          </svg>
        </div>
      </div>
      {expand ? (
        <div className="fixed w-screen h-screen top-0 left-0 bg-gray-300 z-50">
          <div className="slide active  m-auto ">
            <div
              id="icon"
              className="fas fa-expand cursor-pointer"
              onClick={() => setexpand(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                />
              </svg>
            </div>
            <img src={currentImage.url} alt="" />
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <div className="slide active">
        <img src={currentImage.url} alt=""  style={{height:"100%"}}/>
      </div>
      <div className="navigation">
        <div
          className="fas fa-chevron-left prev-btn"
          onClick={() => changeImage(-1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>
        <div
          className="fas fa-chevron-right next-btn"
          onClick={() => changeImage(1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
      <div className="navigation-visibility">
        {style.map((elem, index) => (
          <div className="slide-icon active cursor-pointer" key={index}>
            <img src={elem.thumbnail_url} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Image;

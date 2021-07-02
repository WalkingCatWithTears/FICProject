const Image = ({ style, index, setIndex }) => {
  console.log(style);
  const { useState, useEffect } = React;
  const [currentImage, setCurrentImage] = useState(style[0]);
  const [expand,setexpand] = useState(false); 


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
        <i id="icon" className="fas fa-expand ml-50 cursor-pointer" onClick={()=>setexpand(true)}></i>
      </div>
     {
       expand ?   
       <div className="fixed w-screen h-screen top-0 left-0 bg-gray-300 z-50">
       <div className="slide active  m-auto ">
       <i id="icon" className="fas fa-expand cursor-pointer" onClick={()=>setexpand(false)}></i>
         <img   src={currentImage.url} alt="" />
       </div>
     </div> : <div></div>
     }
      <div className="slide active">
        <img src={currentImage.url} alt="" />
      </div>
      <div className="navigation">
        <i
          className="fas fa-chevron-left prev-btn"
          onClick={() => changeImage(-1)}
        ></i>
        <i
          className="fas fa-chevron-right next-btn"
          onClick={() => changeImage(1)}
        ></i>
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

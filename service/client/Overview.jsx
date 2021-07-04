import "./index.css";
import Info from "./components/Info.jsx";
import Image from "./components/Image.jsx";
import axios from "axios";

const NameOfTheService = () => {
  const { useState, useEffect } = React;
  const [products, setProducts] = useState([]);
  const [styles, setStyles] = useState([]);
  const [index, setIndex] = useState(0);
  const [currentStyle, setCurrentStyle] = useState({});
  const [loading, setLoading] = useState(true);
  const [name,setname] = useState(''); 
  const [quantity,setquantity] = useState([]); 
  
  // const id = window.location.href.split('/')[3];
  
  const id =11004
  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/${id}`)
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`http://localhost:3001/api/${id}/styles`)
      .then((response) => {
        console.log(response);
        setStyles(response.data.results);
        setCurrentStyle(response.data.results[0]);
        setLoading(false);
        setname(response.data.results[0].name)
        setquantity(response.data.results[0].skus);

      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleChange(input) {
      setCurrentStyle(styles[input]);
      setIndex(0);
      setname(styles[input].name)
      setquantity(styles[input].skus); 
  }

  return (
    <div className="flex w-full">
      {loading ? null : <Image index={index} setIndex={setIndex} style={currentStyle.photos} />}
      <Info quantity={quantity} handleChange={handleChange} name={name} styles={styles} products={products} />
    </div>
  );
};

export default NameOfTheService;

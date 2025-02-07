import { useEffect, useState } from "react";


const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://api.restful-api.dev/objects")
          .then((response) => response.json())
          .then((data) => {
            setProducts(data);
            setLoading(false);
          })
          .catch((error) => console.error("Error fetching data:", error));
      }, []);
    return (
        <div>
            
        </div>
    );
};

export default Products;
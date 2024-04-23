import React, { useEffect, useState } from "react";
import '../styles/Store/dashboard.css'
import Carousel from "../components/Store/Carousel";
import { db } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "@firebase/firestore";

const Store = () => {
    const [loadingGetting, setLoadingGetting] = useState(true);
    const navigate = useNavigate();
    const [elementsInfo, setElementsInfo] = useState({
        title: "Tarjeta",
        description: "",
        profilePhoto: {
          name: "profilePhoto",
          file: null,
          url: "",
        },
        coverPhoto: {
          name: "coverPhoto",
          file: null,
          url: "",
        },
      });

    const [products, setProducts] = useState([]);
    const [actualCategory, setActualCategory] = useState("0");
    const [indexCarousel, setIndexCarousel] = useState(0);

    const color = elementsInfo.theme === "dark" ? "#FFF" : "#000";
    const backgroundColor = elementsInfo.theme === "dark" ? "#25242B" : "#FFF";

    useEffect(() => {
        const fetchCardData = async () => {
            setLoadingGetting(true);
            try {
                const cardDocRef = doc(db, "admin", "store");
                const cardSnapshot = await getDoc(cardDocRef);

                if (cardSnapshot.exists()) {
                    const cardFields = cardSnapshot.data();
                    if (!cardFields.productCategories) cardFields["productCategories"] = [];
                    if (!cardFields.products) cardFields["products"] = [];
                    if (!cardFields.theme) cardFields["theme"] = "light";
                    if (!cardFields.color) cardFields["color"] = "#FFFFFF";
                    setElementsInfo(cardFields);
                    setProducts(cardFields.products);
                }
            } catch (error) {
                navigate("/error")
            }
            setLoadingGetting(false);
        };

        fetchCardData();
    }, []);


    useEffect(() => {
        if (actualCategory === "0") {
            setIndexCarousel(0);
            setProducts(elementsInfo.products);
        } else {
            const categoryProducts = elementsInfo.products.filter(prod => prod.category === actualCategory);
            setIndexCarousel(0);
            setProducts(categoryProducts);
        }
    }, [actualCategory, elementsInfo.products]);

    const changeCategory = (id) => {
        setActualCategory(id);
    }

    const isNotCategoryEmpty = (cat) => {
        return elementsInfo.products.some(prod => (prod.category === cat.id));
    }

    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                backgroundColor,
                borderWidth: 2,
                overflow: "scroll",
                overflowX: "hidden",
                position: "relative",
            }}
            className="preview-container"
        >
            <style>
                {`
                .preview-container::-webkit-scrollbar {
                    width: "5px"};
                }
                .preview-container::-webkit-scrollbar-thumb {
                    background: ${elementsInfo.color}
                }
                .preview-container::-webkit-scrollbar-track{
                    background: ${backgroundColor}
                }
                `}
            </style>

            

            <div className="products-preview-container">
                <div>
                    Productos
                </div>

                {loadingGetting ? (
                <div className="loader_container_store">
                    <span className="loader_posFixed"></span>
                </div>
                ) : (elementsInfo.productCategories && 
                 <> 
                <div className="table-wrapper">
                    <style>{`
                    .table-wrapper::-webkit-scrollbar-thumb {
                        background-color: ${color};
                        border-radius: 5px;
                    }
                    `}
                    </style>
                    <table className="scrollable-table">
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td key={"categ-" + 0}>
                                    <div className={"category_option"+(actualCategory === "0" ? " selected-cat" : "")} onClick={() => changeCategory("0")} style={{color: color}}>Todo</div>
                                </td>
                                {elementsInfo.productCategories.map((cat) => (
                                    isNotCategoryEmpty(cat) &&
                                    <td key={"categ-" + cat.id}>
                                        <div className={"category_option"+(actualCategory === cat.id ? " selected-cat" : "")} onClick={() => changeCategory(cat.id)} style={{color: color}}>{cat.title}</div>
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div> 
                <div className="carrousel-products">
                    <Carousel index={indexCarousel} products={products} elemInfo={elementsInfo} color={color}></Carousel>
                </div> 
                </>)
                } 
            </div>
        </div>
    );
};

export default Store;

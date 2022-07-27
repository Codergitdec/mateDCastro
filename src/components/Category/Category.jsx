import React from "react";
import { useParams } from "react-router-dom";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

const Category = () => {
    const { categoryId } = useParams();

    return (
<div className="container">
    <div className="contain">
        <ItemListContainer categoryId={categoryId} />
    </div>
</div>
    )

}
export default Category;
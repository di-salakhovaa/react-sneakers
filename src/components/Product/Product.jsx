import formatMoney from "../../utils/formatMoney";
import { HeartIcon, PlusIcon } from "../Icons/Icons";

const Product = ({ product }) => {
    return (
        <div className="product">
            <div className="product__action">
                <HeartIcon />
            </div>

            <img src={product.preview} alt={product.name} />

            <h3>{product.name}</h3>

            <div className="product__footer">
                <div className="price">
                    <span className="gray">Цена:</span>
                    <span className="value">{formatMoney(product.price)}</span>
                </div>

                <button>
                    <PlusIcon size={14} />
                </button>
            </div>

        </div>
    );
}

export default Product;
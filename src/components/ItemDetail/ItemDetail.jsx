/*========================================
        import dependencies
========================================*/
import * as OrderApi from "../../utilities/orders-api.js"

/*========================================
        Import Css
========================================*/
import "./ItemDetail.css"

export default function ItemDetail({ setShowItemDetail, itemDetail }) {

    const leaveDetailWindow = (e) => {
        setShowItemDetail(false);
    }

    /*========================================
            functions
    ========================================*/
    const handleClick = () => {
        OrderApi.addToCart(itemDetail)
    }


    return (
        <div className="item-detail-container">
            <div className="item-detail-card">
                <button className="item-detail-close-btn" onClick={leaveDetailWindow}>X</button>
                <h3 className="item-detail-name">{itemDetail.title}</h3>
                    <img className="item-detail-img" src={itemDetail.image}></img>
                <p className="item-detail-desc">{itemDetail.description}</p>
                <div className="info">
                    <div className="flex-start">
                        <p className="item-detail-price">Price: ${itemDetail.price}</p>
                    </div>
                    <div className="flex-end">
                        <button className="btn-add" onClick={handleClick}>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
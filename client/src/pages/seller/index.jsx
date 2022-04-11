import React, { Component } from "react";
import CombinedFooter from "../../components/footer/CombinedFooter";
import ProductCard from "../../components/Product/ProductCard";
import Modal from "../../components/Modal/Modal";
import "./seller.css";
export default class Seller extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="SellerHeader">
<h1>PRODUCTS</h1>
 <Modal />
        </div>
        
        <div className="SellerProducts">
          <ProductCard
            name="Ayman"
            price="122"
            imgLink="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/666834ee-1d3f-46e5-91ee-7ef360a58ed5/zoomx-invincible-run-flyknit-mens-road-running-shoes-sP2zk7.png"
            buttons={["Edit", " Delete"]}
          />
 <ProductCard
            name="Ayman"
            price="122"
            imgLink="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/666834ee-1d3f-46e5-91ee-7ef360a58ed5/zoomx-invincible-run-flyknit-mens-road-running-shoes-sP2zk7.png"
            buttons={["Edit", " Delete"]}
          /> <ProductCard
          name="Ayman"
          price="122"
          imgLink="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/666834ee-1d3f-46e5-91ee-7ef360a58ed5/zoomx-invincible-run-flyknit-mens-road-running-shoes-sP2zk7.png"
          buttons={["Edit", " Delete"]}
        /> <ProductCard
        name="Ayman"
        price="122"
        imgLink="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/666834ee-1d3f-46e5-91ee-7ef360a58ed5/zoomx-invincible-run-flyknit-mens-road-running-shoes-sP2zk7.png"
        buttons={["Edit", " Delete"]}
      /> <ProductCard
      name="Ayman"
      price="122"
      imgLink="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/666834ee-1d3f-46e5-91ee-7ef360a58ed5/zoomx-invincible-run-flyknit-mens-road-running-shoes-sP2zk7.png"
      buttons={["Edit", " Delete"]}
    />
        </div>

        <CombinedFooter />
      </div>
    );
  }
}

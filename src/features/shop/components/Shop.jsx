import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchShopsByFiltersAsync, selectShops } from "../shopSlice";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ShopSearch from "./ShopSearch";
import HeroSection from "./HeroSection";
const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchShopsByFiltersAsync({
        filter: {},
        sort: {},
        pagination: {},
        admin: false,
      })
    );
  }, [dispatch]);
  const shops = useSelector(selectShops);

  return (
    <div>
      <HeroSection />
      <ShopSearch />
      <Container>
        {shops && shops.map((shop, index) => (
            <div key={shop.id} className="card">
              <Link to={`/shop/${shop.id}`}>
                <div className="name">{shop.storeName}</div>
                <div className="shopDetails">
                  <div className="image">
                    <img src={shop.images.logo} alt="shopLogo" />
                  </div>
                  <div className="shopDetailsRight">
                    <div className="shopDescription">
                      <div>{shop.description}</div>
                      <div>
                        <span>Contact :- </span>
                        {shop.shopkeeper.contact}
                      </div>

                      <div>{shop.minDiscount}% min off on each item</div>
                      <div className="shopRating">{shop.rating}</div>
                      <div className="btn">Visit Artist Store</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 16px;
  margin: 10px;
  justify-items: center;
  align-content: center;
  a {
    text-decoration: none;
    color: #f2e3e3;
  }
  .card {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-width: 600px;

    .name {
      background-color: #000000;
      color: #f2e3e3;
      border-radius: 10px 10px 0 0;
      text-align: center;
      padding: 3px;
      font-size: larger;
    }
  }
  .card:hover{
    cursor: pointer;
  transition: transform 0.3s ease-in-out;
  animation: bounce 1.5s infinite; /* Add the bounce animation */

  }

  .shopDetails {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: #d9d9d9;
    color: black;
    border-radius: 0 0 10px 10px;

    .image {
      width: 30%;
      overflow: hidden;
      border-radius: 0 0 0 10px;
      img {
        max-width: 100%;
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        margin: 0 auto;
      }
    }

    .shopDetailsRight {
      border-radius: 0 0 10px 10px;

      width: 70%;
      .shopDescription {
        display: flex;
        flex-direction: column;
        height: 100%;
        padding: 0 10px;
        .discount {
          display: flex;
          flex-direction: column;
        }
      }
      .btn {
        cursor: pointer;
        user-select: none;
        background-color: #6933d3;
        color: #f2e3e3;
        padding: 6px;
        margin: 3px;
        border-radius: 10px;
        text-align: center;
      }
    }
  }
`;

export default Shop;

import React, { useEffect, useState } from "react";
import classes from "./Products.module.css";
import { GrAppsRounded } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillCircleFill } from "react-icons/bs";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";

import { Add } from "../../actions/index";
import { useDispatch } from "react-redux";
import dummy_data from "../../APi";
import Slider from "../../UI/Slider";
import { Link, NavLink } from "react-router-dom";

const Products = () => {
  const [filteredData, setFilteredData] = useState(dummy_data);
  const defailtFilters = {
    search: "",
    category: "all",
    company: "all",
    color: "all",
    shipping: "",
    price: 3099.99,
    sortType: "Lowest",
  };
  const [filters, setFilters] = useState(defailtFilters);
  const [productsInRow, setProductsInRow] = useState(false);
  const [isFreeShipping, setIsFreeShipping] = useState(false);
  const [selectProduct, setSelectProduct] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    genericFilterSetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  useEffect(() => {
    FilterCategory("all");
    FilterColor("all");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const inputEvent = (e) => {
    setFilters({ ...filters, search: e.target.value });
    genericFilterSetData();
  };

  const genericFilterSetData = () => {
    console.log(filters, "filteredData in generic");
    const allFilteredData = dummy_data
      .filter((product) => {
        if (filters.category !== "all") {
          return (
            product.category.toLocaleLowerCase() ===
            filters.category.toLocaleLowerCase()
          );
        }
        return product;
      })
      .filter((product) => {
        if (filters.search !== "") {
          return product.name
            .toLocaleLowerCase()
            .includes(filters.search.toLocaleLowerCase());
        }
        return product;
      })
      .filter((product) => {
        if (filters.company !== "all") {
          return (
            product.company.toLocaleLowerCase() ===
            filters.company.toLocaleLowerCase()
          );
        }
        return product;
      })
      .filter((product) => {
        if (filters.color !== "all") {
          return product.color.includes(filters.color);
        }

        return product;
      })
      .filter((product) => {
        if (filters.shipping) {
          return product.freeShipping === isFreeShipping;
        }

        return product;
      })
      .filter((product) => {
        if (filters.price !== 1) {
          return product.price < filters.price;
        }
        return product;
      });
    SortingsProducts(filters.sortType, allFilteredData);
  };
  /////// sortings ////////
  const SortingsProducts = (value, passedFilteredData) => {
    const sortType = value;
    console.log(sortType, sortType === "Lowest");
    let AllProducts = [...passedFilteredData];

    if (sortType === "Lowest") {
      AllProducts = AllProducts.sort((a, b) => a.price - b.price);
    } else if (sortType === "Highest") {
      AllProducts = AllProducts.sort((a, b) => b.price - a.price);
    } else if (sortType === "alphabatically") {
      AllProducts = AllProducts.sort((a, b) => {
        const first = a.name.toLocaleLowerCase();
        const second = b.name.toLocaleLowerCase();
        if (first < second) {
          return -1;
        }
        if (first > second) {
          return 1;
        }
        return 0;
      });
    } else if (sortType === "reverse") {
      AllProducts = AllProducts.sort((a, b) => {
        const first = a.name.toLocaleLowerCase();
        const second = b.name.toLocaleLowerCase();
        if (first > second) {
          return -1;
        }
        if (first < second) {
          return 1;
        }
        return 0;
      });
    }
    console.log(AllProducts);
    setFilteredData(AllProducts);
  };

  const AllData = filteredData.map((product) => {
    return (
      <div>
        {!productsInRow ? (
          <div key={product.id}>
            <div
              onClick={() => dispatch(Add(product))}
              className={classes.imgIcon}
              onMouseEnter={() => setSelectProduct(product)}
              onMouseLeave={() => setSelectProduct()}
            >
              <img
                className={classes.images}
                src={product.img}
                alt={product.name}
              />
              {selectProduct === product && (
                <NavLink to={`/products/${product.SKUid}`}>
                  <AiOutlineSearch className={classes.onSelecting} />
                </NavLink>
              )}
            </div>
            <div className={classes.namePrice}>
              <p>{product.name}</p>
              <p className="price">$ {product.price}</p>
            </div>
          </div>
        ) : (
          <div className={classes.cardForm} key={product.id}>
            <img
              className={classes.images}
              src={product.img}
              alt={product.name}
            />
            <div className={classes.about}>
              <p>{product.name}</p>
              <p className="price">$ {product.price}</p>
              <p>
                Cloud bread VHS hell of banjo bicycle rights jianbing umami
                mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr
                dreamcatcher waistcoat, authentic ...
              </p>
              <Link to={`/${product.SKUid}`}>
                <button
                  className="actionBtn"
                  onClick={() => dispatch(Add(product))}
                >
                  Details
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  });

  ///////filter category////////
  const FilterCategory = (category) => {
    setFilters({ ...filters, category });
    genericFilterSetData();
  };

  ///////filter company////////
  const FilterCompany = (event) => {
    setFilters({ ...filters, company: event.target.value });
    genericFilterSetData();
  };

  ///////filter color////////
  const FilterColor = (color) => {
    setFilters({ ...filters, color });
    genericFilterSetData();
  };
  ///////filter shipping////////
  const FilterShipping = (e) => {
    setFilters({ ...filters, shipping: !filters.shipping });
    genericFilterSetData();
    setIsFreeShipping(!isFreeShipping);
  };
  ///////filter price ////////
  const FilterPrice = (price) => {
    setFilters({ ...filters, price: price });
    genericFilterSetData();
  };
  /////// clear all filters ////////
  const ClearAllFilters = () => {
    setFilters(defailtFilters);
    // setUndelineCategory("all");
    // setCheckedColor("all");
    // document.getElementById("checked").checked = false;
    // resetSlider(3099.99);
    // document.getElementById("company").value = "all";
  };

  console.log(filters, "allFilteredData");
  return (
    <div>
      <div className={classes.header}>
        <h2>
          Home / <span className={classes.headerProducts}>Products</span>
        </h2>
      </div>

      <div className={classes.filtersProducts}>
        {/* Filters*/}

        <div className={classes.filtersDiv}>
          <div className={classes.filters}>
            <input
              type="text"
              placeholder="Search"
              onChange={inputEvent}
              value={filters.search}
            />
            <div className={classes.category}>
              <h3>Category</h3>
              <p
                className={
                  filters.category === "all" && classes.bottomUnderline
                }
                onClick={() => FilterCategory("all")}
              >
                All
              </p>
              <p
                className={
                  filters.category === "Office" && classes.bottomUnderline
                }
                onClick={() => FilterCategory("Office")}
              >
                Office
              </p>
              <p
                className={
                  filters.category === "Living Room" && classes.bottomUnderline
                }
                onClick={() => FilterCategory("Living Room")}
              >
                Living Room
              </p>
              <p
                className={
                  filters.category === "Kitchen" && classes.bottomUnderline
                }
                onClick={() => FilterCategory("Kitchen")}
              >
                Kitchen
              </p>
              <p
                className={
                  filters.category === "Bedroom" && classes.bottomUnderline
                }
                onClick={() => FilterCategory("Bedroom")}
              >
                Bedroom
              </p>
              <p
                className={
                  filters.category === "Dinning" && classes.bottomUnderline
                }
                onClick={() => FilterCategory("Dinning")}
              >
                Dinning
              </p>
              <p
                className={
                  filters.category === "Kids" && classes.bottomUnderline
                }
                onClick={() => FilterCategory("Kids")}
              >
                Kids
              </p>
            </div>
            <select
              className={classes.company}
              onChange={FilterCompany}
              value={filters.company}
            >
              <option value="all">all</option>
              <option value="marcos">marcos</option>
              <option value="ikea">ikea</option>
              <option value="liddy">liddy</option>
              <option value="caressa">caressa</option>
            </select>
            <div className={classes.colors}>
              <span
                className={filters.color === "all" && classes.bottomUnderline}
                onClick={() => FilterColor("all")}
              >
                All{" "}
              </span>{" "}
              {!(filters.color === "blue") ? (
                <BsFillCircleFill
                  style={{ color: "blue" }}
                  onClick={() => FilterColor("blue")}
                />
              ) : (
                <BsFillCheckCircleFill style={{ color: "blue" }} />
              )}{" "}
              {!(filters.color === "darkgoldenrod") ? (
                <BsFillCircleFill
                  style={{ color: "darkgoldenrod" }}
                  onClick={() => FilterColor("darkgoldenrod")}
                />
              ) : (
                <BsFillCheckCircleFill style={{ color: "darkgoldenrod" }} />
              )}{" "}
              {!(filters.color === "black") ? (
                <BsFillCircleFill
                  style={{ color: "black" }}
                  onClick={() => FilterColor("black")}
                />
              ) : (
                <BsFillCheckCircleFill style={{ color: "black" }} />
              )}{" "}
              {!(filters.color === "orange") ? (
                <BsFillCircleFill
                  style={{ color: "orange" }}
                  onClick={() => FilterColor("orange")}
                />
              ) : (
                <BsFillCheckCircleFill style={{ color: "orange" }} />
              )}{" "}
              {!(filters.color === "green") ? (
                <BsFillCircleFill
                  style={{ color: "green" }}
                  onClick={() => FilterColor("green")}
                />
              ) : (
                <BsFillCheckCircleFill style={{ color: "green" }} />
              )}{" "}
            </div>
            <div className={classes.prices}>
              <Slider FilterPrice={FilterPrice} price={filters.price} />
            </div>
            <p>
              Free Shipping{" "}
              <span>
                <input
                  type="checkbox"
                  onChange={FilterShipping}
                  id="checked"
                  checked={filters.shipping}
                />{" "}
              </span>{" "}
            </p>
            <button className={classes.clearbtn} onClick={ClearAllFilters}>
              Clear Filters
            </button>
          </div>
        </div>

        {/* header sortings */}

        <div className={classes.sortingProducts}>
          <div className={classes.sortingsDiv}>
            <span>
              <GrAppsRounded onClick={() => setProductsInRow(false)} />{" "}
              <GiHamburgerMenu onClick={() => setProductsInRow(true)} />
            </span>
            <span> {AllData.length} Products found</span>
            <span className={classes.line}></span>
            <span>
              sort by
              <select
                className={classes.sortByDropDown}
                onChange={(e) =>
                  setFilters({ ...filters, sortType: e.target.value })
                }
              >
                <option value="Lowest">Price (Lowest)</option>
                <option value="Highest">Price (Highest)</option>
                <option value="alphabatically">Name (A-Z)</option>
                <option value="reverse">Name (Z-A)</option>
              </select>
            </span>
          </div>

          {/* products */}

          <div className={productsInRow ? "" : classes.products}>{AllData}</div>
        </div>
      </div>
    </div>
  );
};

export default Products;

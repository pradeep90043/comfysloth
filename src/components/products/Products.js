import React, { useEffect, useState } from "react";
import classes from "./Products.module.css";
import { GrAppsRounded } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillCircleFill } from "react-icons/bs";
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
    price: 3099,
    sortType: "Lowest",
  };
  const [filters, setFilters] = useState(defailtFilters);
  const [underline, setUndeline] = useState();
  const [productsInRow, setProductsInRow] = useState(false);
  const [isFreeShipping, setIsFreeShipping] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    genericFilterSetData();
  }, [filters]);

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
            <button onClick={() => dispatch(Add(product))}>
              <NavLink to="/name">
                <img
                  className={classes.images}
                  src={product.img}
                  alt={product.name}
                />
              </NavLink>
            </button>
            <div className={classes.namePrice}>
              <p>{product.name}</p>
              <p className="price">$ {product.price}</p>
            </div>
          </div>
        ) : (
          <div className={classes.cart} key={product.id}>
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
              <Link to="/name">
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
    const company = event.target.value;
    setFilters({ ...filters, company });
    genericFilterSetData();
  };

  ///////filter color////////
  const FilterColor = (color) => {
    setFilters({ ...filters, color });
    genericFilterSetData();
  };
  ///////filter shipping////////
  const FilterShipping = (e) => {
    setFilters({ ...filters, shipping: e.target.value });
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

        <div className={classes.filters}>
          <input type="text" placeholder="Search" onChange={inputEvent} />
          <div className={classes.category}>
            <h3>Category</h3>
            <p className={underline} onClick={() => FilterCategory("all")}>
              All
            </p>
            <p onClick={() => FilterCategory("office")}>Office</p>
            <p onClick={() => FilterCategory("Living Room")}>Living Room</p>
            <p onClick={() => FilterCategory("Kitchen")}>Kitchen</p>
            <p onClick={() => FilterCategory("Bedroom")}>Bedroom</p>
            <p onClick={() => FilterCategory("Dinning")}>Dinning</p>
            <p onClick={() => FilterCategory("Kids")}>Kids</p>
          </div>
          <select className={classes.company} onChange={FilterCompany}>
            <option value="all">all</option>
            <option value="marcos">marcos</option>
            <option value="ikea">ikea</option>
            <option value="liddy">liddy</option>
            <option value="caressa">caressa</option>
          </select>
          <div className={classes.colors}>
            <span onClick={() => FilterColor("all")}>All </span>{" "}
            <BsFillCircleFill
              style={{ color: "blue" }}
              onClick={() => FilterColor("blue")}
            />{" "}
            <BsFillCircleFill
              style={{ color: "yellow" }}
              onClick={() => FilterColor("yellow")}
            />{" "}
            <BsFillCircleFill
              style={{ color: "green" }}
              onClick={() => FilterColor("green")}
            />{" "}
            <BsFillCircleFill
              style={{ color: "black" }}
              onClick={() => FilterColor("black")}
            />{" "}
            <BsFillCircleFill
              style={{ color: "orange" }}
              onClick={() => FilterColor("orange")}
            />
          </div>
          <div className={classes.prices}>
            <Slider FilterPrice={FilterPrice} />
          </div>
          <p>
            Free Shipping{" "}
            <span>
              <input type="checkbox" onChange={FilterShipping} />{" "}
            </span>{" "}
          </p>
          <button className={classes.clearbtn} onClick={ClearAllFilters}>
            Clear Filters
          </button>
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

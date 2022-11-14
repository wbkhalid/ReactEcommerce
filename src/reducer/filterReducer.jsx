const filterReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_FILTER_PRODUCTS':
      let priceArray = action.payload.map((curElem) => curElem.price);

      // 3 Ways for finding max Number

      // 1. console.log(Math.max.apply(null,priceArray))
      // 2. Math.max(...priceArray)

      let maxPrice = priceArray.reduce(
        (acc, curElem) => Math.max(acc, curElem),
        0
      );

      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: { ...state.filters, maxPrice, price: maxPrice },
      };

    case 'SET_GRID_VIEW':
      return {
        ...state,
        grid_view: true,
      };

    case 'SET_LIST_VIEW':
      return {
        ...state,
        grid_view: false,
      };

    case 'GET_SORT_VALUE':
      let userSortValue = document.getElementById('sort');
      let sort_value = userSortValue.options[userSortValue.selectedIndex].value;

      return {
        ...state,
        sorting_value: sort_value,
      };

    case 'SORTING_PRODUCTS':
      let newSortData;
      const { filter_products, sorting_value } = state;

      let tempSortProduct = [...filter_products];
      const sortingProducts = (a, b) => {
        switch (sorting_value) {
          case 'lowest':
            return a.price - b.price;

          case 'highest':
            return b.price - a.price;

          case 'a-z':
            return a.name.localeCompare(b.name);

          case 'z-a':
            return b.name.localeCompare(a.name);

          default:
            return a.price - b.price;
        }
      };

      newSortData = tempSortProduct.sort(sortingProducts);
      return {
        ...state,
        filter_products: newSortData,
      };

    case 'UPDATE_FILTER_VALUE':
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };
    case 'FILTER_PRODUCTS':
      let { all_products } = state;
      let tempFilterProducts = [...all_products];
      const { text, category, company, color, price } = state.filters;

      if (text) {
        tempFilterProducts = tempFilterProducts.filter((curElem) =>
          curElem.name.toLowerCase().includes(text)
        );
      }
      if (category !== 'all') {
        tempFilterProducts = tempFilterProducts.filter(
          (curElem) => curElem.category === category
        );
      }

      if (company !== 'all') {
        tempFilterProducts = tempFilterProducts.filter(
          (curElem) => curElem.company.toLowerCase() === company.toLowerCase()
        );
      }

      if (color !== 'all') {
        tempFilterProducts = tempFilterProducts.filter((curElem) =>
          curElem.colors.includes(color)
        );
      }

      if (price === 0) {
        tempFilterProducts = tempFilterProducts.filter(
          (curElem) => curElem.price == price
        );
      } else {
        tempFilterProducts = tempFilterProducts.filter(
          (curElem) => curElem.price <=  price
        );
      }
      return {
        ...state,
        filter_products: tempFilterProducts,
      };

    default:
      return state;
  }
};

export default filterReducer;

import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions";
// import { Sidebar } from "../components";

const products_reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }
  if (action.type === GET_PRODUCTS_BEGIN) {
    return { ...state, products_loading: true };
  }
  if (action.type === GET_PRODUCTS_SUCCESS) {
    const featured_products = action.payload.filter(
      (product) => product.featured && product
    );
    return {
      ...state,
      products_loading: false,
      products: action.payload,
      featured_products,
    };
  }
  if (action.type === GET_PRODUCTS_ERROR) {
    return { ...state, products_loading: false, products_error: true };
  }
  if (action.type === "TOGGLE_FEATURE_PRODUCTS") {
    return {
      ...state,
      show: !state.show,
    };
  }
  if (action.type === GET_SINGLE_PRODUCT_BEGIN) {
    return { ...state, singleProduct_loading: true, products_error: false };
  }
  if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
    // const featured_products = action.payload.filter(
    //   (product) => product.featured && product
    // );

    return {
      ...state,
      singleProduct_loading: false,
      singleProduct: action.payload,
      singleProductImages: action.payload.images,
    };
  }
  if (action.type === GET_SINGLE_PRODUCT_ERROR) {
    return {
      ...state,
      singleProduct_loading: false,
      singlePproduct_error: true,
    };
  }
  // return state;
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;

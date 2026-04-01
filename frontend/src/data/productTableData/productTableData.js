// Product rows ab productTableData2.js mein hain — naya BIS data wahi file mein update karo.
import { productTableData2 } from "./productTableData2.js";

export const productTableData = productTableData2;

// For now, we'll lazy load this data
export const loadProductTableData = async () => {
  // This could eventually be loaded from an API or external file
  return productTableData;
};

// Search function for products
export const searchProducts = (products, query) => {
  if (!query) return products;

  return products.filter(
    (product) =>
      product.product?.toLowerCase().includes(query) ||
      product.isNumber?.toLowerCase().includes(query) ||
      product.notification?.title?.toLowerCase().includes(query)
  );
};

// Filter function for products
export const filterProducts = (products, filters) => {
  let filtered = products;

  if (filters.category) {
    filtered = filtered.filter((product) =>
      product.notification?.title?.includes(filters.category)
    );
  }

  return filtered;
};

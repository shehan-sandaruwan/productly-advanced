export const fetchProducts = async () => {
  const token = localStorage.getItem("productly");
  const response = await fetch("https://api.productly.app/products", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();

  return data;
};

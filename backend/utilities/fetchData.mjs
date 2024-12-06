export const fetchData = async (endpoint) => {
  const url = `${process.env.BASE_URL}/api/${endpoint}`; // Враховуємо правильний URL
  console.log("Fetching data from:", url);

  try {
    const response = await fetch(url);
    console.log("Response status:", response.status);

    if (!response.ok) {
      throw new Error(
        `Error in fetchData: ${endpoint} - ${response.status} ${response.statusText}`
      );
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error in fetchData:", error);
    throw new Error(`Error in fetchData: ${error.message}`);
  }
};

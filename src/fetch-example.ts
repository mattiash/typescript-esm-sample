// Example demonstrating ESM import of the pure ESM 'got' module

import got from "got";

async function fetchExample() {
  try {
    console.log("Fetching example file using got (pure ESM module)...");

    const response = await got("https://httpbin.org/json");
    const data = JSON.parse(response.body);

    console.log("✓ Successfully fetched data using got!");
    console.log("Response data:", data);

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

// Run the example
fetchExample();

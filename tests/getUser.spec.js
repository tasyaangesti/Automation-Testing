const { test, expect } = require("@playwright/test");
const axios = require("axios");
require("dotenv").config();

test("GET USER BY ID", async () => {
  try {
    const access_token = `Bearer ${process.env.token}`;
    const userId = 687122;
    const url = `https://gorest.co.in/public/v2/users/${userId}`;

    const headers = {
      Authorization: `${access_token}`,
    };

    const response = await axios.get(`${url}`, { headers });
    console.log("response >", response.data);
    expect(response.status).toBe(200);
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.error("User not found. Status code: 404");
    } else {
      console.error("Error:", error.message);
    }
  }
});

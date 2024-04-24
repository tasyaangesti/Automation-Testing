const { test, expect } = require("@playwright/test");
const axios = require("axios");
const { describe } = require("node:test");
require("dotenv").config();

describe("GET USER BY ID", () => {
  test("valid user id", async () => {
    try {
      const access_token = `Bearer ${process.env.token}`;
      const userId = 6871591;
      const url = `https://gorest.co.in/public/v2/users/${userId}`;

      const headers = {
        Authorization: `${access_token}`,
      };

      const response = await axios.get(`${url}`, { headers });
      console.log("response >", response.data);
      console.log("Response status code:", response.status);
      expect(response.status).toBe(200);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.error("User not found. Status code: 404");
      } else {
        console.error("Error:", error.message);
      }
    }
  });

  test("invalid user ID", async () => {
    try {
      const access_token = `Bearer ${process.env.token}`;
      const userId = 68715;
      const url = `https://gorest.co.in/public/v2/users/${userId}`;

      const headers = {
        Authorization: `${access_token}`,
      };

      const response = await axios.get(url, { headers });
      console.log('Response status code:', response.status);
      console.log("response >", response.data);
      expect(response.status).toBe(404);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.error("User not found. Status code: 404");
      } else {
        console.error("Error:", error.message);
      }
    }
  });
});

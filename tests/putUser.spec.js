const { test, expect } = require("@playwright/test");
const axios = require("axios");
const { describe } = require("node:test");
require("dotenv").config();

describe("PUT USER BY ID", () => {
  test("put invalid data", async () => {
    let errorMessage = "";

    const access_token = `Bearer ${process.env.token}`;
    const userId = 6871591;
    const url = `https://gorest.co.in/public/v2/users/${userId}`;

    const updateUser = {
      name: "Madame Webyyy",
      email: "madamewebbyyy@yomail.com",
      gender: "female",
      status: "active",
    };
    const headers = {
      "Content-Type": "application/json",
      Authorization: access_token,
    };

    try {
      const response = await axios.put(url, updateUser, { headers });
      console.log("Response status code:", response.status);
      console.log("response >", response.data);
      expect(response.status).toBe(200);
    } catch (error) {
      errorMessage = error.message;
    }
    if (errorMessage) {
      console.error("Error:", errorMessage);
    }
  });

  test("invalid user ID", async () => {
    let errorMessage = "";

    const access_token = `Bearer ${process.env.token}`;
    const userId = 687152;
    const url = `https://gorest.co.in/public/v2/users/${userId}`;

    const updateUser = {
      name: "Madame Web",
      email: "madam eweb@yomail.com",
      gender: "female",
      status: "active",
    };
    const headers = {
      "Content-Type": "application/json",
      Authorization: access_token,
    };

    try {
      const response = await axios.put(url, updateUser, { headers });
      console.log("Response status code:", response.status);
      console.log("response >", response.data);
      expect(response.status).toBe(404);
    } catch (error) {
      errorMessage = error.message;
    }
    if (errorMessage) {
      console.error("Error:", errorMessage);
    }
  });
});

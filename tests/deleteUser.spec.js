const { test, expect } = require("@playwright/test");
const axios = require("axios");
const { describe } = require("node:test");
require("dotenv").config();

describe("DELETE USER BY ID", () => {
  test("delete valid user", async () => {
    let errorMessage = "";

    const access_token = `Bearer ${process.env.token}`;
    const userId = 6871591;
    const url = `https://gorest.co.in/public/v2/users/${userId}`;

    const headers = {
      "Content-Type": "application/json",
      Authorization: access_token,
    };

    try {
      const response = await axios.delete(url, { headers });
      console.log('Response status code:', response.status);
      console.log("successfully deleted user", response.data);
      expect(response.status).toBe(204);
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
    const userId = 6871;
    const url = `https://gorest.co.in/public/v2/users/${userId}`;

    const headers = {
      "Content-Type": "application/json",
      Authorization: access_token,
    };

    try {
      const response = await axios.delete(url, { headers });
      console.log('Response status code:', response.status);
      console.log("successfully deleted user", response.data);
      expect(response.status).toBe(404);
    } catch (error) {
      errorMessage = error.message;
    }
    if (errorMessage) {
      console.error("Error:", errorMessage);
    }
  });

  test("invalid access token", async () => {
    let errorMessage = "";

    const access_token = `Bearerrr ${process.env.token}`;
    const userId = 6871536;
    const url = `https://gorest.co.in/public/v2/users/${userId}`;

    const headers = {
      "Content-Type": "application/json",
      Authorization: access_token,
    };

    try {
      const response = await axios.delete(url, { headers });
      console.log('Response status code:', response.status);
      console.log("successfully deleted user", response.data);
      expect(response.status).toBe(404);
    } catch (error) {
      errorMessage = error.message;
    }
    if (errorMessage) {
      console.error("Error:", errorMessage);
    }
  });
});

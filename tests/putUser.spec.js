const { test, expect } = require("@playwright/test");
const axios = require("axios");
const { describe } = require("node:test");
require("dotenv").config();

describe("PUT USER BY ID", () => {
  test("put invalid data", async () => {
    let errorMessage = "";

    const access_token = `Bearer ${process.env.token}`;
    const userId = 6849953;
    const url = `https://gorest.co.in/public/v2/users/${userId}`;

    const updateUser = {
      name: "Dayaananda Joshiana",
      email: "dayaananda_joshiana@franecki.test",
      gender: "male",
      status: "active",
    };
    const headers = {
      "Content-Type": "application/json",
      Authorization: access_token,
    };

    try {
      const response = await axios.put(url, updateUser, { headers });
      console.log("response >", response.data);
      expect(response.status).toBe(200);
    } catch (error) {
      errorMessage = error.message;
    }
    if (errorMessage) {
      console.error("Error:", errorMessage);
    }
  });

  //   test("invalid user ID", async () => {
  //     let errorMessage = "";

  //     const access_token = `Bearer ${process.env.token}`;
  //     const userId = 687152;
  //     const url = `https://gorest.co.in/public/v2/users/${userId}`;

  //     const updateUser = {
  //       name: "Petra Lee3",
  //       email: "Petra.lee3@mail.com",
  //       gender: "female",
  //       status: "active",
  //     };
  //     const headers = {
  //       "Content-Type": "application/json",
  //       Authorization: access_token,
  //     };

  //     try {
  //       const response = await axios.put(url, updateUser, { headers });
  //       console.log("response >", response.data);
  //       expect(response.status).toBe(404);
  //     } catch (error) {
  //       errorMessage = error.message;
  //     }
  //     if (errorMessage) {
  //       console.error("Error:", errorMessage);
  //     }
  //   });
});

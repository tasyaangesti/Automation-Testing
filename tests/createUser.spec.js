const { test, expect } = require("@playwright/test");
const axios = require("axios");
const { describe } = require("node:test");

require("dotenv").config();

describe("CREATE USER", () => {
  test("valid data user", async () => {
    //   const access_token =
    //     "Bearer 1fd0fbd6cfede3aa40f666c4144180e3e840c44ea85f1b8b07bbe6847c888d47";
    const access_token = `Bearer ${process.env.token}`;

    const url = "https://gorest.co.in/public/v2/users";
    const newUser = {
      // id: "",
      name: "Madame Webu",
      email: "madamewebu@yomail.com",
      gender: "female",
      status: "active",
    };
    const headers = {
      "Content-Type": "application/json",
      Authorization: access_token,
    };

    try {
      const response = await axios.post(url, newUser, { headers });
      console.log("Response status code:", response.status);
      console.log("response >", response.data);
      expect(response.status).toBe(201);
      // expect(response.data.name).toBe("blair1");
    } catch (error) {
      if (error.response) {
        console.error("response data >", error.response.data);
        console.error("response code >", error.response.status);
      } else if (error.request) {
        console.error("received no response >", error.response.request);
      } else {
        console.error("Error:", error.message);
      }
    }
  });

  test("invalid email format", async () => {
    const access_token = `Bearer ${process.env.token}`;

    const url = "https://gorest.co.in/public/v2/users";
    const newUser = {
      name: "Madame Web",
      email: "madame web@yomail.com",
      gender: "female",
      status: "active",
    };
    const headers = {
      "Content-Type": "application/json",
      Authorization: access_token,
    };

    try {
      const response = await axios.post(url, newUser, { headers });
      console.log("Response status code:", response.status);
      console.log("response >", response.data);
      expect(response.status).toBe(400);
    } catch (error) {
      if (error.response) {
        console.error("response data (negative) >", error.response.data);
        console.error("response code (negative) >", error.response.status);
      } else if (error.request) {
        console.error(
          "received no response (negative) >",
          error.response.request
        );
      } else {
        console.error("Error:", error.message);
      }
    }
  });

  test("invalid access token", async () => {
    const access_token = `Bearerr ${process.env.token}`;
    const url = "https://gorest.co.in/public/v2/users";
    const newUser = {
      name: "karaaa",
      email: "karaaa@mail.com",
      gender: "female",
      status: "active",
    };
    const headers = {
      "Content-Type": "application/json",
      Authorization: access_token,
    };

    try {
      const response = await axios.post(url, newUser, { headers });
      console.log("Response status code:", response.status);
      console.log("response >", response.data);
      expect(response.status).toBe(401);
    } catch (error) {
      if (error.response) {
        console.error("response data (negative) >", error.response.data);
        console.error("response code (negative) >", error.response.status);
      } else if (error.request) {
        console.error(
          "received no response (negative) >",
          error.response.request
        );
      } else {
        console.error("Error:", error.message);
      }
    }
  });
});

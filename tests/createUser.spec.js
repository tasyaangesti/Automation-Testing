const { test, expect } = require("@playwright/test");
const axios = require("axios");
require("dotenv").config();

test("CREATE USER", async () => {
  //   const access_token =
  //     "Bearer 1fd0fbd6cfede3aa40f666c4144180e3e840c44ea85f1b8b07bbe6847c888d47";
  const access_token = `Bearer ${process.env.token}`;

  const url = "https://gorest.co.in/public/v2/users";
  const newUser = {
    // id: "",
    name: "blair4",
    email: "blair4@mail.com",
    gender: "female",
    status: "active",
  };
  const headers = {
    "Content-Type": "application/json",
    Authorization: access_token,
  };

  try {
    const response = await axios.post(url, newUser, { headers });
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

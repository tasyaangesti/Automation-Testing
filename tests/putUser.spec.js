const { test, expect } = require("@playwright/test");
const axios = require("axios");
require("dotenv").config();

test("PUT USER", async () => {
  let errorMessage = "";

  const access_token = `Bearer ${process.env.token}`;
  const userId = 6849953;
  const url = `https://gorest.co.in/public/v2/users/${userId}`;

  const updateUser = {
    name: "Dayaananda Joshia",
    email: "dayaananda_joshia@franecki.test",
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

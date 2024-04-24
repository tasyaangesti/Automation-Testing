# Automation-Testing

## Automation API

```bash
This document provides guidance on automating the API tasks specified for the website gorest.co.in.
```

## Link Recording

```bash
https://drive.google.com/drive/folders/1twIZMD64wuMzZ4ZlieGPEWi9jMUfNwmB?usp=sharing
```

## How to Setup

**1. Clone Repository**

```bash
git clone https://github.com/tasyaangesti/Automation-Testing.git
```

**2. Install Dependencies**

```bash
npm install
```

**3. Set Environment Variables**

Buat file .env di direktori utama. Tambahkan variabel berikut ke file .env :

```bash
token = token_akses_anda_di_sini
```

**4. Run the Test**
```bash
npx playwright test (nama file) --headed
```

## Prerequisites

```bash
1. Login Credentials: Ensure you have valid login credentials for the gorest.co.in website.
2. Familiarize with REST Console: Log in to REST Console and get acquainted with its functionality.
```

## Steps to Automate API

### Create a New User

> Endpoint: POST /public/v2/users

_Positive Scenario:_

```bash
1. Create a new user with valid data.
2. Verify that the user is successfully created.
3. Include assertions for status codes and response data.
```

_Negative Scenarios:_

```bash
1. Attempt to create a user with invalid data (e.g., invalid token, invalid email format).
2. Verify appropriate error handling (status codes, error messages).
```

### Get User Details

> Endpoint: GET /public/v2/users/xxx (Replace xxx with the user ID)

_Positive Scenario:_

```bash
1. Retrieve details of an existing user.
2. Verify that the user details are correctly returned.
3. Include assertions for status codes and response data.
```

_Negative Scenarios:_

```bash
1. Attempt to retrieve details of a non-existent user.
2. Verify appropriate error handling (status codes, error messages).
```

### Update User Details

> Endpoint: PUT /public/v2/users/xxx (Replace xxx with the user ID)

_Positive Scenario:_

```bash
1. Update details of an existing user with valid data.
2. Verify that the user details are successfully updated.
3. Include assertions for status codes and response data.
Negative Scenarios:
```

_Negative Scenarios:_

```bash
1. Attempt to update user details with invalid user id.
2. Verify appropriate error handling (status codes, error messages).
```

### Delete User

> Endpoint: DELETE /public/v2/users/xxx (Replace xxx with the user ID)

_Positive Scenario:_

```bash
1. Delete an existing user.
2. Verify that the user is successfully deleted.
3. Include assertions for status codes and response data.
```

_Negative Scenarios:_

```bash
1. Attempt to delete a non-existent user (e.g., invalid token, invalid user id).
2. Verify appropriate error handling (status codes, error messages).
```

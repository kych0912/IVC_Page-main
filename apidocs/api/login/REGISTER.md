**회원가입**
----
유저 회원가입

* **URL**

  `/api/admin/register`

* **Method:**

  `POST`

* **Request Body** <br/>
  **Required:** <br/>
  ```json
  {
   "name":"test",
   "password":"test"
  }
  ```

* **Success Response:**

    * **Code:** 200 <br />
      **Content:** <br/>
      "User created"
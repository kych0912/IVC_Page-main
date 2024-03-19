**로그인**
----
유저 로그인

* **URL**

  `/api/admin/login`

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
      ```json
      {
        "success":true,
        "userId":"test"
      }
      ```
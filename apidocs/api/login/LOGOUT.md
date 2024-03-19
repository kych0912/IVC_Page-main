**로그아웃**
----
유저 로그아웃

* **URL**

  `/api/admin/logout`

* **Method:**

  `GET`

* **Cookie** <br/>
  **Required:** <br/>
  ```
  {
   "x_auth":"test",
  }
  ```

* **Success Response:**

    * **Code:** 200 <br />
      **Content:** <br/>
      ```json
        {
            message: "Logout success",
            success: true
        }
      ```
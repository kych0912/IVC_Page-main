**인증**
----
유저 로그인 인증
세션 테이블에 쿠키가 존재하는지 확인합니다.

* **URL**

  `/api/admin/auth`

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
            message:"Auth Success",
            success: true
        }
      ```
**구글폼 링크 생성**
----
DB에 링크를 저장하고 공개로 설정합니다.


* **URL**

  `/api/admin/editURL`

* **Method:**

  `POST`

* **Request Body** <br/>
  **Required:** <br/>
  ```json
  {
   "url":"google.com"
  }
  ```


* **Success Response:**

    * **Code:** 200 <br />
      **Content:** <br/>
      ```json
        {
            message:"URL inserted",
            success: true
        }
      ```
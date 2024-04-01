**파일 생성**
----
DB에 파일명을 저장하고 공개로 설정합니다.
base64로 인코딩 된 string을 받습니다.
base64를 디코딩 하여 서버에 파일을 저장합니다.


* **URL**

  `/api/admin/uploadFile`

* **Method:**

  `POST`

* **Request Body** <br/>
  **Required:** <br/>
  ```json
  {
   "name":"test",
   "file":"asdfasf..."
  }
  ```


* **Success Response:**

    * **Code:** 200 <br />
      **Content:** <br/>
      ```json
        {
            status:200,
            message:"File uploaded",
            success: true
        }
      ```

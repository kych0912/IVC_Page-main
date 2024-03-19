**파일 삭제**
----
DB에 저장된 파일 중 특정 id를 삭제합니다.
서버에 저장된 특정 파일을 삭제합니다


* **URL**

  `/api/admin/deleteFile/:id`

* **Method:**

  `POST`

* **URLParms:**<br/>
  **Required:** <br/>
  `id=[integer]`

* **Success Response:**

    * **Code:** 200 <br />
      **Content:** <br/>
      ```json
        {
            message:"File deleted",
            success: true
        }
      ```
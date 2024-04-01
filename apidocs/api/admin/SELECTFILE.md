**파일 선택 수정**
----
DB에 저장된 파일 중 공개될 파일을 선택합니다.


* **URL**

  `/api/admin/selectFile/:id`

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
            message:"File selected",
            success: true
        }
      ```
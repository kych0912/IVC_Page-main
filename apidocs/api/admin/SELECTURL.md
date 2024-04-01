**구글폼 링크 선택 수정**
----
DB에 저장된 링크 중 공개될 링크를 선택합니다.


* **URL**

  `/api/admin/selectURL/:id`

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
            message:"URL selected",
            success: true
        }
      ```
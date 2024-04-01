**구글폼 링크 모두 조회**
----
DB에 저장된 모든 파일 정보를 조회합니다.


* **URL**

  `/api/admin/getFiles`

* **Method:**

  `GET`

* **Success Response:**

    * **Code:** 200 <br />
      **Content:** <br/>
      ```json
        {
            message:[
        {
            "seq": 16,
            "time": "2024-03-17T15:49:15.000Z",
            "filename": "1709711167.docx",
            "selected": 0
        },
        {
            "seq": 15,
            "time": "2024-03-17T15:48:22.000Z",
            "filename": "1709711167.docx",
            "selected": 0
        }
        ],
            success: true
        }
      ```
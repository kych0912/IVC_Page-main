**구글폼 링크 모두 조회**
----
DB에 저장된 모든 구글폼 링크를 조회합니다.


* **URL**

  `/api/admin/getURLs`

* **Method:**

  `GET`

* **Success Response:**

    * **Code:** 200 <br />
      **Content:** <br/>
      ```json
        {
            message:[
        {
            "seq": 18,
            "url": "kakao.com",
            "edit_time": "2024-03-17T23:00:26.000Z",
            "selected": 1
        },
        {
            "seq": 16,
            "url": "google.com",
            "edit_time": "2024-03-13T15:25:43.000Z",
            "selected": 0
        }
        ],
            success: true
        }
      ```
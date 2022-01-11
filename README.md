# Springboot X ReactJS - Evereview (에브리뷰)
    - 세상의 모든 리뷰 (부제: 페이스북 리뷰왕 김리뷰 갬성)
        - 모든 유저가 자유롭게 자기 물건을 리뷰할 수 있는 커뮤니티 공간
        - 예) 리뷰 (먹다남은 추파춥스 딸기맛 리뷰)
                - 댓글 (작성자 : 김 응애) : 재밌다.
                    - 답글 (작성자 : 박 헤응) : 응애!
                - 댓글 (작성자: 강 뿡뿡) : 워우 
    - 개발이 어느정도 되면 Ad-Mob 같은거 찰지게 붙이고 배포해서 용돈벌어보기



**필수 지식**
- 백, 프론트를 각각 개발 한 후 백앤드단의 build.gradle에서 설정을 해주면 runing 시 동시에 리액트와 스프링부트가 켜질 수 있다.


**사용할 기술 (예정 포함) **
- FE
    - ReactJS (주요 페이지 작업)
    - Material-UI / CSS (디자인) 
- BE
    - Springboot
    - JPA / MariaDB 
- DevOps (배포시, 등등)
    - AWS
        - EC2 
        - RDS


**진행 순서 **
- 먼저, 프론트부터 예쁘게 모양을 잡아본다. DB 연동 전에는 json 더미데이터를 활용해 이를 만질 수 있도록 한다. 
    - CSS 작업은 나중에! 일단은 디자인 없이 틀 부터.
- 그 후 작업이 좀 진행되면 스프링을 활용해 REST API 를 개발한다.
- 동시에 DB 설계 (JPA 활용 해볼 예정)

**기능 명세**
- Specs
    - 기본적으로 한명의 사람이 여러 플랫폼의 동시계정을 사용하는걸 막도록 한다. 
        - 이를 어떻게 감지해서 가입을 막을지 고민해봐야. (정준호 팀장님 질문 해보기)

- Database
    - Users Table (회원 테이블)
        - Columns
            - varchar(20) userId (PK)
            - enum category (kakao, naver, facebook, normal)
            - varchar(20) password (sha2-256)
            - varchar(10) name
            - varchar(45) email //  
    - Reviews Table (리뷰 게시글 테이블)
        - Columns
            - bigint articleId (PK) // 게시글 번호 
            - varchar(20) userId(FK, references Users.userId) // 게시글 작성자
            - varchar(30) articleTitle // 게시글 제목
            - MEDIUMTEXT articleContent // 게시글 내용 
            - Date registeredDate // 작성일자
            - Date lastModifiedDate // 수정일자

    - Comments Table (댓글 테이블) (Reviews - Users M:N 관계 파생)
        - Columns
            - bigint commentId (PK)
            - varchar(20) userId (FK, references Users.userId)
            - bigint articleId (FK, references Reviews.articleId)
            - varchar(255) content 
    - Reply Table (답글 테이블) (Reviews - Reply 1:N)
 
- 회원 관련
    - 로그인
        - 카카오 API (가능하면)
        - 네이버 API (가능하면)
        - 페이스북 API
        - 그냥 자체 로그인 구현 
    - 회원가입 (자체 로그인) 
- 게시물 관련
    - 기본적인 리뷰 게시글에 대한 CRUD
        - Create
            - 리뷰글 쓰기
                - 로그인 필수 
            - 댓글 쓰기
                - 로그인 필수. 
                - 특히, 리뷰글 작성자는 댓글창에서 highlighting처럼 “이새끼가 글쓴이임 ㅇㅅㅇ”을 알 수 있도록 처리 
        - Read
            - 누구나 읽을 수는 있게. 
        - Update
            - lastModifiedDate에 현재 날짜가 들어가도록.
            - registeredDate는 안건드리도록.

        - Delete
            - 당연히 댓글 이든 게시글이든 작성자만 삭제할 수 있도록하기. 디시인사이드 처럼 비밀번호로 삭제하는거 X. 
- 회원 관련

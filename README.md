![Algopat](./image/algopat-logo.png/ "Algopat Logo")  

Algopat은 AI기반 알고리즘 소스코드 피드백 서비스입니다. 시간 및 공간 복잡도와 리팩토링에 대한 피드백을 제공해줍니다.

<!-- ## ✨ 프로젝트 주요 기술 

1. 인증/인가
   - Spring Cloud Gateway, Eureka를 이용한 Client-side Discovery pattern 구현
   - 각 서비스의 호출을 위해 JWT 이용
   - Spring Security 
   - OAuth 2.0  
2. 크롬 익스텐션
   - Crawling (문제, 회원 제출 코드)
   - WebFlux를 이용한 SSE (실시간 알림, 진행상황에 대한 progress bar UI 제공)  
3. 알고리즘 소스 코드 분석 
   - LangChain + ChatGPT 라이브러리를 활용한 코드 분석 
        - 시간 복잡도 (Big O)
        - 공간 복잡도 (Big O)
        - 리팩토링 가이드 
    - 사용자 경험 개선을 위한 무료 OPEN AI API KEY 체험 횟수 10회 제공
    - 비용 절감 및 응답 시간 최적화를 위한 캐싱 적용 (문제 정보)
    - DB 동시성 문제를 해결하기 위한 Redis를 이용한 분산락 구현 
    - Kafka를 통한 로드밸런싱으로 분산 환경에서 시스템 안정성 향상 
4. 랭킹 
   - 3가지 기준을 통한 순위 제공 (총 점수, 시간 복잡도, 제출 시간 기준으로 순위 집계)  
   - 내가 푼 문제 통계 기록 열람 가능 
5. 마이페이지 
   - 잔디 (제출 일자에 따른 활동 기록, 총 제출 횟수에 따른 비례식 적용)
6. Anomaly (SAGA Pattern : Choreography)
   - 비정상적인 예외현상 발생 시, 보상 트랜잭션 적용 (무료 제출 횟수 +1)
   - Kafka 전송 실패를 고려한 Retry 설정 적용 (50번, 10ms) 
7. MSA 구조에서 원활한 디버깅을 위한 Logging 및 Monitoring 환경 구축
    - Zipkin을 이용한 마이크로서비스 환경에서의 추적 시스템 구축 및 시각화
    - 각 서비스에서 발생하는 로그 메세지를 손쉽게 확인할 수 있는 환경 구축 및 시각화
        - FileBeats를 통해 도커 컨테이너의 필요한 로그 선별
        - 선별된 로그 Logstash를 통해 파싱한 후 Elasticsearch에 저장
        - 저장된 로그 데이터를 Kibana에서 시각화를 통해 더 쉽게 로그를 확인할 수 있는 환경을 구축했습니다. -->

## 🛠️ 기술 스택

<div align=center>
<img src="https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=Ubuntu&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=Jenkins&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=NGINX&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/Grafana-F46800?style=for-the-badge&logo=Grafana&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/prometheus-E6522C?style=for-the-badge&logo=prometheus&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/Zipkin-F46800?style=for-the-badge&logo=Zipkin&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>


<br>

<img src="https://img.shields.io/badge/Apache Kafka-231F20?style=for-the-badge&logo=Apache Kafka&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=Redis&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=MariaDB&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/elasticsearch-005571?style=for-the-badge&logo=elasticsearch&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/kibana-005571?style=for-the-badge&logo=Kibana&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/Logstash-005571?style=for-the-badge&logo=Logstash&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/Beats-005571?style=for-the-badge&logo=Beats&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>

<br>

<img src="https://img.shields.io/badge/Java-FF7800?style=for-the-badge&logo=Java&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/Spring Boot-6DB33F?style=for-the-badge&logo=Spring Boot&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/WebFlux-6DB33F?style=for-the-badge&logo=WebFlux&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/Spring Cloud-6DB33F?style=for-the-badge&logo=Spring Cloud&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=Python&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=FastAPI&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/Gradle-02303A?style=for-the-badge&logo=Gradle&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>

<br>

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=Sass&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/ReactQuery-FF4154?style=for-the-badge&logo=ReactQuery&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/Recoil-61DAFB?style=for-the-badge&logo=Recoil&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>

<br>

<img src="https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=Jira&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/GitLab-FCA121?style=for-the-badge&logo=GitLab&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/> 
<img src="https://img.shields.io/badge/Mattermost-0058CC?style=for-the-badge&logo=Mattermost&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<br/>

  <br/>
<details><summary> <b> 상세 기술스택 및 버전</b> </summary>

| 구분     | 기술스택        | 상세내용           | 버전      |
| -------- | --------------- | ------------------ | --------- |
| 공통     | 형상관리        | Gitlab              | \-        |
|          | 이슈관리        | Jira                | \-        |
|          | 커뮤니케이션    | Mattermost, Notion | \-        |
| BackEnd  |                 | JPA                |      |
|          | Java            | Zulu               |  |
|          |                 | Spring Boot        | 2.7.11     |
|          | IDE             | IntelliJ           | 2022.3.1  |
|          | Build           | Gradle             |        |
|          | API Docs        | Postman            |           |
| FrontEnd | HTML5           |                    | \-        |
|          | CSS3            |                    | \-        |
|          | JavaScript(ES6) |                    | \-        |
|          | React           | React              | 18.2.0    |
|          | Node.js         | npm                | 18.14.2   |
|          | IDE             | Visual Studio Code | 1.78.2    |
| Server   | 서버            | AWS EC2            | \-        |
|          | 플랫폼          | Ubuntu\AWS Liunx   | 20.04 , AWS Linux2|
|          | CI/CD           | Docker             | 20.10.17  |
|          |                 | Jenkins            | jenkins/jenkins:lts|
|DATA      | DB              | MariaDB            | 10    |  
|          |                 |Elasticsearch       |7.17.9|
|          |                 |Kibana       |7.17.9|
|          |                 |Logstash       |7.17.9|
|          |                 |Filebeat       |7.17.9|
|          |                 |Kafka         |3.4|
|          |                 |Redis|7.0.7|
</details>
</div>


## 📋 상세 페이지  

### 메인 페이지  
![detail1](./image/detail1.gif)  
### 코드 분석 결과 페이지  
![detail2](./image/detail2.gif)  
### 랭킹 페이지  
![detail3](./image/detail3.gif)  
### 랭킹 상세 페이지  
![detail4](./image/detail4.png)  
### 마이페이지  
![detail5](./image/detail5.gif) 
### 분석 결과 알림 (Chrome Extension)
<img src="./image/detail_extension1.png" height="400px" width="400px" /> <img src="./image/detail_extension2.png" height="400px" width="400px" /> <br>



## 👪 개발 멤버 소개

<table>
    <tr>
        <td height="140px" align="center"> 
            <img src="./image/human7.png" height="140px" width="140px" /> <br><br> 😶 김소현 <br>(Front-End) </a> <br></td>
        <td height="140px" align="center"> 
            <img src="./image/human9.png" height="140px" width="140px" /> <br><br> 🙂 박동환 <br>(Front-End) </a> <br></td>
        <td height="140px" align="center"> 
            <img src="./image/human20.png" height="140px" width="140px" /> <br><br> 😆 이연학 <br>(Front-End) </a> <br></td>
        <td height="140px" align="center"> 
            <img src="./image/human10.png" height="140px" width="140px" /> <br><br> 👑 이찬희 <br>(Back-End) </a> <br></td>
        <td height="140px" align="center"> 
            <img src="./image/human21.png" height="140px" width="140px" /> <br><br> 😁 이안채 <br>(Back-End) </a> <br></td>
		<td height="140px" align="center"> 
            <img src="./image/human11.png" height="140px" width="140px" /> <br><br> 😶 최웅렬 <br>(Back-End) </a> <br></td>
    </tr>
    <tr>
        <td align="center">React<br/>Chrome Extension<br/></td>
        <td align="center">React<br/>Chrome Extension<br/></td>
        <td align="center">React<br/>Chrome Extension<br/></td>
        <td align="center">Spring Boot<br/>Fast API<br/></td>
        <td align="center">Spring Boot<br/>Fast API<br/></td>
        <td align="center">Spring Boot<br/>Fast API<br/>CI/CD<br/></td>
    </tr>
</table>


---

### 📋 시스템 아키텍처

![아키텍처](./image/system.png)


---

<!-- ### 📋 ERD 다이어그램

![ERD](./image/erd.png)

--- -->

### 📆 프로젝트 기간 (23.04.10 ~ 23.05.19)

- 기획 및 설계 : 23.04.10 ~ 23.04.16
- 프로젝트 구현 : 23.04.17 ~ 23.05.14
- 버그 수정 및 산출물 정리 : 23.05.15 ~ 23.05.19


<!-- ## 👥 협업 관리  

<table>
    <tr>
        <td  align="center">
            <img src="./image/notion1.png" /> <br> <br>노션 <br>
        </td>
        <td align="center">
            <img src="./image/jira1.png" /> <br> <br>지라 <br>
        </td>
        <td align="center">
            <img src="./image/gitlab1.png" /> <br> <br>깃랩 이슈 <br>
        </td>
    </tr>
</table> -->

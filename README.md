# HODU 홈페이지 제작 FE Project README
## 2024.01.15 ~ 2024.01.25
![HODU homepage title](https://github.com/lastier/project_hodu/assets/36223908/b3ecf4c7-e622-4682-ae54-f58be8344c80)
- 배포 URL : https://lastier.github.io/project_hodu/

## 프로젝트 소개
- 고양이 이미지 위주로 이미지를 로딩해오는 홈페이지 구현
- 고양이를 좋아하는 사람들을 위한 다양한 고양이 이미지 게시

## 개발환경
- Front : HTML, CSS, JavaScript, node.js(로컬환경 라이브 서버 구동)
- 버전 관리 : Git, Github, Source Tree
- 툴 : Intelli J IDEA
- 서비스 배포 : Github Pages
- 디자인 : [Figma](https://www.figma.com/file/s9RCnA6dSi3QHHeMDFHKE6/EST-%EB%B0%B1%EC%97%94%EB%93%9C-4%EA%B8%B0_HTML%2FCSS%2FJS?type=design&node-id=104924-398&mode=design&t=euup87JRyabYKmf3-0)

## 주요 기능구현
- Show more 버튼을 눌렀을 때 이미지를 n개씩 무한로딩 해오는 기능 구현하기
- Subscribe 버튼을 눌렀을 때 작은 modal 창이 팝업으로 나타나고 Thank you! 버튼을 누르면 닫히는 기능 구현하기

## 프로젝트 구조
- HTML : 홈페이지 틀 구현
- CSS : 홈페이지 스타일 구현
- JavaScript : 무한 스크롤, modal창 기능 구현
  
  <br>

 ``` 
  
│  .gitignore
│  index.css
│  index.html
│  infinite_scroll.js
│  kakao_map.js
│  modal_code.js
│  README.md
├─assets
│      download_button.png
│      facebook.png
│      icon-blog.png
│      icon_arrow_up.png
│      icon_arrow_up_hover.png
│      icon_email.png
│      img_cat_1.png
│      img_cat_2.png
│      img_cat_3.png
│      img_cat_4.png
│      img_cat_5.png
│      img_cat_6.png
│      img_cat_7.png
│      img_cat_8.png
│      img_cat_hat_png.png
│      infinite_1.png
│      infinite_2.png
│      infinite_3.png
│      infinite_4.png
│      infinite_5.png
│      infinite_6.png
│      instagram.png
│      Logo-HODU.png
│      modal_bg.png
│      modal_cat.png
│      youtube.png
│      
└─fonts
        Pretendard-Regular.otf
        Pretendard-Regular.woff
  ```

<br>

## 개발 기간
- 전체 개발 개간 : 2024.01.15 ~ 2024.01.25
- UI 구현 : 2024.01.15 ~ 2024.01.17
- 기능 구현 : 2024.01.15 ~ 2024.01.25

## 기능
- Download 버튼을 눌렀을 때 링크된 사이트를 새 창에서 여는 기능
  ![Download_Button_Effect](https://github.com/lastier/project_hodu/assets/36223908/76c288d4-34c3-45a0-b3ea-00302f917bcc)
  ![Download_Button_Effect2](https://github.com/lastier/project_hodu/assets/36223908/e50b4aaa-e15f-465b-a64d-d05224fb1b24)

- Show more 버튼을 눌렀을 때 이미지를 n개씩 로딩, Stop 버튼을 눌렀을 떄 멈추는 기능
  ![Infinite_Scroll](https://github.com/lastier/project_hodu/assets/36223908/51c22d21-8d21-4a76-a3d7-c771391e0594)

- 맨 위로 (Top) 버튼을 눌렀을 때 홈페이지 상단으로 이동하는 기능
  ![top_button_effect](https://github.com/lastier/project_hodu/assets/36223908/c9da1c88-d13e-4b48-8568-1d98e2ebbe4f)

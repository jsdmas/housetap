# 과제 진행 순서

1. 아래 로컬 서버 세팅 방법에 따라 세팅을 진행해 주세요.
2. 아래 요구 조건을 만족하도록 과제를 수행해 주세요.
3. 완료 후, 본인 Github 계정에 과제용 repository를 생성해 주신 뒤 해당 링크를 첨부해주세요.

# 과제 실행 전

## [ 로컬 서버 세팅 ]

1. /src/db 경로에 db.json 파일을 생성해주세요.
   해당 파일에 하단 데이터(붙임 1 참조)를 붙여넣기 한 후 저장해주세요.
2. ‘json-server’ 패키지를 설치해 주세요.(https://www.npmjs.com/package/json-server)
3. package.json - scripts 가장 하단에 아래 코드를 넣으신 뒤, 커맨드를 실행해주세요.
4. "server": "json-server --watch ./src/db/db.json --port 3001"
5. command: npm run server
6. 세팅된 서버를 활용해 과제를 진행해주세요.(3001번 포트)

# 요구 사항(필수)

## [ 프로젝트 구성 ]

1. Create React App을 사용해 세팅해주세요. Next.js 를 사용하셔도 됩니다.
2. 모바일 웹 기준으로 구현해 주세요.(Chrome 브라우저에서 정상적으로 실행되어야 합니다.)
3. 전역 상태관리 라이브러리를 사용해 주세요.
   Redux, Redux-toolkit, Jotai, Recoil, Zustand, React Context API 등
4. 스타일링
   완성된 UI 라이브러리는 사용할 수 없습니다.(bootstrap, material-ui 등)
   CSS-in-JS는 사용 가능합니다.(emotion, styled-component 등)

## [ 홈 ]

버튼을 클릭하면 /order 페이지로 이동해야 합니다.

## [ /order ]

1. 피그마의 /order로 표시된 부분에 해당합니다.
2. 로고가 있는 헤더는 상단에, 총 가격 및 주문하기 버튼이 있는 부분은 하단에 스크롤에 상관없이 고정되도록 만들어 주세요.
3. 페이지에 들어오면 바로 주문 아이템을 불러와 주세요.
4. 주문 아이템을 불러오는 요청의 로딩 표시를 해주세요.
5. Counter를 활용해 주문 아이템의 개수를 조작할 수 있게 구현해 주세요.
6. 수량은 음수가 될 수 없습니다.
7. 주문할 수 있는 최대 수량은 999개 입니다.
8. 주문 아이템의 개수를 조작할 때, 각 아이템의 가격과 하단 총 가격, 하단 총 수량이 맞게 변해야 합니다.
9. 주문 아이템의 합계 수량이 0일 때는 주문할 수 없습니다.
10. 수량이 1 이상인 아이템의 배경색을 바꿔 주세요.
11. 주문하기 클릭 후 로딩 중인 상태를 하단 버튼에 표시해 주세요.

## [ /complete, /error ]

### /complete

주문이 성공했을 때 노출되는 페이지입니다.  
3초 뒤에 다시 /order 페이지로 돌아가야 합니다.

### /error

주문이 실패했을 때 노출되는 페이지 입니다.

3초 뒤에 다시 /order 페이지로 돌아가야 합니다.

# 요구 사항(선택)

적절하게 컴포넌트를 나누어 주세요.
Typescript를 사용하셔도 됩니다.

붙임 1. 사용할 데이터

```
{
"items": [
{
"id": "39843-2",
"name": "A 벽지",
"event": 1,
"materialType": 1,
"price": 100000
},
{
"id": "32843-3",
"name": "B 벽지",
"event": 0,
"materialType": 1,
"price": 120000
},
{
"id": "34878-3",
"name": "C 벽지",
"event": 0,
"materialType": 1,
"price": 90000
},
{
"id": "47429-1",
"name": "D 벽지",
"event": 0,
"materialType": 1,
"price": 130000
},
{
"id": "31321-1",
"name": "E 마루",
"event": 0,
"materialType": 2,
"price": 150000
},
{
"id": "82143-3",
"name": "F 마루",
"event": 0,
"materialType": 2,
"price": 180000
},
{
"id": "43823-2",
"name": "G 데코타일",
"event": 1,
"materialType": 3,
"price": 120000
},
{
"id": "85622-1",
"name": "H 마루",
"event": 0,
"materialType": 2,
"price": 130000
},
{
"id": "39323-4",
"name": "I 데코타일",
"event": 1,
"materialType": 3,
"price": 100000
},
{
"id": "57389-2",
"name": "J 마루",
"event": 0,
"materialType": 2,
"price": 110000
},
{
"id": "47342-3",
"name": "K 벽지",
"event": 0,
"materialType": 1,
"price": 80000
}
]
}
```

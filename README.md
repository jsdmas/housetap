# 두번쨰 과제

두번째의 사전과제 구현 레포지토리입니다 :)

# 지원자

이름 : 장진호  
email : sdmas5730@gmail.com

# 설치 & 실행

```
npm install
npm run command  -> json server on
npm start
```

# 🎉 배포링크

local에 설치하지않고 바로 확인하실 수 있게 배포를 하였습니다.  
배포는 vercel을 사용하였습니다.  
배포한 json 서버는 가동되는데 시간이 좀 걸립니다. (30초 ~ 1분) 페이지 진입 후 조금 기다려주셔야 합니다.

[두번쨰 사전과제](https://housetap.vercel.app/)

# 설계시 고려 사항

- 각 컴포넌트는 하나의 기능 또는 역할에 집중하도록 작성하려 노력했습니다.
- 상태관리 라이브러리는 `redux`를 사용하였습니다.
  - 선택 이유는 상태값을 추적하기 쉬워 디버깅이 용이하다는 장점 떄문이였습니다.
  - 초기 설계시의 상태관리 관점은 크게 3가지 요소를 고려하였습니다. `(사용자 선택 품목, 화면구성 데이터, 결제 데이터)`
- 반복되는 로직은 util함수와 커스텀hook으로 `추상화` 하였습니다.
- 디자인은 figma에 올려주신 css를 참고하였습니다.

# 💾 프로젝트 구성

- 세팅 : CRA
- 언어 : `typeScript`
- 상태관리 : `redux`
- mock서버 : `json-server`
- 코드 포매터 : `eslint`, `prettier`
- UI 관련 라이브러리 : `styled-components`

# 📝 프로젝트 핵심 요구사항

> 과제 요구사항은 모두 구현 하였습니다.

- order
  - 헤더, 주문구역 고정
  - 페이지 바로 주문 아이템을 불러오기
  - 로딩 표시
  - Counter를 활용한 아이템 개수 조작
  - 수량이 1 이상인 아이템의 배경색 바꾸기
  - 주문하기 클릭 후 로딩 중인 상태를 하단 버튼에 표시
- complete, error
  - 3초 뒤에 다시 /order 페이지로 돌아가게 구현

# 📌 커밋 컨벤션

| 유형 |        의미        |
| :--: | :----------------: |
| init | 프로젝트 초기 설정 |
| feat |     기능 추가      |
| fix  |     기능 수정      |
| docs |     문서 관련      |

# 📦 폴더구조

```
📦src
├── 📂api
├── 📂assets - 제공해주신 로고
├── 📂components  - 컴포넌트 모음
├── 📂constants - 자주 쓰이는 상수 모음
├── 📂Container - 비즈니스 로직을 분리하는 컴포넌트
├── 📂hooks
├── 📂db - 제공해주신 데이터
├── 📂pages
├── 📂store - redux store, reducer
├── 📂styles
├── 📂types - 타입 모음
├── 📂utils - 유틸함수 모음
├── App.tsx
├── index.tsx
└── Router.tsx - 라우터 설정
```

- 가독성 및 유지보수를 위해 `📂Container` 폴더를 사용하여 비즈니스로직을 분리하여 프레젠테이션 컴포넌트를 단순하게 유지하였습니다.

# 프로젝트 세부 변경사항

## 주문 클릭후 기존의 선택 아이템 품목 reset

주문 후 사용자가 선택한 값들을 초기화하여 다시 order 페이지로 돌아가도 기존의 값들은 없어지게 구성하였습니다.
![Jan-11-2024 16-40-07](https://github.com/jsdmas/jsdmas.github.io/assets/105098581/485dde7f-2ab5-4c10-bc1c-859992b8e5ba)

## 주문 성공, 실패 관련 코드

만약 주문을 실패하게 변경할 경우 resolve가아닌 reject를 호출하게 하시면 됩니다.

- 관련 코드 : [https://github.com/jsdmas/housetap/blob/main/src/components/Bill/index.tsx](https://github.com/jsdmas/housetap/blob/main/src/components/Bill/index.tsx)

```ts
const submitOrder = async () => {
  try {
    submitOrderLoading(true);
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => {
        // 실패화면 이동시 reject 호출.
        resolve(true);
        // reject('주문 실패!');
      }, 1500);
    });

    if (result) {
      navigate(PATH.COMPLETE);
    }
  } catch (err) {
    console.error(err);
    navigate(PATH.ERROR);
  } finally {
    submitOrderLoading(false);
    deleteSelectItem();
  }
};
```

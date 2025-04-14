# React Global State
커스텀 React 전역 상태 관리 시스템 구현 프로젝트입니다

## 주요 기능
- Zustand와 유사한 API를 가진 상태 관리
- React 18의 최신 기능 활용 (`useSyncExternalStore`)
- 선택자(selector) 패턴 지원

## 구현 내용
### 상태 저장소 (store)
`createStore.ts`에서 기본적인 상태 저장소 생성
- 상태 가져오기 (`getState`)
- 상태 업데이트 (`setState`)
- 구독 (`subscribe`)

### 리액트 훅 (React Hook)
`useStore.ts`에서 React 컴포넌트에서 저장소를 사용할 수 있는 훅 구현
- `useSyncExternalStore`를 활용한 상태 구독
- 두 가지 사용 패턴 지원:
  - 전체 상태와 setState 함수 가져오기
  - `selector`를 사용하여 상태의 일부만 구독
> **참고**: `selector` 없이 전체 상태를 구독하면 불필요한 렌더링이 발생할 수 있습니다
>
![화면 기록 2025-04-14 오후 4 48 57](https://github.com/user-attachments/assets/cde9245d-1e70-4ea5-b619-617292ac4452)


### 예시
- `countStore.ts`: 카운터 상태를 관리하는 저장소
- `Component1.tsx`: 전체 상태와 `setState`를 사용하는 컴포넌트
- `Component2.tsx`: `selector`을 사용하는 컴포넌트

## 사용 방법
### 스토어 생성
```typescript
export const countStore = createStore({
  count1: 0,
  count2: 0,
});
```

### 컴포넌트에서 사용
```typescript
// 전체 상태 사용
const [state, setState] = useStore(countStore);

// selector 사용
const count2 = useStore(countStore, state => state.count2);
```



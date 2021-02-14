# mono-react-native

React-native 프로젝트를 모노레포로 관리하는 방법에 대하여 계속해서 적용할 예정입니다.
커밋 메세지 및 문서는 최대한 한글로 작성할 예정입니다.

## 목표

모노레포 구조의 모바일/웹/데스크탑 어플리케이션 개발
초기 목표는 할 일 리스트 개발

1. 코드 공유(Code sharing) 가능한 유니버설 플랫폼 개발
2. 외부 공유 가능한 UI 라이브러리 개발
3. 유닛 테스트 및 인터랙션 테스트
4. CI/CD

## 구조

```text
mono-react-native/
├─ apps           // 모바일/웹(추후)/데스크탑(추후) 어플리케이션 관리
│  └─ mobile      // 모바일 앱
│  └─ stroybook   // UIKit 개발을 위한 스토리북 앱
├─ packages       // 공용 모듈의 패키지화
│  └─ uikit       // 로컬 및 npm 공유 UI 라이브러리
├─ node_modules   // 각 패키지 별 hoist 된 디펜던시들이 설치되는 폴더
├─ ...            // lint, prettier, watchman, babel 등의 config 파일을 모두 루트로 올려 설정합니다
└─
```

export const site={
  "name": "아이폰 콘텐츠결제 노트",
  "description": "아이폰이라는 기기 이름보다 실제 구매 서비스와 Apple 계정의 결제 기록을 확인합니다.",
  "editor": "결제노트 편집",
  "updatedAt": "2026-10-30",
  "keyword": "아이폰정보이용료현금화방법",
  "slug": "iphone-store-billing",
  "tag": "iPhone · Apple",
  "number": "03",
  "answer": "아이폰정보이용료현금화방법을 찾을 때는 Apple 구매인지 다른 서비스 결제인지 먼저 확인하세요. 아이폰을 사용한다는 사실만으로 모든 콘텐츠가 Apple의 결제·환불 정책을 따르거나 현금으로 반환되는 것은 아닙니다.",
  "intro": "아이폰이라는 기기 이름보다 실제 구매 서비스와 Apple 계정의 결제 기록을 확인합니다.",
  "steps": [
    {
      "name": "기기와 결제 주체 구분",
      "description": "아이폰의 웹사이트에서 구매한 서비스가 App Store 주문인지 확인합니다. 영수증을 보낸 주체와 계정, 상품명을 기록하세요. Google Play용 안내를 Apple 계정의 메뉴 설명으로 적용하지 않습니다."
    },
    {
      "name": "대한민국 결제 방법 확인",
      "description": "Apple 공식 목록의 대한민국 항목에서 현재 결제 방법을 확인합니다. 본인 회선에 휴대 전화 청구가 표시되는지도 직접 확인하세요. 계정 국가와 실제 결제 조건을 보지 않고 이용 가능 여부를 약속할 수는 없습니다."
    },
    {
      "name": "환불 목적이면 주문부터 찾기",
      "description": "Apple이 처리한 구매의 환불은 공식 문제 신고 경로에서 대상 주문을 찾습니다. 다른 계정을 사용했는지 영수증을 대조하세요. 외부 상대에게 Apple 계정 암호를 넘겨 대신 확인하게 하지 않습니다."
    }
  ],
  "accent": "#43315d" ,
  contact: {
    name: '누티켓', phone: '010-8111-1555', kakaoId: 'N1348',
    kakaoUrl: 'https://qr.kakao.com/talk/MBsKvshDmtamG2EuQNKdmPuGFJQ-',
    sourceUrl: 'https://xn--od1b246c0uc.kr', verifiedAt: '2026-10-03'
  }
} as const;
export const topics=[{id:'basics',name:"iPhone · Apple",number:'01',description:"아이폰이라는 기기 이름보다 실제 구매 서비스와 Apple 계정의 결제 기록을 확인합니다."}] as const;
export const phoneHref='tel:'+site.contact.phone.replaceAll('-','');

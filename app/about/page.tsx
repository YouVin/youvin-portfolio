export default function AboutPage() {
  return (
    <section className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold text-neutral-900">About</h1>
        <p className="max-w-2xl text-sm text-neutral-600">
          협업 좋아하고, 사용자가 실제로 만지는 부분을 개선하는 데 집착하는
          프론트엔드 개발자 유빈입니다.
        </p>
      </header>

      <div className="space-y-4 text-sm leading-relaxed text-neutral-700">
        <p>
          저는 단순히 화면만 그리는 게 아니라
          &nbsp;
          <strong className="font-semibold">
            흐름, 상태, 예외 상황, 그리고 결국 사용자 경험까지
          </strong>
          를 같이 고민합니다.
        </p>

        <p>
          장바구니 수량 변경처럼 사소해 보이는 인터랙션에서도 Optimistic UI,
          디바운싱, 전역 상태 동기화(Zustand) 같은 실전 패턴을 적용하고,
          결제/주문 페이지는 SSR과 CSR을 상황별로 나눠서 성능과 안정성을 같이
          챙겼습니다.
        </p>

        <p>
          새로운 스택을 시도하는 걸 무서워하지 않아요. Vue, Flutter, 순수
          JavaScript 게임, HTML/CSS 클론 등 다양한 방식으로 계속 만들어 보고
          있어요. 만들어보면 알게 되거든요. “어디가 불편했는지”. 그게 제가
          다음 코드를 더 잘 짜게 하는 재료라고 생각해요.
        </p>
      </div>
    </section>
  );
}

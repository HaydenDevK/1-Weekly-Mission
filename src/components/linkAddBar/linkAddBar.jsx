import * as S from "./linkAddBar.style.js";
import linkIcon from "assets/icons/link.svg";

export default function linkAddBar() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <S.LinkAddContainer>
        <img src={linkIcon} alt="링크 아이콘" />
        <label className="a11y" htmlFor="addInput"></label>
        <S.LinkAddInput
          id="addInput"
          type="text"
          placeholder="링크를 추가해 보세요."
          aria-label="추가할 링크를 입력하는 입력 요소입니다."
          onChange={(e) => {}}
        />
        <S.LinkAddButton>추가하기</S.LinkAddButton>
      </S.LinkAddContainer>
    </form>
  );
}

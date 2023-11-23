import { useState } from "react";
import * as S from "./folderAddModal.style.js";
import ModalBase from "components/modals/modalBase/ModalBase.jsx";

export default function FolderAddModal({ onClickClose }) {
  const [inputValue, setInputValue] = useState("");
  return (
    <ModalBase title="폴더 추가" onClickClose={onClickClose}>
      <S.FolderAddForm
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <S.FolderAddFieldset>
          <label className="a11y" htmlFor="addInput">
            폴더 추가
          </label>
          <S.FolderAddInput
            id="addInput"
            type="text"
            placeholder="내용 입력"
            aria-label="추가할 폴더명을 입력하는 입력 요소"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <S.FolderAddButton>추가하기</S.FolderAddButton>
        </S.FolderAddFieldset>
      </S.FolderAddForm>
    </ModalBase>
  );
}

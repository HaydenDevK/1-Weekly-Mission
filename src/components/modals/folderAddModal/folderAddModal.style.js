import styled from "styled-components";

export const FolderAddForm = styled.form``;

export const FolderAddFieldset = styled.fieldset``;

export const FolderAddInput = styled.input`
  margin-top: 2.4rem;
  margin-bottom: 1.5rem;
  width: 100%;
  padding: 1.8rem 1.5rem;
  border-radius: 0.8rem;
  border: 1px solid #ccd5e3;
  background: var(--linkbrary--color--white);
  color: var(--linkbrary--color--gray0);
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.5;

  :-webkit-input-placeholder {
    color: var(--linkbrary--color--gray2);
  }

  &:focus {
    border: 1px solid var(--linkbrary--color--primary);
  }
`;

export const FolderAddButton = styled.button`
  width: 100%;
  padding: 1.6rem 2rem;
  border-radius: 0.8rem;
  background: var(--linkbrary--gra--purpleblue);
  color: #f5f5f5;
  font-size: 1.6rem;
  font-weight: 600;
`;

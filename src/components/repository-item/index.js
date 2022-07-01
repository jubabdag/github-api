import React from 'react';
import * as S from './styled';

const RepositoryItem = ({ name, linkToRepo, fullName }) => {

  return (
    <S.Wrapper>
      <S.WrapperTitle>{name}</S.WrapperTitle>
      <S.WrapperFullName>full name: </S.WrapperFullName>
      <S.WrapperLink> 
        <a 
          href={linkToRepo} 
          target="_blank"
          rel="noopener noreferrer"
        >
          {fullName}
        </a>
      </S.WrapperLink>
    </S.Wrapper>
  );
};

export default RepositoryItem;
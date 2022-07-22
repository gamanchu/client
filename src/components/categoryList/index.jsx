import styled from 'styled-components';

export default function CagetoryList() {
  return (
    <>
      <CategoryIconListWrapper>
        <CategoryIcon
          key={1}
          text={'운동/스포츠'}
          icon={`/img/sports.svg`}
          color={'#FFDEB4'}
        />

        <CategoryIcon
          key={2}
          text={'외국/언어'}
          icon={`/img/language.svg`}
          color={'#FFB4B4'}
        />

        <CategoryIcon
          key={3}
          text={'문화/공연'}
          icon={'/img/art.svg'}
          color={'#FDE9FF'}
        />

        <CategoryIcon
          key={4}
          text={'악기'}
          icon={'/img/instrument.svg'}
          color={'#B2A4FF'}
        />

        <CategoryIcon
          key={5}
          text={'봉사'}
          icon={'/img/volunteer.svg'}
          color={'#D9F8C4'}
        />

        <CategoryIcon
          key={6}
          text={'댄스'}
          icon={'/img/dance.svg'}
          color={'#C4D7E0'}
        />

        <CategoryIcon
          key={7}
          text={'사교'}
          icon={'/img/networking.svg'}
          color={'#FFFE91'}
        />
        <CategoryIcon
          key={8}
          text={'자동차'}
          icon={'/img/car.svg'}
          color={'#EAF6F6'}
        />

        <CategoryIcon
          key={9}
          text={'반려동물'}
          icon={'/img/animal.svg'}
          color={'#FFDEDE'}
        />

        <CategoryIcon
          key={10}
          text={'여행'}
          icon={'/img/airport.svg'}
          color={'#F0EBE3'}
        />

        <CategoryIcon
          key={11}
          text={'요리'}
          icon={'/img/cook.svg'}
          color={'#CED89E'}
        />

        <CategoryIcon
          key={12}
          text={'독서'}
          icon={'/img/book.svg'}
          color={'#FCF8E8'}
        />
      </CategoryIconListWrapper>
    </>
  );
}
export const CategoryIconListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 351px;
  margin: auto;
`;
export function CategoryIcon({ text, icon, color }) {
  return (
    <>
      <IconContainer onClick={() => console.log(text)}>
        <IconWrapper color={color}>
          <img
            src={icon}
            className="sports"
            alt="React"
            style={{ width: '40px', height: '40px' }}
          />
        </IconWrapper>
        <p style={{ textAlign: 'center', fontSize: '7px' }}>{text}</p>
      </IconContainer>
    </>
  );
}

export const IconContainer = styled.div`
  width: 55px;
  height: 50px;
  margin: 1rem;
`;

export const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color};
`;

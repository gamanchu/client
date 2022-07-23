import GroupCardList from '../src/components/groupCardList';
import CagetoryList from '../src/components/categoryList';
import OpenMeetingBtn from '../src/components/openMettingBtn';

export default function Home() {
  return (
    <div className={'home'}>
      <OpenMeetingBtn />
      {/*<CagetoryList />*/}
      <h2
        style={{
          paddingLeft: '14px',
          marginTop: '37px',
          fontWeight: 'bold',
          color: '#3FA9FF',
        }}
      >
        최근 모임
      </h2>
      <GroupCardList />
    </div>
  );
}

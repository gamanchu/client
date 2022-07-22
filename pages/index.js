import GroupCardList from '../components/groupCardList';
import OpenMeetingBtn from '../components/openMettingBtn';
export default function Home() {
  return (
    <div className={'home'}>
      <OpenMeetingBtn />
      <GroupCardList />
    </div>
  );
}

import GroupCard from '../components/GroupCard';

export default function Home() {
  return (
    <div className={'home'}>
      <GroupCard
        image={
          'https://www.gyeongju.go.kr/upload/content/thumb/20200625/D2B1B07FDDAE42639D179009999E5017.jpg'
        }
        title={'경주월드... 좋아하시나요!!?'}
        location={'경상북도 경주시'}
        date={'2022-07-22'}
        limit={'6'}
        current={'4'}
      />
    </div>
  );
}

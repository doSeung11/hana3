import { ChangeEvent, useRef, useState } from 'react';

//변수는 rerender할 때마다 초기화가 되기 때문에, 영향을 받지 않는 영역으로 빼서 선언해.
const CITIES = ['서울', '대전', '대구', '부산', '창원'];

export default function Sample() {
  //변수였다면 계속 초기화되는데, 상태라서 처음 등록할 때만 초기화되는 거야.
  //rerender할 때는 초기화가 안 된다는 말이야.
  const [nickname, setNickname] = useState('hong');
  const [address, setAddress] = useState('');
  const [age, setAge] = useState(0);

  // 아래 코드는 상태 바뀔 때마다 리렌더 발생해서 초기화 되거든
  //   let nameChangeCnt = 0;
  //이게 바뀌어도 리렌더링 발생 안 하는 이유는
  //이게 참조하는 값이 바뀌는 거지, 이게 바뀌는 게 아니거든!
  const nameChangeCnt = useRef(0);

  // 한 컴포넌트에서 값 바꿀 땐 이렇게 날릴 필요 없이, setNickname하면 돼.
  const changeNickname = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.currentTarget.value);
    nameChangeCnt.current += 1;
  };

  return (
    <>
      <div>
        <h1>Sample</h1>
        <h5>
          NickName: {nickname}({age}세) - {address}
        </h5>

        <input
          type='text'
          value={nickname}
          onChange={changeNickname}
          //   onChange={(e) => setNickname(e.currentTarget.value)}
        />

        <input
          type='number'
          value={age}
          onChange={(e) => setAge(+e.currentTarget.value)}
        />

        <input
          type='text'
          //value는 변화하는 값 다 잡아줘.
          value={address}
          //리액트 담당, 브라우저 console에서 value라고 나오는 건 actual-dom
          //defaultValue={address}
          onChange={(e) => setAddress(e.currentTarget.value)}
        />
        <select onChange={(e) => setAddress(e.currentTarget.value)}>
          {/* <option value='서울'>서울</option> */}
          {CITIES.map((item: string) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <button onClick={() => alert(nameChangeCnt.current)}>TTT</button>
      </div>
    </>
  );
}

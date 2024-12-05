import { useState } from 'react';
import { useMember } from '../lib/graphql/hooks';
import MemberDetails from '../components/MemberDetails';

function HomePage() {
  const [ inputVal, setInputVal ] = useState("");
  const [ memberId, setMemberId ] = useState("");

  const { member } = useMember(memberId);

  const getMember = () => {
    setMemberId(inputVal);
  };

  return (
    <div>
      <h1 className="title">Members</h1>

      <div>
        <label className="font-bold">Member Id </label>
        <input className="ml-2 px-1 border-2 border-gray-300 rounded-sm" id="memberId" title="Member Id" value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
        <button className="ml-2 px-4 py-1 border-2 rounded text-white bg-gray-500" onClick={() => getMember()}>Search</button>
      </div>

      <div className="mt-2">
        {!member ? <span>Record not Found</span>
          :<MemberDetails member={member} />
        }
      </div>
    </div>
  );
}

export default HomePage;

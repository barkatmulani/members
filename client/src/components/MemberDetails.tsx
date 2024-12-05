import { Member } from '../models';

interface Props {
  member: Member;
}

function MemberDetails({ member }: Props) {
  return (
    <div>
      <ul className="box">
        <li>
          <Info label="First Name" value={member?.firstName} />
          <Info label="Last Name" value={member?.lastName} />
          <Info label="Email" value={member?.email} />
          <Info label="Member Type" value={member?.details.memberType} />
          <span className="font-bold underline">Visits</span>
          <div>
            {
              !member?.visits?.length ? <>Nil</> :
              <table className="ml-5 w-96">
                <thead>
                  <tr>
                    <th>Facility</th>
                    <th>Visit Date</th>
                    <th>Visit Time</th>
                  </tr>
                </thead>
                <tbody>
                {
                  member.visits.map((visit, i) => (
                    <tr key={i}>
                      <td>{visit.facility}</td>
                      <td>{visit.visitDate}</td>
                      <td>{visit.visitTime}</td>
                    </tr>
                  ))
                }
                </tbody>
              </table>
            }
          </div>
        </li>
      </ul>
    </div>
  );
}

const Info = ({ label, value }) => {
  return (
    <div>
      <label className="w-40 inline-block font-bold">{label}</label>
      <span>{value}</span>
    </div>
  );
}

export default MemberDetails;

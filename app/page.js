import {StudentInfo} from './student-info' 
import Link from 'next/link';

export default function Home() {
  const assignments = [2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  const lastAssignment = 4;

  return (
    <div>
      <h1 className='text-3xl font-bold'>CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo />
      <ul>
        {assignments.map((week)=>
        week <= lastAssignment ?(
          <li key={week}>
            <Link href={`/week${week}`}> Week {week}</Link>
          </li>
        ):(
          <li key={week}> Week {week} - not done</li>
        ))}
      </ul>
    </div>
  );
}

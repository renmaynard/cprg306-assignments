import {StudentInfo} from './student-info' 
import Link from 'next/link';

export default function Home() {
  const assignments = [2,3,4,5,6,7,8,9]
  const lastAssignment = 8;

  return (
    <div>
      <h1 className='text-3xl font-bold'>CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo />
      <ul>
        {assignments.map((assignment)=>
        assignment <= lastAssignment ?(
          <li key={assignment}>
            <Link href={`/week${assignment}`}> Assignment {assignment}</Link>
          </li>
        ):(
          <li key={assignment}> Assignment {assignment} - not done</li>
        ))}
      </ul>
    </div>
  );
}

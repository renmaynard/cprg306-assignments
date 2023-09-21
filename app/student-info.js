import Link from 'next/link';

export function StudentInfo() {
    return(
        <div className='text-lg'>
        <p>Name: Rene Maynard</p>
        <p>Course section: CPRG 306 E</p>
        <Link href="https://github.com/renmaynard">https://github.com</Link>
        </div>
    );
    
}
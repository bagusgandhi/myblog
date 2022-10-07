import Link from "next/link";
export default function Footer(){
    return (
        <>
            <div className='flex flex-col items-center justify-between  py-10 sm:flex-row sm:py-12'>
                <div className='mr-auto flex flex-col items-center sm:flex-row'>
                    <p>© {new Date().getFullYear()} Bagus Gandhi.</p>
                </div>
            </div>
        </>
    );
}
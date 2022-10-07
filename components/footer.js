import Link from "next/link";
export default function Footer(){
    return (
        <>
            <div className='flex justify-center py-10 sm:flex-row sm:py-12'>
                    <p>© {new Date().getFullYear()} Bagus Gandhi.</p>
            </div>
        </>
    );
}
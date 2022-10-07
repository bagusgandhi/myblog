export default function PostTitle({ title, description }){
    return (
        <>        
            <h1 className='"block font-body text-3xl font-semibold leading-tight text-black dark:text-white sm:text-4xl md:text-5xl'>{title}</h1>
            <div className='flex items-center py-5 sm:pt-8'>
                <p className='pr-2 font-body font-light text-black dark:text-white'>
                    {description}
                </p>
            </div>
        </>
    );
}
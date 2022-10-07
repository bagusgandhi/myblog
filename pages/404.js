import ErrorIcon from '../components/ui/icons/error' 
export default function NotFound(){
    return (
        <div className='pb-8 sm:pb-12 grid justify-items-center'>
            <div>
                <ErrorIcon className={'w-20 h-20 mx-auto my-10'}/>
                <h3 className="text-center text-4xl font-bold">404 | Not Found</h3>
            </div>
        </div>
    );
}
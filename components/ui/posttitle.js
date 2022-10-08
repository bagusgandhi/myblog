export default function PostTitle({ title, description }){
    return (
        <>        
            <h1>{title}</h1>
            <h2 className="subheading mb-10">
                {description}
            </h2>
        </>
    );
}
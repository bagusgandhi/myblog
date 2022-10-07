import { getAllPostByTagsSlug, getAllTags, getTagbySlug } from "../../lib/ghost";
import PostList from "../../components/ui/postlist";
import PostTitle from "../../components/ui/posttitle";

export async function getStaticPaths(){
    const tags = await getAllTags();
    const paths = tags.map(({ slug }) => ({ params: { slug } }));
    return { paths, fallback: false };
}

export async function getStaticProps({ params }){
    const { slug } = params;
    const posts = await getAllPostByTagsSlug(slug);
    const data = await getTagbySlug(slug);
    return { props: { posts, data } };
}

export default function Tag({ posts, data}){
    return (
        <div className='pb-8 sm:pb-12'>
            <PostTitle 
                title={`${data.name} : ${ data.count.posts }`}
                description={'Articles, tutorials, snippets, rants, and everything else.'}
            />
            {posts.map((post) => (
                <PostList key={post.id} post={post} />
            ))}
        </div>
    );
}


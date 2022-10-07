import { getAllPages, getPagesBySlug } from '../lib/ghost';
import Content from '../components/ui/content';

export async function getStaticPaths(){
    const pages = await getAllPages();
    const paths = pages.map(({ slug }) => ({ params: { slug } }));
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }){
    const { slug } = params;
    const data = await getPagesBySlug(slug);
    return { props: { data } }
}

export default function Page({ data }){
    return (
        <article>
            <Content data={data} />
        </article>
    );
}

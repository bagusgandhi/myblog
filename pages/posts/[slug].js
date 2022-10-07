import Prism from 'prismjs';
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
  } from 'next-share';
import { useEffect } from 'react';
import { getPostBySlug, getAllPosts } from "../../lib/ghost";
import Content from '../../components/ui/content';

export async function getStaticPaths(){
    const posts = await getAllPosts();
    const paths = posts.map(({ slug }) => ({ params: { slug } }));
    return { 
        paths,
        fallback: false
     }
}

export async function getStaticProps({ params }){
    const { slug } = params;
    const data = await getPostBySlug(slug);
    return { props: { 
        data,
        slug,
        type: 'article' 
    } }
}


export default function Post({ data, slug }){

    useEffect(() => {
        var disqus_config = function () {
            this.page.url =  window.location.href;
            this.page.identifier = data.slug;
        };
        const script = document.createElement('script');
        script.src = 'https://bagusgandhi.disqus.com/embed.js';
        script.setAttribute('data-timestamp', Date.now().toString())
        document.body.appendChild(script)
    });

    useEffect(() => {
        const highlight = async () => {
            Prism.highlightAll();
        }
        highlight();
    }, [data]);

    return (
        <article>
            <div className='pb-8 sm:pb-12'>
                <Content data={data} />
                <div className='flex gap-2'>
                    <FacebookShareButton
                        url={`${process.env.APP_URL}/posts/${slug}`} >
                        <FacebookIcon size={32} round />
                    </FacebookShareButton>
                    <TwitterShareButton
                        url={`${process.env.APP_URL}/posts/${slug}`} >
                        <TwitterIcon size={32} round />
                    </TwitterShareButton>
                </div>
            </div>
            <div className='p-8 bg-white rounded-xl'>
                <div className='dark' id="disqus_thread"></div>
            </div>
        </article>
    );
}
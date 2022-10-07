import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
    url: process.env.GHOST_API_URL,
    key: process.env.GHOST_CONTENT_API_KEY,
    version: 'v5.0'
});

export async function getAllPosts(){
    const posts = await api.posts.browse();
    return posts;
}

// export async function getAllPostByPagination(page){
//     const posts = await api.posts.browse({ page })
//     return posts;
// }


export async function getPosts(){
    const posts = await api.posts.browse({ include: ['tags', 'authors', 'meta']});
    return posts;
}

export async function getNewestArticle(){
    const posts = await api.posts.browse({ limit: 5, include: ['tags', 'authors']});
    return posts;
}

export async function getPostBySlug(slug){
    const post = await api.posts.read(
        {slug},
        {formats: ['html'], include: 'tags'}
    );
    return post;
}

export async function getAllPages(){
    const pages = await api.pages.browse({limit: 'all'});
    return pages;
}

export async function getPagesBySlug(slug){
    const page = await api.pages.read(
        {slug},
        {formats: ['html']}
    );
    return page;
}

export async function getAllTags(){
    const tags = await api.tags.browse({ limit: 'all' });
    return tags;
}

export async function getAllPostByTagsSlug(slug){
    const posts = await api.posts.browse({
        filter: `tag: ${ slug }`,
        include: ['tags', 'authors']
    }); 
    return posts;
}

export async function getTagbySlug(slug) {
    const tag = await api.tags.read(
        { slug },
        { include: 'count.posts' }
    );
    return tag;
}

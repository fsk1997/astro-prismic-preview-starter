// import * as prismic from '@prismicio/client'

// // Fill in your repository name
// export const repositoryName = 'testing-sksksksksksksk'

// export const client = prismic.createClient(repositoryName, {
//   // If your repository is private, add an access token
//   accessToken: '',

//   // This defines how you will structure URL paths in your project.
//   // Update the types to match the custom types in your project, and edit
//   // the paths to match the routing in your project.
//   //
//   // If you are not using a router in your project, you can change this
//   // to an empty array or remove the option entirely.

//   //   routes: [
// //     {
// //       type: 'homepage',
// //       path: '/',
// //     },
// //   ],
// })

// import Prismic from '@prismicio/client';
// const API_ENDPOINT = "https://astro-prismic-demo.prismic.io/api/v2";

// const client = new Prismic.Client(API_ENDPOINT);

// export async function getAllPosts() {
//     return client.query([Prismic.predicates.at('document.type', 'blog_post')]);
// }


import * as prismic from '@prismicio/client'

export const repositoryName = 'testing-sksksksksksksk'

export const prismicClient = prismic.createClient(repositoryName)

export function getAllEssays() {
    const results = prismicClient.getAllByType('essay')
    // console.log('boom')
    return results
}
const path = require(`path`);

async function turnPostsIntoPages({ graphql, actions }) {
  // 1. Get a template for this page
  const postTemplage = path.resolve("./src/templates/PostTemplate.js");
  // 2. Query all blogs
  const { data } = await graphql(`
    query {
      posts: allSanityPost {
        nodes {
          title
          slug {
            current
          }
        }
      }
    }
  `);
  // 3. Loop over each blog and create a page for that blog
  data.posts.nodes.forEach((post) => {
    actions.createPage({
      // What is the URL for this new page?
      path: `blog/${post.slug.current}`,
      component: postTemplage,
      context: {
        slug: post.slug.current,
      },
    });
  });
}

exports.createPages = async function (params) {
  // Create pages dynamically
  // 1. Posts
  await turnPostsIntoPages(params);
};

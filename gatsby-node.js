exports.createPages = async ({ actions, graphql, reporter }) => {
  const resultProjects = await graphql(`
    query Projects {
      allNodeProject {
        nodes {
          id
          path {
            alias
          }
        }
      }
    }
  `);
  const resultPages = await graphql(`
    query Pages {
      allNodePage {
        nodes {
          id
          path {
            alias
          }
        }
      }
    }
  `);

  if (resultProjects.errors) {
    reporter.panic(resultProjects.errors)
  }
  if (resultPages.errors) {
    reporter.panic(resultPages.errors)
  }
  
  resultProjects.data.allNodeProject.nodes.forEach(project => {
    actions.createPage({
      path: project.path.alias,
      component: require.resolve('./src/templates/ProjectTemplate.js'),
      context: {
        projectId: project.id
      }
    })
  });

  resultPages.data.allNodePage.nodes.forEach(page => {
    actions.createPage({
      path: page.path.alias,
      component: require.resolve('./src/templates/PageTemplate.js'),
      context: {
        pageId: page.id
      }
    })
  });
}
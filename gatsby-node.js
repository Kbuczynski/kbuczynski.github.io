/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require("path")

exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig()

  if (stage.startsWith("develop") && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "react-dom": "@hot-loader/react-dom",
    }
  }
}

exports.onCreatePage = async ({ actions }) => {
  const { works } = require("./src/data/works")
  const workTemplate = path.resolve("./src/templates/WorkPage/index.js")

  await works.forEach(work => {
    actions.createPage({
      path: `/works/${work.slug}`,
      component: workTemplate,
      context: {
        work: work,
      },
    })
  })
}

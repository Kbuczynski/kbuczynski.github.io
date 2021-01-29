/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

export const onInitialClientRender = () => {
  setTimeout(() => {
    document.getElementById("___loader").style.display = "none"
  }, 1000)
}

export { default as wrapRootElement } from "./src/state/ReduxWrapper"

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  )
  if (answer === true) {
    window.location.reload()
  }
}

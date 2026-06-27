import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { ExternalPlugin } from "./quartz/plugins"

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
export const quartz = {
  plugins: [
    ExternalPlugin.Explorer({
      filterFn: (node) => !node.slug?.startsWith("images"),
    }),
  ],
}

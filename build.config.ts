/*
 * @Author: wxy
 * @Description: 
 * @Date: 2022-11-28 17:37:27
 * @LastEditTime: 2022-11-28 18:27:38
 */
import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
    'src/rules'
  ],
  clean: true,
  declaration: true,
  rollup: {
    emitCJS: true,
  },
})

// 导入每篇文章的组件和 meta 信息
import PostReact, { meta as metaReact } from './1-PostReact';
import PostKirariNeko, { meta as metaKirariNeko } from './2-PostKirariNeko';
import PostTest, { meta as metaTest } from './3-PostTest';

// 组装成列表
export const postsList = [
    // 新增文章时，在这里加一行 import 和一条数据就好啦！
    {
      ...metaTest,
      component: PostTest
    },
    {
      ...metaKirariNeko,
      component: PostKirariNeko
    }, 
    {
      ...metaReact,
      component: PostReact
    },

];
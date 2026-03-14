import React from 'react';
// 导入同文件夹下的图片，变量名可以随便起
import Img from './image.png'; 

// 导出文章的信息（给主页列表用）
export const meta = {
    id: 3,
    slug: 'test-post',// 文章的唯一标识，用来做网址路径
    title: '测试文章',
    date: '2023-10-27',
    summary: '测试',
    cover: Img // 把导入的图片路径传给 meta
};

// 导出文章组件本身
function PostTest() {
  return (
    <article className="post-content">
      <h1>{meta.title}</h1>
      <p>发布于：{meta.date}</p>
      
      <img src={Img} alt="图片" className="post-cover" />
      
      <p>这里是正文内容... 星璃觉得 React 真好玩！</p>
    </article>
  );
}

export default PostTest;
import React from 'react';
// 导入同文件夹下的图片，变量名可以随便起
import reactImg from './react.png'; 

// 导出文章的信息（给主页列表用）
export const meta = {
    id: 1,
    slug: 'react-use-state',// 文章的唯一标识，用来做网址路径
    title: 'React 入门：useState 详解',
    date: '2026-3-15',
    summary: '今天学习了 React 的状态管理，原来按钮点击这么简单喵！',
    cover: reactImg // 把导入的图片路径传给 meta
};

// 导出文章组件本身
function PostReact() {
  return (
    <article className="post-content">
      <h1>{meta.title}</h1>
      <p>发布于：{meta.date}</p>
      
      <img src={reactImg} alt="React Logo" className="post-cover" />
      
      <p>这里是正文内容... 星璃觉得 React 真好玩！</p>
    </article>
  );
}

export default PostReact;
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { postsList } from './posts'; // 👈 确保这个路径能指到你的 src/posts/index.js

function PostDetail() {
  const { slug } = useParams(); // 获取网址里的 slug

  // 在列表里找对应的文章
  const post = postsList.find(p => p.slug === slug);

  if (!post) {
    return (
      <div style={{ padding: '50px', textAlign: 'center' }}>
        <h2>😿 404 - 文章被猫咪藏起来了</h2>
        <p>找不到关于 "{slug}" 的文章喵。</p>
        <Link to="/">← 返回首页</Link>
      </div>
    );
  }

  // 拿到具体的文章组件
  const ArticleComponent = post.component;

  return (
    <div className="post-detail-page">
      <header style={{ padding: '20px', borderBottom: '1px solid #eee' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#007bff' }}>
          ← 返回首页
        </Link>
      </header>
      
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        {/* 渲染文章内容 */}
        <ArticleComponent />
      </main>
    </div>
  );
}

export default PostDetail;
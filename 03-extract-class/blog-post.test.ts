import { describe, it, expect } from 'vitest';
import { BlogPost } from './blog-post';

describe('Blog Post Manager', () => {
  it('should create blog post with author info', () => {
    const post = new BlogPost('Test Post', 'This is content');
    post.updateAuthorInfo('John Doe', 'john@example.com', 'Writer');
    post.tags = ['tech', 'tutorial'];
    
    const metadata = post.generateMetadata();
    
    expect(metadata).toBe('Test Post by John Doe - tech, tutorial');
  });
});

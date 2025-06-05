export class BlogPost {
  title: string;
  content: string;
  authorName: string = '';
  authorEmail: string = '';
  authorBio: string = '';
  tags: string[] = [];
  comments: Array<{text: string; author: string}> = [];
  likes: number = 0;
  views: number = 0;
  
  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }
  
  publish(): void {
    console.log(`Publishing: ${this.title}`);
  }
  
  addComment(comment: {text: string; author: string}): void {
    this.comments.push(comment);
  }
  
  updateAuthorInfo(name: string, email: string, bio: string): void {
    this.authorName = name;
    this.authorEmail = email;
    this.authorBio = bio;
  }
  
  generateMetadata(): string {
    return `${this.title} by ${this.authorName} - ${this.tags.join(', ')}`;
  }
}

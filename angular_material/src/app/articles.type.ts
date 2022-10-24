export interface ArticleType {
      id: number;
      cover: string;
      title: string;
      description: string;
      liked: boolean;
      saved: boolean;
      author: {
            full_name: string;
            user_name: string;
            picture: string;
      }
}
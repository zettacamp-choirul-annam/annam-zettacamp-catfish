import { ArticleType } from "./articles.type"

export const articleMock: ArticleType[] = [
      {
            id: 0,
            cover: "https://images.unsplash.com/photo-1597696929736-6d13bed8e6a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cG90dGVyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            title: "Pottery Teapot",
            description: "Delft Blue Teapot with Holland Landscape en Windmill design",
            liked: false,
            saved: false,
            author: {
                  full_name: "Choirul Annam",
                  user_name: "Annam",
                  picture: "https://avatars.githubusercontent.com/u/114067662?v=4"
            }
      },
      {
            id: 1,
            cover: "https://images.unsplash.com/photo-1525088553748-01d6e210e00b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29mZWUlMjBiZWFufGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            title: "Stumptown Coffee Roasters",
            description: "Holler Mountain delivers a burst of citrus and berry jam rounded out with notes of creamy caramel",
            liked: false,
            saved: false,
            author: {
                  full_name: "Duanda Mahaputra",
                  user_name: "Duanda",
                  picture: "https://avatars.githubusercontent.com/u/114080379?v=4"
            }
      }
]

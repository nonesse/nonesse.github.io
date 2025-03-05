import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Black Fortress",
  DESCRIPTION: "Welcome to Black Fortress, my hidden corner on the Internet.",
  AUTHOR: "nonesse",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  }/*,
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },*/
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "nonesse",
    HREF: "https://github.com/nonesse"
  }
  /*{ 
    NAME: "Email",
    ICON: "email", 
    TEXT: "markhorn.dev@gmail.com",
    HREF: "mailto:markhorn.dev@gmail.com",
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "markhorn-dev",
    HREF: "https://www.linkedin.com/in/markhorn-dev/",
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "markhorn_dev",
    HREF: "https://twitter.com/markhorn_dev",
  },*/
]

export const LANG_ES = "es"
export const LANG_EN = "en"
export const NO_SHERLOCK_HINT_ES = "Esta pregunta no tiene pista."
export const NO_SHERLOCK_HINT_EN = "No hint for this question."
export const URL_SHERLOCK_SOLVED_GIF = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWh5ZDZ4dmc2cXRiaGN1cndtazV5eHNzMjE5NGcxZ3VxYTB6MThvNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/P3gCL7t3cbOWUN8ma7/giphy.gif"

import "./BlogEntry.css"

const BlogEntry = ({date, title, desc}) => {
  const image = require(`../blogs/${date}/cover.webp`)
  const markdown = require(`../blogs/${date}/content.md`)

  return (
    <div className={"blog_container"}>
      <div className={"blog_root"}>
        <img src={image} alt={""}/>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default BlogEntry;
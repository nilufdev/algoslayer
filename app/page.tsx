import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Algoslayer Archive
      </h1>
      <p className="mb-4">
        {`Welcome to the official problem repository for the Algoslayer coding events at Thejus Engineering College. Select an event below to access the problem statements and editorial breakdowns for that year.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}

import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Algoslayer Archive
      </h1>
      <p className="mb-4">
        {`Welcome to the AlgoSlayer Corps Headquarters @ Thejus Engineering College. Within this archive lie the scrolls of past Final Selections—a legendary hall where every line of code is the unwavering soul of a swordsman, struck with enough force to banish the darkest algorithmic shadows.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}

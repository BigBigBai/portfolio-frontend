// import type { Route } from '../+types/home';
import Hero from '../../components/Hero';
import FeatureProjects from '~/components/Feature-projects';
import type { Route } from './+types/index';
import type { Project } from '~/types';
import FeaturedProjects from '~/components/Feature-projects';
import AboutPreview from '~/components/About-preview';
import type { PostMeta } from '~/types';
import LatestPosts from '~/components/LatestPosts';
import type { StrapiResponse, StrapiProject, StrapiPost } from '~/types';
import { body } from 'framer-motion/client';

// export function meta({}: Route.MetaArgs) {
//   return [
//     { title: 'The Friendly Dev Portfolio' },
//     { name: 'description', content: 'Web design and development projects' },
//   ];
// }

// export default function Home() {
//   return <div>My App</div>;
// }

// console.log('Hello From Home');

// const now = new Date().toISOString();
// if (typeof window === 'undefined') {
//   console.log('Server Render at:', now);
// } else {
//   console.log('Client Hydration at:', now);
// }

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[]; posts: PostMeta[] }> {
  // const res = await fetch('http://localhost:8000/projects');
  // const data = await res.json();
  // const url = new URL(request.url);

  const [projectRes, postRes] = await Promise.all([
    fetch(
      `${import.meta.env.VITE_API_URL}/api/projects?filters[featured][$eq]=true&populate=*`
    ),
    // fetch(new URL('/posts-meta.json', url).href),
    fetch(
      `${import.meta.env.VITE_API_URL}/api/posts?sort[0]=date:desc&pagination[limit]=3&populate=image`
    ),
  ]);

  if (!projectRes.ok || !postRes.ok) {
    throw new Error('Failed to fetch projects or posts');
  }

  // const [projects, posts] = await Promise.all([
  //   projectRes.json(),
  //   postRes.json(),
  // ]);

  const projectJson: StrapiResponse<StrapiProject> = await projectRes.json();
  const postJson: StrapiResponse<StrapiPost> = await postRes.json();

  const projects: Project[] = projectJson.data.map((item) => ({
    id: item.id,
    documentId: item.documentId,
    title: item.title,
    description: item.description,
    image: item.image?.url
      ? `${import.meta.env.VITE_API_URL}${item.image.url}`
      : '/images/no-image.png',
    url: item.url,
    date: item.date,
    category: item.category,
    featured: item.featured,
  }));

  const posts = postJson.data.map((item) => ({
    id: item.id,
    slug: item.slug,
    title: item.title,
    excerpt: item.excerpt,
    body: item.body,
    date: item.date,
    image: item.image?.url
      ? `${import.meta.env.VITE_API_URL}${item.image.url}`
      : '/images/no-image.png',
  }));

  return { projects, posts };
}

const HomePage = ({ loaderData }: Route.ComponentProps) => {
  const { projects, posts } = loaderData;

  return (
    <section>
      {/* <Hero name='White' /> */}
      <FeatureProjects projects={projects} count={2} />
      <AboutPreview />
      <LatestPosts posts={posts} limit={3} />
    </section>
  );
};

export default HomePage;

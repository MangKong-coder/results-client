// ANCHOR SOLID IMPORTS
import { JSX, lazy } from 'solid-js';
import { createRouterTree, Router, Link } from 'solid-tiny-router';

// ANCHOR IMAGES
import NotFoundSVG from './images/404.svg'

// ANCHOR ROUTES
const routes = createRouterTree([
  {
    path: '/',
    component: lazy(() => import('./pages'))
  },
  {
    path: '/results/[id]',
    component: lazy(() => import('./pages/[id]/[id]'))
  },
  {
    path: '/results/[id]/edit',
    component: lazy(() => import('./pages/[id]/edit'))
  },
  {
    path: '/results/create',
    component: lazy(() => import('./pages/create'))
  }
])

function NotFound(): JSX.Element {
  return (
    <div class="container mx-auto my-10 text-center text-purple-500 font-semibold text-2xl md:text-6xl space-y-6">
      <h1>Page not found</h1>
      <img src={NotFoundSVG} alt="Not found" class="w-1/3 mx-auto"/>
      <Link href="/" class='text-lg underline underline-offset-3 text-purple-400'>Go back to Home page</Link>
    </div> 
  )
}

function Footer(): JSX.Element {
  return (
    <footer class='text-center text-purple-500 mt-36 absolute bottom-0 w-full'>
      <p>{`© 2022-${new Date().getFullYear()} James Domingo - All Rights Reserved.`}</p>
    </footer>
  )
}

export function App(): JSX.Element{

  return (
    <>
      <Router routes={routes} fallback={NotFound} />
      <Footer />
    </>
  );
};

export default App;

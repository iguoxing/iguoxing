import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/iguoxing/blog',
    component: ComponentCreator('/iguoxing/blog', 'b1f'),
    exact: true
  },
  {
    path: '/iguoxing/blog/archive',
    component: ComponentCreator('/iguoxing/blog/archive', '10c'),
    exact: true
  },
  {
    path: '/iguoxing/blog/first-blog-post',
    component: ComponentCreator('/iguoxing/blog/first-blog-post', 'd99'),
    exact: true
  },
  {
    path: '/iguoxing/blog/long-blog-post',
    component: ComponentCreator('/iguoxing/blog/long-blog-post', '888'),
    exact: true
  },
  {
    path: '/iguoxing/blog/mdx-blog-post',
    component: ComponentCreator('/iguoxing/blog/mdx-blog-post', '5d2'),
    exact: true
  },
  {
    path: '/iguoxing/blog/tags',
    component: ComponentCreator('/iguoxing/blog/tags', '2a9'),
    exact: true
  },
  {
    path: '/iguoxing/blog/tags/docusaurus',
    component: ComponentCreator('/iguoxing/blog/tags/docusaurus', 'c37'),
    exact: true
  },
  {
    path: '/iguoxing/blog/tags/facebook',
    component: ComponentCreator('/iguoxing/blog/tags/facebook', 'a92'),
    exact: true
  },
  {
    path: '/iguoxing/blog/tags/hello',
    component: ComponentCreator('/iguoxing/blog/tags/hello', '5d7'),
    exact: true
  },
  {
    path: '/iguoxing/blog/tags/hola',
    component: ComponentCreator('/iguoxing/blog/tags/hola', '4d0'),
    exact: true
  },
  {
    path: '/iguoxing/blog/welcome',
    component: ComponentCreator('/iguoxing/blog/welcome', '890'),
    exact: true
  },
  {
    path: '/iguoxing/markdown-page',
    component: ComponentCreator('/iguoxing/markdown-page', 'ce3'),
    exact: true
  },
  {
    path: '/iguoxing/docs',
    component: ComponentCreator('/iguoxing/docs', 'ef8'),
    routes: [
      {
        path: '/iguoxing/docs/category/tutorial---basics',
        component: ComponentCreator('/iguoxing/docs/category/tutorial---basics', '16f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/iguoxing/docs/category/tutorial---extras',
        component: ComponentCreator('/iguoxing/docs/category/tutorial---extras', 'e91'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/iguoxing/docs/intro',
        component: ComponentCreator('/iguoxing/docs/intro', '2f4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/iguoxing/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/iguoxing/docs/tutorial-basics/congratulations', 'b4b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/iguoxing/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/iguoxing/docs/tutorial-basics/create-a-blog-post', '7dd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/iguoxing/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/iguoxing/docs/tutorial-basics/create-a-document', '4fe'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/iguoxing/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/iguoxing/docs/tutorial-basics/create-a-page', 'e9c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/iguoxing/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/iguoxing/docs/tutorial-basics/deploy-your-site', 'a6e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/iguoxing/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/iguoxing/docs/tutorial-basics/markdown-features', '113'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/iguoxing/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/iguoxing/docs/tutorial-extras/manage-docs-versions', '96c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/iguoxing/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/iguoxing/docs/tutorial-extras/translate-your-site', '861'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/iguoxing/',
    component: ComponentCreator('/iguoxing/', '2c2'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

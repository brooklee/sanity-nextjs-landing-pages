export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6000cee675dde50bf0105066',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-jx4q4yv5',
                  apiId: '172a61e2-ed29-47e8-a808-7f3ab6f2450a'
                },
                {
                  buildHookId: '6000cee69e8bc70c0b8457eb',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-fp8od2my',
                  apiId: 'eb38b2b6-a481-4104-a3e0-3892ac2b9aa2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/brooklee/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-fp8od2my.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

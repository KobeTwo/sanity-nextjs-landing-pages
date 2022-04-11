export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '6253d860bdfc88289c058697',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-qn1c1ci4',
                  apiId: '46158c9e-a1fb-4dac-bcdb-e6cdce7ec9ba'
                },
                {
                  buildHookId: '6253d8614272251910ef22e6',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-eap6kqth',
                  apiId: '80adf658-fd62-446c-bdb6-19129023b1d6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/KobeTwo/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-eap6kqth.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}

/**
 * GitHub repo curation — YOU control exactly which repos appear in Works and
 * under which category. This keeps the live GitHub feed from dumping every repo.
 *
 * HOW IT WORKS
 *  - Key  = the repo name EXACTLY as it is on GitHub (case-sensitive).
 *  - Value:
 *      category: one of 'Web' | 'AI/ML' | 'Mobile' | 'C++ / C#'  (which filter pill it shows under)
 *      title?:   nicer display name (defaults to the repo name)
 *      desc?:    override description (GitHub descriptions are mostly empty)
 *      featured?: also surface it in the Home "works" teaser
 *      hide?:    set true to explicitly exclude a repo even if SHOW_UNLISTED is true
 *
 *  Repos already shown as a curated project (see projects.js `repo` field) are
 *  skipped automatically — no duplicates. Add a new repo here to share it.
 *
 *  SHOW_UNLISTED: when true, any public repo NOT listed below still appears
 *  under the "Open Source" pill (uncategorized). Leave false to show ONLY the
 *  repos you curate here.
 */

export const SHOW_UNLISTED = false;

/** @type {Record<string, {category: 'Web'|'AI/ML'|'Mobile'|'C++ / C#', title?: string, desc?: string, featured?: boolean, hide?: boolean}>} */
export const repoCuration = {
  'ai-front-end': {
    category: 'AI/ML',
    title: 'AI Front-End',
    desc: 'Front-end for an AI-powered app.',
  },
  'steel-mobile': {
    category: 'Mobile',
    title: 'Steel (Mobile)',
    desc: 'Mobile build of the Steel Theraphy workout app.',
  },
  // Add more repos you want to share, e.g.:
  // 'my-ml-notebook': { category: 'AI/ML', title: 'ML Experiments', desc: '...' },
  // 'some-rn-app':    { category: 'Mobile', title: 'My Mobile App' },
};

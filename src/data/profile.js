const SKILL_ASSETS = 'https://profilinator.rishav.dev/skills-assets'
const LOCAL_ICONS = '/icons'

export const profile = {
  name: 'Jing-Xiang Lin',
  avatar: '/avatar.png',
  title: 'Full-Stack AI Engineer',
  tagline:
    'Bridging mathematics with production-grade AI systems — from theory of control and optimization to PDEs and manifolds.',
  degree: 'Mathematics and Applied Mathematics',
  bio:
    'My name is Jing-Xiang Lin. I obtain my bachelor of science degree on mathematics and applied mathematics from HDU, and now I am pursuing my master\'s degree in science at DHU.',
  location: 'HDU_Link',
  email: 'HDU_link@hdu.edu.cn',
  github: 'https://github.com/HDU-Link',
  social: [
    { label: 'GitHub', href: 'https://github.com/HDU-Link', icon: 'github' },
    { label: 'Email', href: 'mailto:hdu_link@hdu.edu.cn', icon: 'mail' },
  ],
  researchAreas: [
    'Multi-Agent Systems',
    'Riemannian Manifolds',
    'Partial Differential Equations',
    'Machine Learning',
    'Optimization',
    'Boolean Networks',
  ],
  techStack: [
    { name: 'React', icon: `${SKILL_ASSETS}/react-original-wordmark.svg`, href: 'https://react.dev' },
    { name: 'Vue', icon: `${SKILL_ASSETS}/vuejs-original-wordmark.svg`, href: 'https://vuejs.org' },
    { name: 'Node.js', icon: `${SKILL_ASSETS}/nodejs-original-wordmark.svg`, href: 'https://nodejs.org' },
    { name: 'TypeScript', icon: `${SKILL_ASSETS}/typescript-original.svg`, href: 'https://www.typescriptlang.org' },
    { name: 'JavaScript', icon: `${SKILL_ASSETS}/javascript-original.svg`, href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'HTML5', icon: `${SKILL_ASSETS}/html5-original-wordmark.svg`, href: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { name: 'CSS3', icon: `${SKILL_ASSETS}/css3-original-wordmark.svg`, href: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'Python', icon: `${SKILL_ASSETS}/python-original.svg`, href: 'https://www.python.org' },
    { name: 'Jupyter', icon: `${LOCAL_ICONS}/jupyter.svg`, href: 'https://jupyter.org' },
    { name: 'Java', icon: `${SKILL_ASSETS}/java-original-wordmark.svg`, href: 'https://www.java.com' },
    { name: 'C', icon: `${SKILL_ASSETS}/c-original.svg`, href: 'https://en.cppreference.com/w/c' },
    { name: 'C++', icon: `${SKILL_ASSETS}/cplusplus-original.svg`, href: 'https://isocpp.org' },
    { name: 'C#', icon: `${SKILL_ASSETS}/csharp-original.svg`, href: 'https://dotnet.microsoft.com' },
    { name: 'MATLAB', icon: `${LOCAL_ICONS}/matlab.svg`, href: 'https://www.mathworks.com/products/matlab.html' },
    { name: 'Linux', icon: `${SKILL_ASSETS}/linux-original.svg`, href: 'https://www.kernel.org' },
    { name: 'Spring Boot', icon: `${SKILL_ASSETS}/springio-icon.svg`, href: 'https://spring.io/projects/spring-boot' },
    { name: 'PHP', icon: `${SKILL_ASSETS}/php-original.svg`, href: 'https://www.php.net' },
    { name: 'MySQL', icon: `${SKILL_ASSETS}/mysql-original-wordmark.svg`, href: 'https://www.mysql.com' },
    { name: 'MongoDB', icon: `${SKILL_ASSETS}/mongodb-original-wordmark.svg`, href: 'https://www.mongodb.com' },
    { name: 'Google Cloud', icon: `${SKILL_ASSETS}/google_cloud-icon.svg`, href: 'https://cloud.google.com' },
    { name: 'Git', icon: `${SKILL_ASSETS}/git-scm-icon.svg`, href: 'https://git-scm.com' },
  ],
  recentResearch: [
    {
      title: 'Tokens of Transformers clustering on Riemannian manifolds',
      description:
        'Transformers play a central role in the inner workings of large language models. A mathematical framework for analyzing transformers based on their interpretationas interacting particle systems is established by B. Geshkovski, C. Letrouit et al. The animation demonstrates the token aggregation behavior on the circular ring under different parameters.',
      
      images: [
        { src: '/research/token-1.gif'},
        { src: '/research/token-2.gif'},
      ],
    },
    {
      title: 'Leader-following rendezvous on Riemannian manifolds',
      description:
        'Leader-following rendezvous controller for multi-agent systems on some Riemannian manifolds are devised by Xiaoyu Li, Yuhu Wu and Lining Ru. As concrete examples, feedback control laws on the unit sphere and infinite cylinder are devised and numerical results are displayed as follows.',
      images: [
        { src: '/research/rendezvous-1.gif'},
        { src: '/research/rendezvous-2.gif'},
      ],
    },
    {
      title: 'Collision/Obstacle avoidance optimal control on Riemannian manifolds',
      description:
        'Variational collision/obstacle avoidance problems for multi-agent systems on complete Riemannian manifolds are investigated by J. Goodman and L. Colombo. The optimal path considered in the article needs to achieve minimum acceleration while avoiding collisions. The following are examples of two trajectories.',
      images: [
        { src: '/research/collision-1.gif'},
        { src: '/research/collision-2.gif'},
      ],
    },
  ],
  publications: [
    {
      title:
        'Robust model construction of periodically switching Boolean networks with external disturbances',
      venue: 'Research article',
      year: '2025',
      role: 'Jing-Xiang Lin, Liyun Tong, Hong-Xiang Hu & Yun Chen',
      abstract:
        'Robust model construction is proposed for periodically switching Boolean networks (PSBNs) with external disturbances in this paper. Firstly, some sufficient and necessary conditions of the model constructibility for the PSBNs are obtained. A PSBN is weakly constructible if and only if its joint state digraph is circle-shaped or flag-shaped. Secondly, an algorithm is devised for robust model construction of PSBNs with external disturbances. In order to explain the effectiveness of the robust model construction strategies, the concept of stopping time is proposed, and an algorithm based on binary tree and reverse recursion is devised for calculating the expectation of the stopping time. Thirdly, when the network digraph is known, a modified algorithm utilizing the disjoint set union technique and 0–1 Integer Programming is designed to reduce the stopping time. Finally, the results are illustrated by a simplified periodically switching network of E. coli lac operon and a D. melanogaster segmentation polarity gene network.',
      keywords: [
        'Robust model construction',
        'periodically switching Boolean networks',
        'external disturbances',
        'stopping time',
        'semi-tensor product',
      ],
      links: [
        { label: 'Read online', href: 'https://doi.org/10.1080/00207721.2025.2530180', external: true },
      ],
    },
  ],
  nav: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Stack' },
    { id: 'research', label: 'Research' },
    { id: 'publications', label: 'Publication' },
    { id: 'contact', label: 'Contact' },
  ],
}

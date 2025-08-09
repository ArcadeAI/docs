import type { MetaRecord } from 'nextra';

const meta: MetaRecord = {
  home: {
    type: 'page',
    title: 'Home',
    href: '/get-started',
  },
  toolkits: {
    type: 'page',
    title: 'Integrations',
    href: '/toolkits',
  },
  reference: {
    type: 'page',
    title: 'Reference',
    href: 'https://reference.arcade.dev/',
  },
  status: {
    type: 'page',
    title: 'Status',
    href: 'https://status.arcade.dev/',
  },
  index: {
    type: 'page',
    title: 'Index',
    href: '/',
    display: 'hidden',
  },
};

export default meta;

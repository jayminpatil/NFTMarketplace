import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'o7jnxw8t',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skuGz9B7r4b8kQhNrfazE0mTz61O6aHyuZKvm6hGoQB19AwHLzjnhRAjlo0aPmPBXgm4umWPjYmgD17gmWm8yk5GPmsKRSJ4QEKHfQNCQGYLctqsLyRgESIcqO05nM4yQEQitxaD6JK5ROt8fm3OLpJOkaJPS4fsNEJ4dAJcjis2iDkaWHVx',
  useCdn: false,
})
import { NextPage } from 'next'
import { getSession } from 'next-auth/react'

const NewsFeedPage: NextPage = () => {
	return (
		<div>
			Lorem vitae quas nostrum eum blanditiis Suscipit adipisci nihil recusandae alias cupiditate Ea saepe quisquam nulla tempore accusantium. Natus placeat voluptas nihil autem consectetur harum Quia voluptas alias ea deleniti
		</div>
	)
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }
  return {
    props: {},
  }
}

export default NewsFeedPage

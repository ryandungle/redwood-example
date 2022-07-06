import { MetaTags } from '@redwoodjs/web'

import ArticleCell from 'src/components/ArticleCell'

interface Props {
  id: number
}

const ArticlePage = ({id}: Props) => {
  return (
    <>
      <MetaTags title="Article" description="Article page" />

      <ArticleCell id={id}/> {/* only id prop match with parameter in graphql is passed to Graphql Query */}
    </>
  )
}

export default ArticlePage

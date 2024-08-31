import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
// import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

/**
 * 最新文章列表
 * @param posts 所有文章数据
 * @param sliceCount 截取展示的数量 默认6
 * @constructor
 */
export default function LatestPostsGroupMini({ latestPosts, siteInfo }) {
  // 获取当前路径
  const currentPath = useRouter().asPath
  const { locale } = useGlobal()

  if (!latestPosts) {
    return <></>
  }

  return (
    <>
      <div className='mb-2 flex flex-nowrap justify-between'>
        <div>
          <i className='mr-2 fas fas fa-history' />
          {locale.COMMON.LATEST_POSTS}
        </div>
      </div>
      {latestPosts.map(post => {
        const selected =
          currentPath === `${siteConfig('SUB_PATH', '')}/${post.slug}`
        const headerImage = post?.pageCoverThumbnail
          ? post.pageCoverThumbnail
          : siteInfo?.pageCover

        return (
          <Link
            key={post.id}
            title={post.title}
            href={post?.href}
            passHref
            className={'p-1 my-3 flex'}>
            <div className='w-10 h-10 overflow-hidden relative'>
              <LazyImage
                src={`${headerImage}`}
                className='object-cover w-full h-full rounded-lg'
              />
            </div>
            <div
              className={
                (selected ? ' text-indigo-400 ' : 'dark:text-gray-200') +
                ' text-sm overflow-x-hidden px-2 duration-200 w-full rounded hover:text-indigo-400 dark:hover:text-yellow-600 cursor-pointer items-center flex flex-1'
              }>
              <div>
                <div className='line-clamp-1 menu-link font-bold'>{post.title}</div>
                <div className='text-gray-400 text-xs'>{post.lastEditedDay}</div>
              </div>
            </div>
          </Link>
        )
      })}
    </>
  )
}

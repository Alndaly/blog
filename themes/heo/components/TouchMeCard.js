
import Link from 'next/link'
import CONFIG from '../config'
import { siteConfig } from '@/lib/config'
import Card from '@/themes/heo/components/Card'

/**
 * 交流频道
 * @returns
 */
export default function TouchMeCard () {
    if (!JSON.parse(siteConfig('HEO_SOCIAL_CARD', null, CONFIG))) {
        return <></>
    }
    return (
        <Card
            className='relative overflow-hidden text-white cursor-pointer border rounded-xl bg-[#4f65f0] dark:bg-yellow-600 dark:border-gray-600'
        >
            <Link href={siteConfig('HEO_SOCIAL_CARD_URL', null, CONFIG)}>
                <h2 className='font-[1000] text-3xl'>{siteConfig('HEO_SOCIAL_CARD_TITLE_1', null, CONFIG)}</h2>
                <h3 className='pt-2'>{siteConfig('HEO_SOCIAL_CARD_TITLE_2', null, CONFIG)}</h3>
                <div className='absolute left-0 top-0 w-full h-full' style={{ background: 'url(https://bu.dusays.com/2023/05/16/64633c4cd36a9.png) center center no-repeat' }}></div>
            </Link>
        </Card>
    )
}

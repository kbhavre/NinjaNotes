import { cn } from '../../../lib/utils'
import Marquee from '../../magicui/Marquee'

// data will come from backend
const reviews = [
  {
    name: 'Kunal Choudhary',
    username: '@kunalKunnu',
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: 'https://avatar.vercel.sh/jack'
  },
  {
    name: 'Aditya Solanki',
    username: '@iamAsol',
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: 'https://avatar.vercel.sh/jill'
  },
  {
    name: 'Piyush Parmar',
    username: '@chiragP',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/john'
  },
  {
    name: 'Aditya Sharma',
    username: '@adityaChinu',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/jane'
  },
  {
    name: 'Vikas Jain',
    username: '@vksJain',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/jenny'
  },
  {
    name: 'Rajdeep Porwal',
    username: '@creativePorwal',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/james'
  }
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        'relative w-80 h-40 cursor-pointer overflow-hidden rounded-xl border p-4',
        // light styles
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        // dark styles
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]'
      )}
    >
      <div className='flex flex-row items-center gap-2'>
        <img className='rounded-full' width='32' height='32' alt='' src={img} />
        <div className='flex flex-col justify-center space-y-0'>
          <figcaption className='text-sm font-medium text-dargGreen'>
            {name}
          </figcaption>
          <p className='text-xs font-medium text-dargGreen'>{username}</p>
        </div>
      </div>

      <blockquote className='mt-5 text-sm text-theme'>{body}</blockquote>
    </figure>
  )
}

const Tesimonial = () => {
  return (
    <div className='relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden '>
      <Marquee pauseOnHover className='[--duration:20s]'>
        {firstRow.map(review => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className='[--duration:20s]'>
        {secondRow.map(review => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className='pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background'></div>
      <div className='pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background'></div>
    </div>
  )
}

export default Tesimonial

import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Link } from '@/components/link'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoTimeline } from '@/components/logo-timeline'
import { Navbar } from '@/components/navbar'
import { Testimonials } from '@/components/testimonials'
import { Heading, Lead, Subheading } from '@/components/text'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description: 'Nobrainer Labs helps build and launch startups.',
}

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5" />
      <Container className="relative">
        <Navbar
          banner={
            <Link
              href="#"
              className="flex items-center gap-1 rounded-full bg-fuchsia-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-[hover]:bg-fuchsia-950/30"
            >
              Oct, 2024 | We helped a B2B SaaS startup raise $500k pre-seed
              <ChevronRightIcon className="size-4" />
            </Link>
          }
        />
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
          <h1 className="font-display text-balance text-6xl/[0.9] font-medium tracking-tight text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Build your startup with us.
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            We&apos;re your partner for startup success, from idea to growth.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="https://calendly.com/nobrainerlabs" target="_blank">
              Get started
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function FeatureSection() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <Heading as="h2" className="max-w-3xl">
          We ship hand-crafted, highly-functional MVPs.
        </Heading>
        <Lead className="mt-6 max-w-3xl">
          Our team excels at distilling complex ideas into beautiful and
          highly-functional MVPs, accelerating your path to market.
        </Lead>
        <Subheading as="h3" className="mt-24">
          Recent Projects
        </Subheading>
        <hr className="mt-6 border-t border-gray-200" />
        <ul
          role="list"
          className="mx-auto mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2"
        >
          <li>
            <svg
              className="h-14"
              width="100%"
              height="36"
              viewBox=""
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.1994 1.21936C28.0856 0.997712 27.9254 0.810492 27.7116 0.656269C27.4977 0.502045 27.2367 0.428162 26.9363 0.428162C26.5086 0.428162 26.1546 0.588841 25.8735 0.917372L24.5704 2.46534L21.8239 5.73631L21.4298 6.20544L20.5544 7.25774C20.2669 7.5999 19.9129 7.7735 19.4852 7.7735C19.0639 7.7735 18.7099 7.59919 18.4224 7.25774L17.5469 6.21189L17.1593 5.74277L14.4057 2.46534L13.1033 0.917372C12.8229 0.588841 12.4682 0.428162 12.0405 0.428162C11.7401 0.428162 11.479 0.502045 11.2652 0.656269C11.0513 0.810492 10.8911 0.997712 10.7774 1.21936C10.6701 1.4403 10.6236 1.69494 10.6572 1.96322C10.6909 2.23795 10.7974 2.4926 10.9784 2.71425L14.8277 7.34526L16.866 9.79848C16.9132 9.87237 16.9662 9.94625 17.0263 10.013C17.2465 10.2748 17.5076 10.5022 17.7944 10.6901C18.2886 10.9986 18.8701 11.1729 19.4916 11.1729C20.1131 11.1729 20.6874 10.9986 21.1824 10.6901C21.4627 10.5158 21.7102 10.3078 21.9241 10.0603C22.0106 9.95271 22.0979 9.84583 22.1715 9.72532L24.1498 7.34597L27.9991 2.71497C28.1793 2.49332 28.2866 2.23867 28.3202 1.96394C28.346 1.69494 28.3059 1.4403 28.1994 1.21936Z"
                fill="#262626"
              ></path>
              <path
                d="M18.0288 3.7363C18.8341 4.544 20.1401 4.544 20.9462 3.7363C21.7515 2.9286 21.7515 1.61878 20.9462 0.810365C20.1401 0.00266489 18.8341 0.00266489 18.0288 0.810365C17.2235 1.61806 17.2235 2.9286 18.0288 3.7363Z"
                fill="#262626"
              ></path>
              <path
                d="M9.2224 1.81533C8.97422 1.80314 8.73247 1.84904 8.49216 1.95736C8.25185 2.06639 8.05802 2.25576 7.90783 2.51687C7.69398 2.88844 7.65607 3.27651 7.79911 3.68466L8.48429 5.59057L9.93547 9.61113L10.1436 10.1886L10.6142 11.4747C10.7658 11.8951 10.7394 12.2896 10.5255 12.6612C10.3152 13.027 9.98768 13.2472 9.54854 13.3261L8.2075 13.5636L7.60887 13.6654L3.40196 14.4179L1.41366 14.7758C0.990247 14.8554 0.674121 15.0828 0.460271 15.4544C0.310076 15.7155 0.242845 15.9788 0.269308 16.2413C0.295771 16.5038 0.377306 16.737 0.511767 16.9464C0.649088 17.1501 0.845773 17.318 1.09395 17.4227C1.34786 17.531 1.62107 17.5655 1.90215 17.5196L7.82558 16.4916L10.9632 15.9479C11.0505 15.9443 11.1406 15.9343 11.2286 15.9156C11.5647 15.8547 11.8916 15.742 12.197 15.5871C12.7105 15.3117 13.1518 14.8935 13.4622 14.354C13.7726 13.8146 13.9099 13.2278 13.8906 12.644C13.8806 12.3133 13.8248 11.9941 13.7175 11.6849C13.6682 11.5558 13.6188 11.4267 13.5516 11.3026L12.4859 8.39456L10.4118 2.73565C10.311 2.46809 10.1443 2.24859 9.92403 2.08145C9.7066 1.9258 9.46628 1.83326 9.2224 1.81533Z"
                fill="#262626"
              ></path>
              <path
                d="M6.3095 11.908C7.4095 11.6125 8.06321 10.4777 7.76854 9.37375C7.47387 8.27052 6.3424 7.61489 5.24168 7.91042C4.14096 8.20667 3.48797 9.34075 3.78264 10.4447C4.07802 11.5487 5.20878 12.2036 6.3095 11.908Z"
                fill="#262626"
              ></path>
              <path
                d="M0.248132 18.5962C0.113672 18.8056 0.0321368 19.0388 0.00567382 19.3013C-0.0207892 19.5638 0.0457259 19.8271 0.196637 20.0889C0.410486 20.4605 0.726612 20.6872 1.15074 20.7668L3.13904 21.1247L7.33664 21.875L7.93886 21.9834L9.28489 22.2179C9.72404 22.2968 10.0516 22.517 10.2655 22.8886C10.4757 23.2544 10.5022 23.649 10.3513 24.0693L9.88568 25.3526L9.67469 25.9243L8.22137 29.9542L7.53619 31.8601C7.39315 32.2683 7.43105 32.6563 7.6449 33.0272C7.7951 33.2883 7.98892 33.4777 8.22923 33.5867C8.46883 33.695 8.71129 33.7409 8.95947 33.7287C9.20407 33.7108 9.44725 33.624 9.66181 33.4612C9.88282 33.2948 10.0487 33.0745 10.1496 32.807L12.2244 27.1481L13.3237 24.1511C13.3638 24.0736 13.401 23.9904 13.4289 23.9043C13.544 23.5823 13.6105 23.2415 13.6291 22.8987C13.6477 22.3148 13.5075 21.723 13.1971 21.1828C12.8867 20.6434 12.4483 20.231 11.9348 19.9555C11.6437 19.7984 11.3411 19.6879 11.02 19.6263C10.8841 19.604 10.7482 19.5825 10.6073 19.5789L7.56408 19.0502L1.64066 18.0223C1.35958 17.9764 1.08637 18.0109 0.832464 18.1192C0.585714 18.2304 0.386169 18.3932 0.248132 18.5962Z"
                fill="#262626"
              ></path>
              <path
                d="M7.50878 26.1719C7.80345 25.0686 7.15045 23.9338 6.04973 23.6376C4.94973 23.342 3.81826 23.997 3.52287 25.1009C3.2282 26.2049 3.8812 27.3389 4.98191 27.6352C6.08192 27.9307 7.21339 27.2758 7.50878 26.1719Z"
                fill="#262626"
              ></path>
              <path
                d="M10.2524 34.7803C10.3661 35.002 10.5263 35.1892 10.7402 35.3434C10.954 35.4976 11.2151 35.5715 11.5155 35.5715C11.9432 35.5715 12.2972 35.4109 12.5783 35.0823L13.8814 33.5343L16.6279 30.2634L17.0219 29.7943L17.8974 28.7419C18.1849 28.3998 18.5389 28.2262 18.9666 28.2262C19.3879 28.2262 19.7419 28.4005 20.0294 28.7419L20.9049 29.7878L21.2925 30.2569L24.0461 33.5343L25.3492 35.0823C25.6296 35.4109 25.9843 35.5715 26.412 35.5715C26.7124 35.5715 26.9735 35.4976 27.1873 35.3434C27.4012 35.1892 27.5614 35.002 27.6751 34.7803C27.7824 34.5594 27.8289 34.3047 27.7953 34.0365C27.7616 33.7617 27.6551 33.5071 27.4741 33.2854L23.6248 28.6544L21.5865 26.2012C21.5393 26.1273 21.4863 26.0534 21.4263 25.9867C21.206 25.7256 20.9449 25.4975 20.6581 25.3096C20.1639 25.0019 19.5824 24.8275 18.9609 24.8275C18.3394 24.8275 17.7651 25.0019 17.2701 25.3096C16.9898 25.4839 16.7423 25.6919 16.5284 25.9394C16.4419 26.047 16.3547 26.1539 16.281 26.2744L14.3027 28.6537L10.4534 33.2847C10.2732 33.5064 10.1659 33.761 10.1323 34.0358C10.1051 34.3047 10.1451 34.5594 10.2524 34.7803Z"
                fill="#262626"
              ></path>
              <path
                d="M20.4218 32.2635C19.6164 31.4558 18.3104 31.4558 17.5044 32.2635C16.6991 33.0712 16.6991 34.3817 17.5044 35.1894C18.3104 35.9971 19.6164 35.9971 20.4218 35.1894C21.2278 34.3817 21.2278 33.0719 20.4218 32.2635Z"
                fill="#262626"
              ></path>
              <path
                d="M29.2293 34.1841C29.4775 34.1963 29.7192 34.1504 29.9595 34.0421C30.1998 33.9331 30.3937 33.7437 30.5439 33.4826C30.7577 33.111 30.7956 32.723 30.6526 32.3148L29.9674 30.4089L28.5162 26.3876L28.3081 25.8109L27.8375 24.5247C27.6859 24.1044 27.7123 23.7099 27.9262 23.3383C28.1365 22.9725 28.464 22.7523 28.9032 22.6733L30.2442 22.4359L30.8428 22.3341L35.0497 21.5816L37.038 21.2237C37.4614 21.144 37.7775 20.9166 37.9914 20.5451C38.1416 20.284 38.2088 20.0207 38.1824 19.7582C38.1559 19.4956 38.0744 19.2625 37.9399 19.053C37.8026 18.8493 37.6059 18.6815 37.3577 18.5767C37.1038 18.4684 36.8306 18.434 36.5488 18.4799L30.6254 19.5078L27.4878 20.0516C27.4005 20.0551 27.3104 20.0652 27.2224 20.0838C26.8863 20.1448 26.5594 20.2574 26.254 20.4124C25.7405 20.6878 25.2992 21.106 24.9888 21.6454C24.6784 22.1849 24.5411 22.7716 24.5604 23.3555C24.5704 23.6862 24.6262 24.0054 24.7335 24.3146C24.7828 24.4437 24.8322 24.5728 24.8994 24.6969L25.9651 27.6042L28.0392 33.2631C28.14 33.5307 28.3067 33.7502 28.527 33.9173C28.7444 34.0737 28.9847 34.1662 29.2293 34.1841Z"
                fill="#262626"
              ></path>
              <path
                d="M32.1411 24.0917C31.041 24.3873 30.3873 25.5221 30.682 26.626C30.9767 27.7293 32.1082 28.3849 33.2089 28.0886C34.3096 27.7931 34.9626 26.6583 34.6679 25.5551C34.3725 24.4511 33.2418 23.7962 32.1411 24.0917Z"
                fill="#262626"
              ></path>
              <path
                d="M38.2022 17.4033C38.3367 17.1938 38.4182 16.9607 38.4447 16.6981C38.4711 16.4356 38.4046 16.1723 38.2537 15.9112C38.0399 15.5397 37.7237 15.3123 37.2996 15.2326L35.3113 14.8747L31.1137 14.1244L30.5115 14.0161L29.1655 13.7815C28.7263 13.7026 28.3987 13.4824 28.1849 13.1108C27.9746 12.745 27.9482 12.3505 28.0991 11.9301L28.5647 10.6468L28.7757 10.0759L30.229 6.04597L30.9142 4.14006C31.0572 3.73262 31.0193 3.34455 30.8054 2.97298C30.6553 2.71188 30.4614 2.52251 30.2211 2.41347C29.9815 2.30516 29.7391 2.25925 29.4916 2.27145C29.247 2.28938 29.0038 2.37617 28.7893 2.53901C28.5682 2.70542 28.4023 2.92564 28.3015 3.1932L26.2266 8.85211L25.1273 11.8491C25.0873 11.9265 25.0501 12.0097 25.0222 12.0951C24.9071 12.4172 24.8405 12.7579 24.8219 13.1008C24.8033 13.6847 24.9435 14.2765 25.2539 14.8166C25.5643 15.356 26.0028 15.7685 26.5163 16.0439C26.8074 16.201 27.1099 16.3115 27.4311 16.3732C27.5669 16.3947 27.7028 16.4169 27.8437 16.4205L30.887 16.9492L36.8104 17.9771C37.0915 18.023 37.3647 17.9886 37.6186 17.8803C37.8646 17.7691 38.0649 17.607 38.2022 17.4033Z"
                fill="#262626"
              ></path>
              <path
                d="M30.9418 9.82767C30.6471 10.9309 31.3001 12.0657 32.4009 12.362C33.5009 12.6575 34.6323 12.0026 34.9277 10.8986C35.2224 9.79467 34.5694 8.66059 33.4687 8.36434C32.368 8.06952 31.2365 8.72443 30.9418 9.82767Z"
                fill="#262626"
              ></path>
              <path
                d="M62.0362 12.9684C63.0052 13.5142 63.7625 14.3182 64.3067 15.3797C64.8509 16.4419 65.1227 17.7171 65.1227 19.2054V28.8813H60.9671V19.7713C60.9671 18.4609 60.6403 17.4539 59.9874 16.7496C59.3345 16.0453 58.4442 15.6924 57.3158 15.6924C56.168 15.6924 55.2627 16.0453 54.5998 16.7496C53.9368 17.4539 53.6057 18.4616 53.6057 19.7713V28.8813H49.4502V6.85059H53.6057V14.4423C54.1399 13.728 54.8522 13.1671 55.7425 12.7605C56.6328 12.3538 57.6225 12.1501 58.711 12.1501C59.9588 12.1494 61.0666 12.4226 62.0362 12.9684Z"
                fill="black"
              ></path>
              <path
                d="M79.1197 18.0294C78.7235 17.3051 78.1893 16.7492 77.5164 16.3626C76.8435 15.9753 76.1212 15.7817 75.3496 15.7817C74.578 15.7817 73.8657 15.9703 73.2128 16.3476C72.5599 16.7248 72.03 17.2757 71.6245 18C71.2183 18.7252 71.016 19.5829 71.016 20.5756C71.016 21.5682 71.2183 22.436 71.6245 23.1805C72.03 23.925 72.5642 24.4959 73.2271 24.8925C73.89 25.2898 74.5973 25.4878 75.3496 25.4878C76.1212 25.4878 76.8435 25.2941 77.5164 24.9076C78.1893 24.5203 78.7235 23.9651 79.1197 23.24C79.5151 22.5156 79.7132 21.6471 79.7132 20.6351C79.7132 19.6231 79.5151 18.7546 79.1197 18.0294ZM67.7658 16.1396C68.4287 14.85 69.329 13.8574 70.4668 13.1624C71.6045 12.4682 72.876 12.1203 74.2812 12.1203C75.5076 12.1203 76.5817 12.3692 77.5021 12.8648C78.4224 13.3611 79.159 13.9865 79.7132 14.7403V12.3885H83.8988V28.8817H79.7132V26.4697C79.179 27.2435 78.441 27.884 77.5021 28.3896C76.5617 28.896 75.4783 29.1492 74.2519 29.1492C72.8667 29.1492 71.6052 28.792 70.4675 28.0777C69.3297 27.3633 68.4287 26.3563 67.7665 25.056C67.1036 23.7564 66.7725 22.2625 66.7725 20.5756C66.771 18.908 67.1021 17.4299 67.7658 16.1396Z"
                fill="black"
              ></path>
              <path
                d="M93.4065 25.0409L97.562 12.3884H101.985L95.8994 28.8816H90.8535L84.7979 12.3884H89.2509L93.4065 25.0409Z"
                fill="black"
              ></path>
              <path
                d="M113.327 19.0861C113.307 18.0146 112.921 17.1561 112.169 16.5106C111.416 15.8658 110.496 15.5431 109.408 15.5431C108.379 15.5431 107.513 15.8558 106.811 16.4812C106.109 17.1066 105.678 17.9752 105.52 19.0861H113.327ZM117.512 21.8847H105.49C105.589 23.0753 106.004 24.0084 106.737 24.6833C107.469 25.3582 108.369 25.6953 109.438 25.6953C110.982 25.6953 112.079 25.0304 112.733 23.7007H117.215C116.741 25.2886 115.83 26.5932 114.484 27.6153C113.138 28.638 111.487 29.1487 109.527 29.1487C107.944 29.1487 106.524 28.7965 105.268 28.0915C104.011 27.3872 103.032 26.3903 102.329 25.0993C101.627 23.8097 101.275 22.3208 101.275 20.6339C101.275 18.9269 101.622 17.4286 102.314 16.1384C103.007 14.8481 103.976 13.8562 105.224 13.1612C106.47 12.4669 107.905 12.1191 109.528 12.1191C111.091 12.1191 112.491 12.4569 113.728 13.1318C114.965 13.8067 115.925 14.7642 116.608 16.0042C117.291 17.245 117.632 18.6687 117.632 20.276C117.631 20.872 117.591 21.4085 117.512 21.8847Z"
                fill="black"
              ></path>
              <path
                d="M133.28 14.0104C134.487 15.2512 135.09 16.9825 135.09 19.2059V28.8812H130.934V19.7711C130.934 18.4614 130.608 17.4537 129.954 16.7494C129.301 16.0451 128.41 15.6922 127.283 15.6922C126.135 15.6922 125.229 16.0451 124.567 16.7494C123.904 17.4537 123.573 18.4614 123.573 19.7711V28.8812H119.417V12.388H123.573V14.4421C124.126 13.7278 124.834 13.1669 125.695 12.7603C126.555 12.3536 127.501 12.1499 128.53 12.1499C130.49 12.1492 132.072 12.7696 133.28 14.0104Z"
                fill="black"
              ></path>
            </svg>
            <p className="mt-6 max-w-lg text-sm/6 text-gray-500">
              We have helped Haven Project build a platform that allows SMBs to
              access government contracts and gain an un-paralleled advantage at
              winning bids.
            </p>
          </li>
          <li>
            <img alt="Deccel" src="/investors/deccel.svg" className="h-6" />
            <p className="mt-12 max-w-lg text-sm/6 text-gray-500">
              Deccel has been at the forefront of innovation, investing in
              pioneering companies across various sectors, including technology,
              consumer goods, and healthcare.
            </p>
          </li>
        </ul>
      </Container>
    </div>
  )
}

function BentoSection() {
  return (
    <Container>
      <div className="grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <div className="">
          <Button href="https://calendly.com/nobrainerlabs" target="_blank">
            Schedule a call
          </Button>
        </div>
        {/* <BentoCard
          eyebrow="Insight"
          title="Clear market understanding"
          description="We help you build a detailed picture of your target market, including budget considerations and competitor analysis."
          graphic={
            <div className="h-80 bg-[url(/screenshots/profile.png)] bg-[size:1000px_560px] bg-[left_-109px_top_-112px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Analysis"
          title="Competitive edge"
          description="Our market research helps you understand your competition and position your product effectively."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/competitors.png)] bg-[size:1100px_650px] bg-[left_-38px_top_-73px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Efficiency"
          title="Streamlined workflows"
          description="We implement efficient processes to help you reach your entire network quickly."
          graphic={
            <div className="flex size-full pl-10 pt-10">
              <Keyboard highlighted={['LeftCommand', 'LeftShift', 'D']} />
            </div>
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Reach"
          title="Expand your network"
          description="We help you connect with leads from diverse sources, expanding your reach."
          graphic={<LogoCluster />}
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Growth"
          title="Global expansion"
          description="We support your efforts to expand into new markets worldwide."
          graphic={<Map />}
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        /> */}
      </div>
    </Container>
  )
}

function DarkBentoSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
      <Container>
        <Subheading dark>The Process</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
          We&apos;ve simplified startup building.
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            dark
            eyebrow="Networking"
            title="Effective communication"
            description="Our AI tools help analyze conversations, improving your communication strategy."
            graphic={
              <div className="h-80 bg-[url(/screenshots/networking.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Integrations"
            title="Reach your audience"
            description="We integrate with various platforms to help you connect with your target market."
            graphic={<LogoTimeline />}
            // `!overflow-visible` is needed to work around a Chrome bug that disables the mask on the graphic.
            className="z-10 !overflow-visible lg:col-span-2 lg:rounded-tr-4xl"
          />
          <BentoCard
            dark
            eyebrow="Meetings"
            title="Smart scheduling"
            description="Efficiently manage your calendar and schedule important calls."
            graphic={<LinkedAvatars />}
            className="lg:col-span-2 lg:rounded-bl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Engagement"
            title="Build your presence"
            description="Our AI helps create relevant content to establish your industry presence."
            graphic={
              <div className="h-80 bg-[url(/screenshots/engagement.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
          />
        </div>
      </Container>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <Container className="mt-10">
          <LogoCloud />
        </Container>
        <div className="bg-gradient-to-b from-white from-50% to-gray-100 py-32 pb-16">
          <FeatureSection />
          {/* <BentoSection /> */}
        </div>
        {/* <DarkBentoSection /> */}
      </main>
      <Testimonials />
      <Footer />
    </div>
  )
}

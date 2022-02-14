import React from 'react'

const style = {
  wrapper: `relative`,
  container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://lh3.googleusercontent.com/DMECLVNnZV6cG6Rj_-gxxutAvF-hXI18TwSnkGX1uNDSpOjB52iN62ozxG1r1nTEdQUodW9GdwwIsOq2vXn8_jie-Uo-_fw1EYsO4g=s550')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
  contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
  copyContainer: `w-1/2`,
  title: `relative text-white text-[46px] font-semibold`,
  description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
  ctaContainer: `flex`,
  accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
  button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
  cardContainer: `rounded-[3rem]`,
  infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
  author: `flex flex-col justify-center ml-4`,
  name: ``,
  infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
}

const Hero = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.contentWrapper}>
          <div className={style.copyContainer}>
            <div className={style.title}>
              Collect, Mint, and deal in exquisite NFTs
            </div>
            <div className={style.description}>
              We are the one-stop destination for NFT assets
            </div>
            <div className={style.ctaContainer}>
              <button className={style.accentedButton}>Explore</button>
              <button className={style.button}>Create</button>
            </div>
          </div>
          <div className={style.cardContainer}>
            <img
              className="rounded-t-lg"
              src="https://lh3.googleusercontent.com/DMECLVNnZV6cG6Rj_-gxxutAvF-hXI18TwSnkGX1uNDSpOjB52iN62ozxG1r1nTEdQUodW9GdwwIsOq2vXn8_jie-Uo-_fw1EYsO4g=s550"
              alt=""
            />
            <div className={style.infoContainer}>
              <img
                className="h-[2.25rem] rounded-full"
                src="https://lh3.googleusercontent.com/g-s-VuDvmiuFUMEHFEaUtD4jM1gIJCJfODJdUVGq8d64ZY62yrT9xYKawhfTTvzUH7iY9C6qAHEZlh8sPw0sMnAxWkjLbd7_DvT_JQ=s80"
                alt=""
              />
              <div className={style.author}>
                <div className={style.name}>Complex Grids 007</div>
                <a
                  className="text-[#1868b7]"
                  href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/8312446206343137339445342127879754078669802714554564311094376095476273381377"
                >
                  Mikart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
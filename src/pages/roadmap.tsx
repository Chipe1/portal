import Link from "@docusaurus/Link";
import useGlobalData from "@docusaurus/useGlobalData";
import completedRoadmapItems from "@site/roadmap/completed";
import { resetNavBarStyle } from "@site/src/utils/reset-navbar-style";
import BlobGradient from "@site/static/img/gradientBlurredCircle.png";
import BlobPurple from "@site/static/img/purpleBlurredCircle.png";
import GithubIcon from "@site/static/img/token-holders/social/github.svg";
import transitions from "@site/static/transitions.json";
import Layout from "@theme/Layout";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import AnimateSpawn from "../components/Common/AnimateSpawn";
import DarkHeroStyles from "../components/Common/DarkHeroStyles";
import DomainCard from "../components/RoadmapPage/DomainCard";
import Overlay from "../components/RoadmapPage/Overlay";
import { RoadmapDomain } from "../components/RoadmapPage/RoadmapTypes";

const MotionLink = motion(Link);

const RoadmapPage: React.FC = () => {
  resetNavBarStyle();

  const [overlayOpen, setOverlayOpen] = useState(false);
  const [overlayOpenAt, setOverlayOpenAt] = useState(0);

  function openOverlay(at: number) {
    document.body.style.overflow = "hidden";
    setOverlayOpenAt(at);
    setOverlayOpen(true);
  }

  function closeOverlay() {
    document.body.style.overflow = "";
    setOverlayOpen(false);
  }

  const data = useGlobalData()["roadmap-data"].default as RoadmapDomain[];

  return (
    <Layout title="Roadmap" description="">
      <main className="w-full overflow-hidden">
        <AnimateSpawn
          className="overflow-hidden bg-infinite text-white"
          variants={transitions.container}
        >
          <DarkHeroStyles></DarkHeroStyles>
          <div className="container-10 pt-12 mb-60 md:mb-52 md:pt-36 relative">
            <div className="md:w-7/10">
              <motion.h1
                className="tw-heading-3 md:tw-heading-2 mb-6"
                variants={transitions.item}
              >
                Roadmap
              </motion.h1>
              <motion.p
                className="tw-lead-sm md:tw-lead mb-0"
                variants={transitions.item}
              >
                The DFINITY Foundation’s contributions to the Internet Computer
                roadmap are subject to community discussion and voting. Cras
                mattis consectetur purus sit amet fermentum. Cras mattis
                consectetur purus sit amet fermentum.
              </motion.p>
            </div>
          </div>
          <div className="container-10 relative">
            <motion.img
              src="/img/whiteBlurredCircle.png"
              className="absolute pointer-events-none max-w-none w-[800px] aspect-square -right-[200px] bottom-[-400px] md:w-[1500px] md:bottom-[-680px] md:right-[-550px] object-contain object-center"
              variants={transitions.item}
            />
          </div>
        </AnimateSpawn>

        <section className="container-10 -mt-52 md:-mt-32 space-y-6 md:space-y-16 relative">
          <AnimateSpawn
            el={motion.img}
            variants={transitions.fadeIn}
            src={BlobPurple}
            alt=""
            className="absolute pointer-events-none max-w-none w-[600px] md:w-[1400px] -left-[300px] md:-left-[700px] top-[1680px] md:top-1/2 -translate-y-1/2 z-[-1000]"
            // variants={transitions.item}
          />
          {data.map((domain, index) => (
            <DomainCard
              domain={domain}
              index={index}
              key={domain.name}
              onOpen={() => openOverlay(index)}
            ></DomainCard>
          ))}
        </section>
        <section className="text-white relative py-24 md:py-40">
          <AnimateSpawn
            el={motion.img}
            variants={transitions.fadeIn}
            src={BlobGradient}
            alt=""
            className="max-w-none w-[1200px] md:w-[1200px] absolute top-[-200px] md:top-[-200px] left-1/2 -translate-x-1/2 z-[-1]"
          />
          <AnimateSpawn
            className="container-12 text-center max-w-[740px] mb-16 md:mb-8"
            variants={transitions.container}
          >
            <motion.h2
              className="tw-heading-4 md:tw-heading-60 mb-3 md:mb-8"
              variants={transitions.item}
            >
              Community Engagement
            </motion.h2>
            <motion.p
              className="tw-lead-sm md:tw-lead mb-8"
              variants={transitions.item}
            >
              Vestibulum id ligula porta felis euismod semper. Cras mattis
              consectetur purus sit amet fermentum. Vestibulum id ligula porta
              felis euismod semper. Cras mattis consectetur purus sit amet
              fermentum.
            </motion.p>
            <MotionLink
              variants={transitions.item}
              className="button-outline-white"
              href="https://forum.dfinity.org"
            >
              Join the conversation
            </MotionLink>
          </AnimateSpawn>
          <AnimateSpawn
            className="container-12 text-black flex flex-col gap-2 md:flex-row md:items-start md:gap-5"
            variants={transitions.container}
          >
            <motion.div
              variants={transitions.item}
              className="px-8 py-12 backdrop-blur-2xl bg-white-50 rounded-xl border-white border-solid border text-center flex-1"
            >
              <h3 className="tw-lead-lg md:tw-title-sm">
                Community Submissions
              </h3>
              <p className="tw-paragraph-sm mb-3 text-black-60">
                What isn't here that you'd like to see the DFINITY Foundation
                prioritize for the Internet Computer?
              </p>
              <Link className="link-external">Submit your suggestions</Link>
            </motion.div>
            <motion.div
              variants={transitions.item}
              className="px-8 py-12 backdrop-blur-2xl bg-white-50 rounded-xl border-white border-solid border text-center flex-1 md:mt-30"
            >
              <h3 className="tw-lead-lg md:tw-title-sm">Live Sessions</h3>
              <p className="tw-paragraph-sm mb-3 text-black-60">
                Join live sessions with the DFINITY Foundation to discuss
                upcoming contributions to the Internet Computer roadmap. Fusce
                dapibus, tellus ac cursus commodo, tortor mauris condimentum
                nibh, ut fermentum massa justo sit amet risus. Aenean eu leo
                quam.
              </p>
              <Link className="link-external" href="/live-sessions/#subscribe">
                Reserve your seat
              </Link>
            </motion.div>
            <motion.div
              variants={transitions.item}
              className="px-8 py-12 backdrop-blur-2xl bg-white-50 rounded-xl border-white border-solid border text-center flex-1 md:mt-10"
            >
              <h3 className="tw-lead-lg md:tw-title-sm">Developer Grants</h3>
              <p className="tw-paragraph-sm mb-3 text-black-60">
                Cras mattis consectetur purus sit amet fermentum. Nullam quis
                risus eget urna mollis ornare vel eu leo. Vivamus sagittis lacus
                vel augue laoreet rutrum faucibus
              </p>
              <Link className="link-external">Apply for Grants</Link>
            </motion.div>
          </AnimateSpawn>
        </section>
        <section className="">
          <AnimateSpawn
            className="container-10 text-center text-black md:text-left"
            variants={transitions.container}
          >
            <motion.h2
              className="tw-heading-4 md:tw-heading-60 mb-3 md:mb-6"
              variants={transitions.item}
            >
              Completed
              <br className="md:hidden" /> Roadmap Items
            </motion.h2>
            <motion.p
              className="tw-lead-sm md:tw-lead mb-12 md:mb-16 md:w-7/10"
              variants={transitions.item}
            >
              The DFINITY Foundation open-sourced and launched the Internet
              Computer on May 10, 2021. List of major innovations developed by
              the Foundation.
            </motion.p>
          </AnimateSpawn>
          <AnimateSpawn
            variants={transitions.container}
            className="container-12 grid grid-cols-1 gap-3 sm:gap-5 sm:grid-cols-2 md:grid-cols-3 relative"
          >
            <img
              src={BlobPurple}
              alt=""
              className="absolute pointer-events-none max-w-none w-[600px] md:w-[1400px] -right-[300px] md:-right-[700px] top-0 -translate-y-1/2 z-[-1000]"
            />
            {completedRoadmapItems.map((item) => (
              <motion.div
                variants={transitions.item}
                key={item.title}
                className="flex flex-col overflow-hidden rounded-xl bg-white items-start"
              >
                <img
                  src={item.image}
                  alt=""
                  className="h-[200px] w-full object-center object-cover"
                />
                <span className="-mt-4 h-8 bg-infinite text-white flex items-center gap-2 px-3 py-1 rounded-full ml-4 tw-title-navigation-on-page">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 7.99943L6.84682 12L13 5.59977L11.4617 4L6.84682 8.80045L4.53829 6.39966L3 7.99943Z"
                      fill="white"
                    />
                  </svg>
                  Deployed
                </span>
                <h3 className="tw-heading-6 md:tw-heading-5 px-6 mt-4 mb-3">
                  {item.title}
                </h3>
                <p className="tw-paragraph-sm md:tw-paragraph px-6 mb-3 text-black-60 line-clamp-3">
                  {item.description}
                </p>
                <Link
                  href={item.link}
                  className="button-outline button-small mx-6 mb-8"
                >
                  Learn more
                </Link>
              </motion.div>
            ))}
          </AnimateSpawn>
          <AnimateSpawn
            className="text-center mt-12 mb-20 md:mb-30 md:mt-16"
            variants={transitions.item}
          >
            <Link className="inline-flex gap-2 items-center  link-primary">
              <GithubIcon className="w-6" />
              See documentation
            </Link>
          </AnimateSpawn>
        </section>
        <AnimatePresence>
          {overlayOpen && (
            <Overlay
              onClose={closeOverlay}
              openAt={overlayOpenAt}
              data={data}
            ></Overlay>
          )}
        </AnimatePresence>
      </main>
    </Layout>
  );
};

export default RoadmapPage;

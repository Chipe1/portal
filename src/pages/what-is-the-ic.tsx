import Link from "@docusaurus/Link";
import DarkHeroStyles from "@site/src/components/Common/DarkHeroStyles";
import transitions from "@site/static/transitions.json";
import Layout from "@theme/Layout";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import AnimateSpawn from "../components/Common/AnimateSpawn";
import { CardWithDescription } from "../components/Common/Card";
import LinkArrowRight from "../components/Common/Icons/LinkArrowRight";
import ShareMeta from "../components/Common/ShareMeta";
import TranslatedLayout from "../components/Common/TranslatedLayout/TranslatedLayout";
import { useDarkHeaderInHero } from "../utils/use-dark-header-in-hero";
import LinkArrowUpRight from "../components/Common/Icons/LinkArrowUpRight";

function WhatIsIcpPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const isDark = useDarkHeaderInHero(heroRef);

  return (
    <Layout
      title="What is ICP"
      description={`The Internet Computer adds autonomous serverless cloud functionality to the public Internet - making it possible to build almost any system or service entirely on a decentralized network using “canister software,” an evolution of smart contracts.`}
      editPath={`https://github.com/dfinity/portal/edit/master/${__filename}`}
    >
      <ShareMeta image="/img/shareImages/share-what-is-the-ic.jpg"></ShareMeta>

      <main
        className="text-black relative overflow-hidden"
        style={{
          marginTop: `calc(var(--ifm-navbar-height) * -1)`,
        }}
      >
        {isDark && <DarkHeroStyles bgColor="transparent"></DarkHeroStyles>}


        {/* Section with main 1-liner */}
        <section className=" bg-infinite text-white pt-20" ref={heroRef}>
          <AnimateSpawn
            className="container-10 pt-20 pb-14 md:pb-24 md:pt-36 relative"
            variants={transitions.container}
          >
            <div className="blob blob-white blob-md blob-x-4 blob-y-8 md:blob-xl md:blob-x-8 md:blob-y-10 opacity-100"></div>
            <div
              className="
              -mt-30 md:-mt-24
              w-[700px] sm:w-[900px] md:w-[1600px]
              absolute
              -left-16 sm:left-auto
              bottom-0
              translate-y-2/3 md:translate-y-[55%]

              sm:right-0
              sm:translate-x-3/10
            "
            >
              <img
                src="/img/what-is-the-ic/hero.svg"
                alt=""
                className="w-full max-w-none"
              />
            </div>
            <div className="sm:w-8/10 md:w-6/10 relative">
              <motion.h1
                className="tw-heading-3 md:tw-heading-2 mb-8 md:mb-6"
                variants={transitions.item}
              >
                What is the
                <br className="hidden md:block" /> ICP blockchain?
              </motion.h1>
              <motion.p
                className="pb-[15%] sm:pb-0 tw-lead-sm md:tw-lead mb-0"
                variants={transitions.item}
              >
                ICP is best understood by exploring its foundation: smart contracts. 
                Here's a simple explanation of why smart contracts are effective and how ICP's vision is to unlock their power.
              </motion.p>
            </div>
          </AnimateSpawn>
        </section>

        <AnimateSpawn
          className="container-8 mt-80 md:mt-[540px] relative"
          el={motion.section}
          variants={transitions.container}
        >
          <div className="">
            {/* <motion.h2
              className="tw-heading-5 sm:tw-heading-4 md:tw-heading-3 mb-8 md:mb-10 text-gradient"
              variants={transitions.item}
            >
              The Internet Computer — a public decentralized network that scales, but that i
              <br />
              Host social networks, media streaming and more, that support Web3
              functionality, are tamperproof, and can trustlessly interact with
              the outside world.
            </motion.h2> */}

            <motion.p
              className="mb-0 flex flex-col items-start gap-6 md:gap-8"
              variants={transitions.item}
            >
              {/* <Link className="button-primary text-center" href="/capabilities">
                Internet Computer capabilities
              </Link> */}
              
              {/* <Link
                className="link-primary link-with-icon"
                href="https://wiki.internetcomputer.org/wiki/History"
              >
                <span>
                  <span className="hidden sm:inline">Wiki history </span>
                  <span className="sm:hidden">History </span>
                  of the Internet Computer
                </span>
                <LinkArrowUpRight />
              </Link> */}

            </motion.p>
          </div>
        </AnimateSpawn>

        {/* ICP's vision */}
        <section
          // className="mt-20 md:mt-28
          // bg-[linear-gradient(180deg,transparent_0%,transparent_97%,#3b00b9_97%,#3b00b9_100%)]
          // sm:bg-[linear-gradient(180deg,transparent_0%,transparent_87%,#3b00b9_87%,#3b00b9_100%)]
          // md:bg-[linear-gradient(180deg,transparent_0%,transparent_77%,#3b00b9_77%,#3b00b9_100%)]
          // relative "
        >
          <div className="container-10 md:w-6/10 md:mx-auto">
            <motion.h2
              // className="tw-heading-3 md:tw-heading-60 text-center mb-0"
              className="tw-heading-4 md:tw-heading-60 text-center text-gradient mb-3"

              variants={transitions.item}
            >
              ICP's vision
            </motion.h2>

            <h2 
              className="tw-heading-4 md:tw-heading-3 md:mb-6 mt-2"
              // className="tw-paragraph md:tw-lead-sm mb-3"
              // className="tw-heading-5 md:tw-heading-5 text-gradient mb-0 md:w-8/10"
              >
              It all starts with smart contracts. ICP blockchain is designed and built around the idea smart contracts are a disruptive, new compute paradigm enabling 
              completely novel applications and more more software will run as smart contracts. 
              <br/>
              <br/>

                <div
                  className="text-gradient"
                >
                  <i>This is what separates ICP from other blockchains.</i>
                </div>
            
              <br/>
              All performance, efficiency, features, cryptographic capabilities are all designed to serve this vision:
              a world where all the world's software runs as smart contracts.
            </h2>
          </div>
         
        </section>

        {/* Context Section */}
        <section className="bg-infinite text-white pt-20 md:pt-44">
          <div className="container-10 md:w-6/10 md:mx-auto">
            <motion.h2
              className="tw-heading-3 md:tw-heading-60 text-center mb-0"
              variants={transitions.item}
            >
              Why are smart contracts so important?
            </motion.h2>

            <h3 className="tw-heading-5 md:tw-heading-4 md:mb-6 mt-6">
            Smart contracts are a disruptive, new compute paradigm enabling completely novel applications and providing additional guarantees to existing ones. 
            Below is a list of some of the most important features of smart contracts.
            </h3>
          </div>
          <div className=" container-12 flex flex-col gap-16 md:gap-40 relative pt-20">
            <TranslatedLayout imageUrl="/img/what-is-the-ic/node-providers.webp">
              <h2 className="tw-heading-4 md:tw-heading-3 md:mb-6">
                Unstoppable and tamper-proof
              </h2>

              <p className="tw-lead-sm">
              Because smart contracts are decentrally executed, no single person, 
              organization, or government can stop or change their state unless the 
              code foresees that &mdash; code is law. That constitutes a completely 
              new level of security that allows software to own things of great value.
              </p>
              <p>
                {/* <Link
                  href="/node-providers"
                  className="link-white link-with-icon"
                >
                  <LinkArrowRight />
                  Sovereign hardware network
                </Link> */}
              </p>
            </TranslatedLayout>
            <TranslatedLayout
              imageUrl="/img/what-is-the-ic/subnet-blockchains.webp"
              reverse={true}
            >
              <h2 className="tw-heading-4 md:tw-heading-3 md:mb-6">
                Users can truly own digital assets
              </h2>
              <p className="tw-lead-sm">
              No trust in the developer or cloud/infrastructure providers is required. 
              They can also form communities that collectively govern applications.
              </p>
              <p>
                {/* <Link
                  href="/how-it-works#Architecture"
                  className="link-white link-with-icon"
                >
                  <LinkArrowRight />
                  ICP architecture
                </Link> */}
              </p>
            </TranslatedLayout>
            <TranslatedLayout imageUrl="/img/what-is-the-ic/smart-contracts.webp">
              <h2 className="tw-heading-4 md:tw-heading-3 md:mb-6">
              Developers can build decentralized applications (dapps) with novel business models
              </h2>
              <p className="tw-lead-sm">
              For example, users who neither know nor trust each other can do business together without 
              an intermediary. Complex financial services can be built without the need 
              of banks, giving power back to the users, reducing overhead and cost.
              </p>
              <p>
                {/* <Link
                  href="https://medium.com/dfinity/webassembly-on-the-internet-computer-a1d0c71c5b94"
                  className="link-white link-with-icon"
                >
                  <LinkArrowUpRight />
                  WebAssembly smart contracts
                </Link> */}
              </p>
            </TranslatedLayout>
          </div>
        </section>
        <AnimateSpawn
          className="pt-30 md:pt-40 bg-[linear-gradient(180deg,#3b00b9_0%,#3b00b9_75%,transparent_75%,transparent_100%)] text-white relative"
          el={motion.section}
          variants={transitions.container}
        >
          <div className="blob blob-lg md:blob-xl blob-white md:blob-white-dense blob-x-5 blob-y-8 z-0 md:opacity-60"></div>
          <motion.div
            className="container-10 text-center"
            variants={transitions.item}
          >
            <h2 className=" tw-heading-3 md:tw-heading-60 mb-24 md:mb-20 sm:w-8/10 mx-auto">
              ICP's goal is to unlock all the limitations smart contracts have so their true power is unleashed.
            </h2>
          </motion.div>
          <motion.div
            className="w-full h-[400px] md:h-[600px]"
            variants={transitions.item}
          >
            <img
              src="/img/what-is-the-ic/subnets.webp"
              alt=""
              className="absolute w-[550px] md:w-[800px] max-w-none left-1/2 -translate-x-1/2"
            />
          </motion.div>
        </AnimateSpawn>

        {/* Vision Section */}
        <section className="container-12 pt-10 md:pt-16 pb-30 md:pb-20 relative">
          <div className="text-center mb-16 md:mb-20">
            <AnimateSpawn
              className="container-12"
              variants={transitions.container}
            >
              <motion.h2
                className="tw-heading-3 md:tw-heading-60 text-gradient text-center inline-block mb-0"
                variants={transitions.item}
              >
                How does ICP unlock the power of smart contracts?
              </motion.h2>

              <h3 className="tw-heading-5 md:tw-heading-4 md:mb-6 mt-6">
            It starts by recognizing the limitations that smart contracts have.
            ICP is designed to overcome these limitations and unlock the true 
            power of smart contracts so they can be used for the world's software.
            </h3>
            </AnimateSpawn>
          </div>

          <div className="flex flex-col gap-16 md:gap-40">
            <TranslatedLayout imageUrl="/img/what-is-the-ic/internet-identity.webp">
              <h3 className="tw-heading-4 md:tw-heading-60 mb-6">
                Performance
              </h3>
              <p className="tw-paragraph md:tw-lead-sm mb-6 md:mb-10">
                Smart contracts can work with 100s of GBs of memory and rely on 
                computation at the speed of modern CPUs. 
              </p>
              {/* <Link
                className="link-primary link-with-icon"
                href="/internet-identity"
              >
                <LinkArrowRight /> Identity on ICP
              </Link> */}
            </TranslatedLayout>

            <TranslatedLayout
              imageUrl="/img/what-is-the-ic/open-internet-services.webp"
              reverse={true}
            >
              <h3 className="tw-heading-4 md:tw-heading-60 mb-6">
                Efficient
              </h3>
              <p className="tw-paragraph md:tw-lead-sm mb-6 md:mb-10">
              You can’t expect the world’s software to move to a platform 
              that is orders of magnitude more expensive and resource 
              intensive than alternatives. Running smart contracts must be 
              possible at prices comparable to cloud offerings and without 
              consuming, i.e. wasting, resources order of magnitude more. 
              </p>
              {/* <Link className="link-primary link-with-icon" href="/sns">
                <LinkArrowRight /> User-run Web3
              </Link> */}
            </TranslatedLayout>
            <TranslatedLayout imageUrl="/img/what-is-the-ic/sovereign-infrastructure.webp">
              <h3 className="tw-heading-4 md:tw-heading-60 mb-6">
                Dev friendliness
              </h3>
              <p className="tw-paragraph md:tw-lead-sm mb-6 md:mb-10">
                ICP support programming languages and patterns known to developers,
              </p>
              {/* <Link
                className="link-primary link-with-icon"
                href="/node-providers"
              >
                <LinkArrowRight /> IT beyond cloud
              </Link> */}
            </TranslatedLayout>

            <TranslatedLayout
              imageUrl="/img/what-is-the-ic/reverse-gas-model.webp"
              reverse={true}
            >
              <h3 className="tw-heading-4 md:tw-heading-60 mb-6">
                State-of-the-art user experience
              </h3>
              <p className="tw-paragraph md:tw-lead-sm mb-6 md:mb-10">
              users can simply use their existing browser to interact 
              with smart contracts. No special software or token is 
              required. You can’t expect that mainstream software runs 
              as a smart contract if it means all its users have to jump 
              through hoops. 
              </p>
              {/* <Link
                className="link-primary link-with-icon"
                href="/capabilities/reverse-gas"
              >
                <LinkArrowRight /> Gas-free Web3
              </Link> */}
            </TranslatedLayout>

            <TranslatedLayout imageUrl="/img/what-is-the-ic/multi-chain.webp">
              <h3 className="tw-heading-4 md:tw-heading-60 mb-6">
                Interoperability
              </h3>
              <p className="tw-paragraph md:tw-lead-sm mb-6 md:mb-10">
              ICP can interface with other smart contract platforms and traditional 
              (Web 2) internet resources via HTTP requests and signing capabilities.
              </p>
              <p className="mb-3">
                {/* <Link
                  className="link-primary link-with-icon"
                  href="/bitcoin-integration"
                >
                  <LinkArrowRight /> Bitcoin
                </Link> */}
              </p>
              <p className="mb-3">
                {/* <Link
                  className="link-primary link-with-icon"
                  href="/ethereum-integration"
                >
                  <LinkArrowRight /> Ethereum
                </Link> */}
              </p>
            </TranslatedLayout>

            <TranslatedLayout imageUrl="/img/what-is-the-ic/multi-chain.webp">
              <h3 className="tw-heading-4 md:tw-heading-60 mb-6">
              Upgradability
              </h3>
              <p className="tw-paragraph md:tw-lead-sm mb-6 md:mb-10">
              Real software needs upgrading to evolve and quickly resolve problems, 
              e.g. security vulnerabilities. However, this must not come at the 
              cost of a central authority being in control. 
              </p>
              <p className="mb-3">
                {/* <Link
                  className="link-primary link-with-icon"
                  href="/bitcoin-integration"
                >
                  <LinkArrowRight /> Bitcoin
                </Link> */}
              </p>
              <p className="mb-3">
                {/* <Link
                  className="link-primary link-with-icon"
                  href="/ethereum-integration"
                >
                  <LinkArrowRight /> Ethereum
                </Link> */}
              </p>
            </TranslatedLayout>
          </div>
        </section>

        {/* How Section */}
        <section className="container-12 pt-10 md:pt-16 pb-30 md:pb-20 relative">
          <div className="text-center mb-16 md:mb-20">
            <AnimateSpawn
              className="container-12"
              variants={transitions.container}
            >
              <motion.h2
                className="tw-heading-3 md:tw-heading-60 text-gradient text-center inline-block mb-0"
                variants={transitions.item}
              >
                What are the key design choices ICP makes to achieve these capabilities? 
              </motion.h2>
            </AnimateSpawn>
          </div>
        {/* <section
          className="mt-20 md:mt-48
          bg-[linear-gradient(180deg,transparent_0%,transparent_97%,#3b00b9_97%,#3b00b9_100%)]
          sm:bg-[linear-gradient(180deg,transparent_0%,transparent_87%,#3b00b9_87%,#3b00b9_100%)]
          md:bg-[linear-gradient(180deg,transparent_0%,transparent_77%,#3b00b9_77%,#3b00b9_100%)]
          relative "
        > */}
          <div className="blob blob-white blob-sm md:blob-xl blob-x-7 blob-y-8"></div>

          <div className="container-12">
            <AnimateSpawn
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-5"
              variants={transitions.container}
            >
              <motion.div
                className="flex flex-col text-center backdrop-blur-2xl rounded-xl border border-white border-solid bg-white/90 p-12"
                variants={transitions.item}
              >
                <img
                  src="/img/what-is-the-ic/icon-tamperproof.svg"
                  alt=""
                  className="h-24"
                />
                <h3 className="tw-lead my-3 md:tw-title-sm">Standardized, powerful node hardware</h3>
                <p className="tw-paragraph-sm text-black/60 md:tw-paragraph mb-0">
                A replicated system is as fast as the weakest nodes, hosting powerful machines in data centers. 
                The implication of this design decision: one cannot simply participate with their Raspberry pi.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col text-center backdrop-blur-2xl rounded-xl border border-white border-solid bg-white/90 p-12"
                variants={transitions.item}
              >
                <img
                  src="/img/what-is-the-ic/icon-autonomous.svg"
                  alt=""
                  className="h-24"
                />
                <h3 className="tw-lead my-3 md:tw-title-sm">Asynchronous execution</h3>
                <p className="tw-paragraph-sm text-black/60  mb-0">
                Smart contracts run in an asynchronous environment (as opposed to Ethereum's synchronous model) 
                to maximize throughput and efficiency. The implication of this design decision: 
                a more complex programming model for web3 developers, but one more familiar to web2 developers.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col text-center backdrop-blur-2xl rounded-xl border border-white border-solid bg-white/90 p-12"
                variants={transitions.item}
              >
                <img
                  src="/img/what-is-the-ic/icon-simple.svg"
                  alt=""
                  className="h-24"
                />
                <h3 className="tw-lead my-3 md:tw-title-sm">Scale out via subnets</h3>
                <p className="tw-paragraph-sm text-black/60  mb-0">
                The implication of this design decision: The IC is composed of many subnets.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col text-center backdrop-blur-2xl rounded-xl border border-white border-solid bg-white/90 p-12"
                variants={transitions.item}
              >
                <img
                  src="/img/what-is-the-ic/icon-sovereign.svg"
                  alt=""
                  className="h-24"
                />
                <h3 className="tw-lead my-3 md:tw-title-sm">Deterministic decentralization</h3>
                <p className="tw-paragraph-sm text-black/60  mb-0">
                 Deterministic decentralization algorithmically maximizes decentralization and security 
                 while minimizing replication. DAO selected diverse node providers that are identified. 
                 The implication of this design decision: The replication factor is not as high as it is on Bitcoin and the-like. 
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col text-center backdrop-blur-2xl rounded-xl border border-white border-solid bg-white/90 p-12"
                variants={transitions.item}
              >
                <img
                  src="/img/what-is-the-ic/icon-web3-ois.svg"
                  alt=""
                  className="h-24"
                />
                <h3 className="tw-lead my-3 md:tw-title-sm">WebAssembly (Wasm)</h3>
                <p className="tw-paragraph-sm text-black/60  mb-0">
                By choosing WebAssembly as the portable binary-format for 
                smart contracts, ICP builds on an Internet community standard 
                with strong backers. Many mappings from popular languages to 
                Wasm are available and writing smart contracts in these languages 
                is therefore possible with relatively low additional development costs. 
                </p>
              </motion.div>
            
              <motion.div
                className="flex flex-col text-center backdrop-blur-2xl rounded-xl border border-white border-solid bg-white/90 p-12"
                variants={transitions.item}
              >
                <img
                  src="/img/what-is-the-ic/icon-next-gen-ai.svg"
                  alt=""
                  className="h-24"
                />
                <h3 className="tw-lead my-3 md:tw-title-sm">Reverse gas</h3>
                <p className="tw-paragraph-sm text-black/60  mb-0">
                  Allow users to interact with smart contracts without holding a token.
                </p>
              </motion.div>

              <motion.div
                className="flex flex-col text-center backdrop-blur-2xl rounded-xl border border-white border-solid bg-white/90 p-12"
                variants={transitions.item}
              >
                <img
                  src="/img/what-is-the-ic/icon-next-gen-ai.svg"
                  alt=""
                  className="h-24"
                />
                <h3 className="tw-lead my-3 md:tw-title-sm">Smart contracts serve web assets</h3>
                <p className="tw-paragraph-sm text-black/60  mb-0">
                Users can use their standard browser to interact with smart contracts. .
                </p>
              </motion.div>

              <motion.div
                className="flex flex-col text-center backdrop-blur-2xl rounded-xl border border-white border-solid bg-white/90 p-12"
                variants={transitions.item}
              >
                <img
                  src="/img/what-is-the-ic/icon-next-gen-ai.svg"
                  alt=""
                  className="h-24"
                />
                <h3 className="tw-lead my-3 md:tw-title-sm">Chain key cryptography</h3>
                <p className="tw-paragraph-sm text-black/60  mb-0">
                easily read trustworthy statements from ICP by simply verifying a signature, 
                as the chain has a single cryptographic public key. Decentralized by 
                using threshold cryptography under the hood. 
                </p>
              </motion.div>

              <motion.div
                className="flex flex-col text-center backdrop-blur-2xl rounded-xl border border-white border-solid bg-white/90 p-12"
                variants={transitions.item}
              >
                <img
                  src="/img/what-is-the-ic/icon-next-gen-ai.svg"
                  alt=""
                  className="h-24"
                />
                <h3 className="tw-lead my-3 md:tw-title-sm">NNS DAO</h3>
                <p className="tw-paragraph-sm text-black/60  mb-0">
                The community uses a DAO as the governance system to 
                decide on upgrades of the protocol, network topology changes and the governance system itself.
                </p>
              </motion.div>
            </AnimateSpawn>
          </div>
        </section>


        <section className="max-w-page relative mx-auto mb-20 px-6 md:mb-40 md:px-15 mt-30">
          <AnimateSpawn
            className=" relative text-white"
            variants={transitions.container}
          >
            <motion.div
              className="blob blob-purple blob-sm blob-x-5 blob-y-7 z-[-1] md:blob-lg"
              variants={transitions.fadeIn}
            ></motion.div>
            <motion.h2
              className="tw-heading-3 text-center mb-2 w-full mx-auto md:tw-heading-60 md:mb-6 lg:w-6/12"
              variants={transitions.item}
            >
              Get familiar with the Internet Computer
            </motion.h2>
          </AnimateSpawn>

          <AnimateSpawn
            className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-8 md:mt-16"
            variants={transitions.container}
          >
            <CardWithDescription
              title="Tech insights"
              description=""
              href="/how-it-works"
            />

            <CardWithDescription
              title="ICP community events"
              description=""
              href="https://dfinity.org/events-and-news/"
            />
            <CardWithDescription
              title="Developer docs"
              description=""
              href="/docs/current/home"
            />
            <CardWithDescription
              title="ICP dapps"
              description=""
              href="/ecosystem"
            />
          </AnimateSpawn>
        </section>
      </main>
    </Layout>
  );
}

export default WhatIsIcpPage;

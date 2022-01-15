import React from "react"
import { Helmet } from "react-helmet"
import Cookies from "@/components/Cookies"
import * as style from "./style.module.scss"

const MainLayout = ({ children }) => {
  return (
    <div className={style.layout}>
      <Helmet
        titleTemplate="RaySwap — %s"
        title="Cardano DEX Aggregator & Automated Market Maker DEX"
      >
        <link
          rel="stylesheet"
          type="text/css"
          href="/resources/font/satoshi.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/resources/font/ray-icons.css"
        />
        <meta property="og:url" content="https://rayswap.io" />
        <meta
          name="description"
          content="RaySwap is an automated liquidity protocol for creating liquidity and trading native tokens on Cardano. It eliminates trusted intermediaries and unnecessary forms of rent extraction, allowing for fast, efficient trading. Where it makes tradeoffs decentralization, censorship resistance, and security are prioritized."
        />
      </Helmet>
      <div>{children}</div>
      <Cookies />
    </div>
  )
}

export default MainLayout

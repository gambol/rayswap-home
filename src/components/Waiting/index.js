import React from "react"
import Menu from "@/components/menu"
import { SVGGithub } from "@/svg"
import * as style from "./style.module.scss"

const Waiting = () => {
  return (
    <div className={style.container}>
      <Menu />
      <div className={style.containerInner}>
        <div
          className={style.containerInnerBg}
          style={{ backgroundImage: "url(/resources/banners/lines.jpg)" }}
        />
        <div className={style.containerInnerFade} />
        <div className="ray__block mb-0">
          <div className={style.promo}>
            <div className={style.promoInner}>
              <div className="ray__title ray__title--inverse">
                Cardano DEX Aggregator & Automated Market Maker DEX
              </div>
              <h1>
                RaySwap <span className={style.promoInnerBadge}>SOON</span>
              </h1>
              <p className="mb-4">
                RaySwap is an aggregator of AMM / OrderBook exchanges for
                Cardano. The best prices and automatic search for the most
                beneficial offers from almost all exchanges for Cardano.
              </p>
              <p>
                It includes own automated liquidity protocol for creating
                liquidity and trading native tokens on Cardano. It eliminates
                trusted intermediaries and unnecessary forms of rent extraction,
                allowing for fast, efficient trading. Where it makes tradeoffs
                decentralization, censorship resistance, and security are
                prioritized.
              </p>
            </div>
          </div>
          <div className={style.info}>
            <div>
              It's all about ADA DeFi finances in one place. Fully Open Sourced.
              Built on Cardano.{" "}
            </div>
            <div className="ms-4">
              <a
                href="https://github.com/ray-network"
                className="ray__btn ray__btn--transparentDark ray__btn--round"
              >
                <SVGGithub className="me-1" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Waiting

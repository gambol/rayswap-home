import React, { useState } from "react"
import Menu from "@/components/menu"
import { Input, message } from "antd"
import { SVGGithub } from "@/svg"
import * as style from "./style.module.scss"

const Waiting = () => {
  const [email, setEmail] = useState()
  const [loading, setLoading] = useState(false)

  const subscribe = async () => {
    const validEmail = String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )

    if (validEmail) {
      let formData = new FormData()
      formData.append("EMAIL", email)
      setLoading(true)
      await fetch(
        "https://raynetwork.us20.list-manage.com/subscribe/post?u=630230660ec54c50b0c34762c&id=844a6bbde0",
        {
          method: "post",
          mode: "no-cors",
          body: formData,
        }
      )
      setLoading(false)
      setEmail()
      message.success("You have successfully subscribed!")
    } else {
      message.error("Please enter a valid email address.")
    }
  }


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
                Cardano DEX Aggregator & AMM DEX
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
              <div className="max-width-400">
                <Input.Search
                  placeholder="Enter your email"
                  allowClear
                  enterButton="Subscribe"
                  size="large"
                  value={email}
                  type="email"
                  onSearch={() => subscribe()}
                  onChange={(e) => setEmail(e.target.value)}
                  loading={loading}
                />
              </div>
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

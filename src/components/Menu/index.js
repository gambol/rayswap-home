import React from "react"
import { Link } from "gatsby"
import { Tooltip } from "antd"
import * as style from "./style.module.scss"
import { SVGRay } from "@/svg"

const Menu = () => {
  return (
    <div className={style.container}>
      <div className="ray__block mb-0">
        <div className={style.menu}>
          <div className={style.menuLogo}>
            <Link to="/" className={style.logo}>
              <SVGRay />
              <span>RaySwap</span>
            </Link>
          </div>
          <div className={style.menuDescr}>
            Cardano DEX Aggregator & Automated Market Maker DEX
          </div>
          <div className={style.menuButtons}>
            <Tooltip title="Soon" placement="left">
              <span
                className="ant-btn ray__btn ray__btn--white ray__btn--round"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri ri-wallet me-2" />
                <span>Launch App</span>
              </span>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu

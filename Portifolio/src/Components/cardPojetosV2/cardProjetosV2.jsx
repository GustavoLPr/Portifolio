import React from "react";
import * as styles from "./index.module.css";
import { AiFillGithub } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

export default function CardProjetosV2({
  titleCard,
  descricaoCard,
  tags,
  imagens1,
  imagens2,
  link,
}) {
  return (
    <div className={styles.containerCard2}>
      <div className={styles.imageArea}>
        <div className={styles.cima}>
          <Swiper modules={[EffectCards]} effect="cards">
            {imagens1.map((imgSrc, index) => (
              <SwiperSlide key={index}>
                <img
                  src={imgSrc}
                  alt={`Slide ${index + 1}`}
                  className={styles.imagemSlide}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={styles.baixo}>
          <Swiper modules={[EffectCards]} effect="cards">
            {imagens2.map((imgSrc, index) => (
              <SwiperSlide key={index}>
                <img
                  src={imgSrc}
                  alt={`Slide ${index + 1}`}
                  className={styles.imagemSlide}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className={styles.descriArea}>
        <div className={styles.titleCard}>{titleCard}</div>
        <div className={styles.descricaoCard}>{descricaoCard}</div>
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.linkCard}>
          <button
            className={styles.link}
            onClick={() =>
              window.open(link, "_blank")
            }
          >
            <AiFillGithub />
          </button>
        </div>
      </div>
    </div>
  );
}

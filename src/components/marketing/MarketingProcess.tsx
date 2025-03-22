"use client";

import Image from "next/image";
import styles from "./MarketingProcess.module.css";

export function MarketingProcess() {
  return (
    <section className={styles.container}>
      <div className={styles.titleSection}>
        <h2>A-Z 까지 필요한건 다 준비했습니다</h2>
        <h3 className={styles.subtitle}>원장님은 진료만 보세요</h3>
      </div>

      <div className={styles.contentSection}>
        <div className={styles.contentWrapper}>
          <div className={styles.leftContent}>
            <div className={styles.contentBox}>
              <div className={styles.imageBox}>
                <div className={`${styles.imageWrapper} ${styles.alignLeft}`}>
                  <Image
                    src="/assets/marketingProcess/image1.png"
                    alt="타사 블로그 포스팅"
                    width={280}
                    height={220}
                    className={styles.image}
                  />
                </div>

                <div className={styles.textContent}>
                  <h3 style={{ color: "#bcbcbc" }}>타사</h3>
                  <p>일반적인 정보 전달형 포스팅</p>
                </div>
              </div>

              <div className={`${styles.imageBox} ${styles.largeImage}`}>
                <div className={`${styles.imageWrapper} ${styles.alignRight}`}>
                  <Image
                    src="/assets/marketingProcess/image2.png"
                    alt="오늘의 브랜딩"
                    width={380}
                    height={260}
                    className={styles.image}
                  />
                </div>
                <div className={styles.textContent}>
                  <h3>오늘의 브랜딩</h3>
                  <p style={{ color: "#62fde3" }}>
                    전문지식이 접목된 <strong>칼럼형 포스팅</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.rightContent}>
            <div className={styles.rightBox} style={{ marginTop: "2rem" }}>
              <h3 className={styles.mainTitle}>신뢰가 느껴지는 전문 지식 컬럼 포스팅</h3>
              <h2 className={styles.highlightTitle}>BLOG POSTING</h2>
              <p>
                오늘의 브랜딩은 의료인의 직접 시술이나 의료 서비스에 대한 전문 지식을 포스팅 합니다. 신뢰감을 바탕으로
                제작된 블로그 관리를 시작해보세요.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.processSection} ${styles.processSection2}`}>
        <div className={styles.processBox}>
          <div className={styles.processContent}>
            <div className={styles.processText}>
              <h3 className={styles.mainTitle}>재진율을 올려주는 컨텐츠 시스템</h3>
              <h2 className={styles.highlightTitle}>PLACE MARKETING</h2>
              <p>
                검색 시 보이는 이미지는 우리 병원의 첫인상입니다.
                <br />
                고객의 선택에 가장 많은 비중을 차지하는 플레이스부터
                <br />
                인테리어 이미지까지, 오늘의 브랜딩은 신뢰감을 주는 첫인상을 만들어 드립니다.
              </p>
            </div>
            <div className={`${styles.processImage}  ${styles.imageTransform}`}>
              <Image
                src="/assets/marketingProcess/place-marketing.png"
                alt="플레이스 마케팅"
                width={500}
                height={400}
                className={`${styles.image}`}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.contentSection}>
        <div className={`${styles.contentWrapper} ${styles.paddingContent}`}>
          <div className={styles.leftContent}>
            <div className={styles.contentBox}>
              <div className={styles.flexCenter}>
                <div className={`${styles.imageWrapper2}`}>
                  <Image
                    src="/assets/marketingProcess/image3.png"
                    alt="타사 블로그 포스팅"
                    width={700}
                    height={420}
                    className={styles.image}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.rightContent}>
            <div className={styles.rightBox}>
              <h3 className={styles.mainTitle}>초진 환자 관리하는 예약부도 방지 시스템</h3>
              <h2 className={styles.highlightTitle}>SNS MARKETING</h2>
              <p>
                다양한 컨텐츠를 꾸준하게 노출하여 초진 환자의 접근성을 높이는 시스템, 오늘의 브랜딩이 만드는 사이클
                안에서 성장해보세요.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.processSection}>
        <div className={styles.processBox}>
          <div className={styles.processContent}>
            <div className={styles.processText}>
              <h3 className={styles.mainTitle}>재진율을 올려주는 컨텐츠 시스템</h3>
              <h2 className={styles.highlightTitle}>PLACE MARKETING</h2>
              <p>
                검색 시 보이는 이미지는 우리 병원의 첫인상입니다.
                <br />
                고객의 선택에 가장 많은 비중을 차지하는 플레이스부터
                <br />
                인테리어 이미지까지, 오늘의 브랜딩은 신뢰감을 주는 첫인상을 만들어 드립니다.
              </p>
            </div>
            <div className={styles.processImage}>
              <Image
                src="/assets/marketingProcess/image4.png"
                alt="플레이스 마케팅"
                width={500}
                height={400}
                className={`${styles.image}`}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.contentSection}>
        <div className={`${styles.contentWrapper}`}>
          <div className={styles.leftContent}>
            <div className={styles.contentBox}>
              <div className={styles.flexCenter}>
                <div className={`${styles.imageWrapper2} ${styles.imageTransform2}`}>
                  <Image
                    src="/assets/marketingProcess/imageGroup.png"
                    alt="타사 블로그 포스팅"
                    width={700}
                    height={420}
                    className={styles.image}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.rightContent}>
            <div className={`${styles.rightBox} ${styles.textCenter}`}>
              <h3 className={styles.mainTitle}>초진 환자 관리하는 예약부도 방지 시스템</h3>
              <h2 className={styles.highlightTitle}>SNS MARKETING</h2>
              <p>
                다양한 컨텐츠를 꾸준하게 노출하여 초진 환자의 접근성을 높이는 시스템, 오늘의 브랜딩이 만드는 사이클
                안에서 성장해보세요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

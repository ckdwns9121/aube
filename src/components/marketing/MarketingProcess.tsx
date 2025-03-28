"use client";

import Image from "next/image";
import styles from "./MarketingProcess.module.css";
import TitleHeader from "../common/Title";
export function MarketingProcess() {
  return (
    <section className={styles.container}>
      <div className={styles.titleSection} data-aos="fade-up">
        <TitleHeader title="A-Z 까지 필요한건 다 준비했습니다" subTitle="원장님은 진료만 보세요" />
      </div>

      <div className={styles.contentSection}>
        <div className={styles.contentWrapper}>
          <div className={styles.leftContent} data-aos="fade-right">
            <div className={styles.contentBox}>
              <div className={styles.imageBox}>
                <div className={`${styles.imageWrapper} ${styles.alignLeft}`}>
                  <Image
                    src="/assets/marketingProcess/image1.gif"
                    alt="일반적인 정보 전달형 블로그 포스팅 예시"
                    width={280}
                    height={220}
                    className={styles.image}
                  />
                </div>

                <div className={styles.textContent}>
                  <h3 style={{ color: "#bcbcbc" }} className={styles.itemTitle}>타사</h3>
                  <p>일반적인 정보 전달형 포스팅</p>
                </div>
              </div>

              <div className={`${styles.imageBox} ${styles.largeImage}`}>
                <div className={`${styles.imageWrapper} ${styles.alignRight}`}>
                  <Image
                    src="/assets/marketingProcess/image2.gif"
                    alt="전문지식이 접목된 칼럼형 블로그 포스팅 예시"
                    width={380}
                    height={260}
                    className={styles.image}
                  />
                </div>
                <div className={styles.textContent}>
                  <h3 className={styles.itemTitle}>오늘의 브랜딩</h3>
                  <p style={{ color: "#62fde3" }}>
                    전문지식이 접목된 <strong>칼럼형 포스팅</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.rightContent} data-aos="fade-left">
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
      <div className={`${styles.processSection} ${styles.processSection2}`} data-aos="fade-up">
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
                인테리어 이미지까지,
                <br /> 오늘의 브랜딩은 신뢰감을 주는 첫인상을 만들어 드립니다.
              </p>
            </div>
            <div className={`${styles.processImage}  ${styles.imageTransform}`}>
              <Image
                src="/assets/marketingProcess/place-marketing.png"
                alt="병원 플레이스 마케팅 예시 이미지"
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
          <div className={styles.leftContent} data-aos="fade-right">
            <div className={styles.contentBox}>
              <div className={styles.flexCenter}>
                <div className={`${styles.imageWrapper2}`}>
                  <Image
                    src="/assets/marketingProcess/image3.png"
                    alt="SNS 마케팅을 통한 예약 관리 시스템 화면"
                    width={700}
                    height={420}
                    className={styles.image}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.rightContent} data-aos="fade-left">
            <div className={styles.rightBox}>
              <h3 className={styles.mainTitle}>초진 환자 관리하는 예약부도 방지 시스템</h3>
              <h2 className={styles.highlightTitle}>SNS MARKETING</h2>
              <p>
                다양한 컨텐츠를 꾸준하게 노출하여 초진 환자의 접근성을<br/> 높이는 시스템, 오늘의 브랜딩이 만드는 사이클
                안에서 성장해보세요.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.processSection} data-aos="fade-up">
        <div className={styles.processBox}>
          <div className={styles.processContent}>
            <div className={styles.processText}>
              <h3 className={styles.mainTitle}>제작 단계에서부터 마케팅을 염두한</h3>
              <h2 className={styles.highlightTitle}>HOME PAGE DESIGN</h2>
              <p></p>
              <p>
                병원 이해도가 높은 의료인이 제작 하는 홈페이지는 다릅니다.
                <br />
                유지와 보수 걱정 없이 진료에만 집중할 수 있도록,
                <br />
                이제 오늘의 브랜딩이 도와드리겠습니다.
              </p>
            </div>
            <div className={`${styles.processImage} ${styles.maxWidth}`}>
              <Image
                src="/assets/marketingProcess/image4.gif"
                alt="병원 마케팅 컨텐츠 시스템 대시보드"
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
          <div className={styles.leftContent} data-aos="fade-right">
            <div className={styles.contentBox}>
              <div className={styles.flexCenter}>
                <div className={`${styles.imageWrapper2} ${styles.imageTransform2} ${styles.maxWidth}`}>
                  <Image
                    src="/assets/marketingProcess/imageGroup.png"
                    alt="통합 마케팅 관리 시스템 인터페이스"
                    width={700}
                    height={420}
                    className={styles.image}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.rightContent} data-aos="fade-left">
            <div className={`${styles.rightBox} ${styles.textCenter}`}>
              <h3 className={styles.mainTitle}>깊은 인상을 남기는 브랜드 메세지 </h3>
              <h2 className={styles.highlightTitle}>
                PROMOTION
                <br /> MATERIALS
              </h2>
              <p>
                단순 정보 전달을 넘어 스토리텔링과 브랜드 메시지를 강조하여
                <br /> 방문자들에게 깊은 인상을 전달해보세요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

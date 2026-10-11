import "../styles/appinfo.css";
import Reveal from "../components/Reveal";

import appinfoImage from "../assets/appinfo.png";
import appinfoCard1 from "../assets/appinfo-card1.png";
import appinfoCard2 from "../assets/appinfo-card2.png";
import appinfoCard3 from "../assets/appinfo-card3.png";
import appinfoCard4 from "../assets/appinfo-card4.png";

function AppInfo() {
  return (
    <section className="appinfo-page">
      {/* Hero */}
      <div className="appinfo-hero">
        <div className="container">
          <div className="appinfo-hero-content">
            <img
              className="appinfo-hero-image"
              src={appinfoImage}
              alt="معرفی اپلیکیشن پایار"
            />

            <Reveal className="appinfo-hero-text">
              <span className="label">معرفی پایار</span>

              <h1>درباره اپ پایار</h1>

              <h2>یک راهکار هوشمند برای آرامش خانواده‌ها</h2>

              <p>
                پایار یک پلتفرم همراهی و مراقبت است که با هدف
                ساده‌تر کردن ارتباط میان سالمند، خانواده و همیار
                طراحی شده است. پایار با تمرکز بر نیازهای واقعی
                خانواده‌ها، تجربه‌ای ساده و مطمئن ایجاد می‌کند.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Why Payar */}
      <div className="why-section">
        <div className="container">
          <Reveal className="section-header">
            <span className="label">چرا پایار؟</span>

            <h2>برای یک تجربه ساده‌تر و مطمئن‌تر</h2>

            <p>
              پایار با تمرکز بر نیازهای واقعی خانواده‌ها طراحی شده است.
            </p>
          </Reveal>

          <div className="why-grid">
            {/* Card 1 */}
            <Reveal className="why-card" delay={0}>
              <div className="why-card-icon">
                <img
                  src={appinfoCard1}
                  alt="اطلاع از وضعیت عزیزان"
                  loading="lazy"
                />
              </div>

              <div>
                <h3>همیشه در جریان باشید</h3>

                <p>
                  با پایار راحت‌تر از وضعیت و امور روزمره عزیزتان
                  باخبر بمانید و با خیال آسوده‌تری همراه او باشید.
                </p>
              </div>
            </Reveal>

            {/* Card 2 */}
            <Reveal className="why-card" delay={100}>
              <div className="why-card-icon">
                <img
                  src={appinfoCard2}
                  alt="محیط ساده و قابل فهم پایار"
                  loading="lazy"
                />
              </div>

              <div>
                <h3>همراهی بدون پیچیدگی</h3>

                <p>
                  پایار با محیطی ساده و قابل فهم طراحی شده تا
                  استفاده از آن برای سالمند و همیار راحت و بدون
                  دردسر باشد.
                </p>
              </div>
            </Reveal>

            {/* Card 3 */}
            <Reveal className="why-card" delay={0}>
              <div className="why-card-icon">
                <img
                  src={appinfoCard3}
                  alt="امکانات مراقبتی پایار"
                  loading="lazy"
                />
              </div>

              <div>
                <h3>مراقبت با خیال راحت‌تر</h3>

                <p>
                  از مدیریت داروها و یادآوری‌ها تا دسترسی به
                  مخاطبان ضروری، ابزارهای مورد نیاز برای یک
                  همراهی مطمئن در کنار شماست.
                </p>
              </div>
            </Reveal>

            {/* Card 4 */}
            <Reveal className="why-card" delay={100}>
              <div className="why-card-icon">
                <img
                  src={appinfoCard4}
                  alt="ارتباط و همراهی از راه دور"
                  loading="lazy"
                />
              </div>

              <div>
                <h3>نزدیک‌تر، حتی از دور</h3>

                <p>
                  همیشه امکان حضور فیزیکی در کنار عزیزانمان نیست.
                  پایار کمک می‌کند ارتباط و همراهی حتی در فاصله‌ها
                  هم ادامه داشته باشد.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="key-features">
        <div className="container">
          <Reveal className="key-features-content">
            <span className="label">ویژگی‌های کلیدی اپ</span>

            <h2>همیشه در ارتباط، همیشه نزدیک</h2>

            <ul className="check-list">
              <li>
                <span className="check-icon">✓</span>
                کاربری ساده و راحت
              </li>

              <li>
                <span className="check-icon">✓</span>
                باخبر بودن از حال یکدیگر
              </li>

              <li>
                <span className="check-icon">✓</span>
                ارتباط سریع با خانواده
              </li>

              <li>
                <span className="check-icon">✓</span>
                همراهی مطمئن در کنار سالمند
              </li>

              <li>
                <span className="check-icon">✓</span>
                آرامش بیشتر برای خانواده
              </li>
            </ul>
          </Reveal>
        </div>
      </div>

      {/* Our Goal */}
      <div className="goal-section">
        <div className="container">
          <Reveal className="section-header">
            <span className="label">هدف ما</span>

            <h2>مراقبتی نزدیک‌تر، با آرامش بیشتر</h2>
          </Reveal>

          <Reveal className="goal-card">
            <p>
              هدف پایار این است که مراقبت از سالمندان را ساده‌تر
              و ارتباط خانواده‌ها را نزدیک‌تر کند. ما تلاش می‌کنیم
              با ایجاد تجربه‌ای راحت و قابل اعتماد، به خانواده‌ها
              کمک کنیم تا با خیال آسوده‌تر از عزیزانشان مراقبت کنند
              و همیشه از حال یکدیگر باخبر باشند.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default AppInfo;
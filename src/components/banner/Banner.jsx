import { motion } from "framer-motion";
import bannerImage from "../../assets/image/banner.jpeg";

export default function Banner() {
  return (
    <motion.section
      className="banner"
      initial={{ scale: 0.99, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "calc(100vh - 80px)",
        width: "100%",
      }}
    >
      <motion.div
        className="banner_items"
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <h1 className="banner_title">
          Все фильмы Шрека – почувствуй себя огром!
        </h1>
        <p className="banner_text">
          Жизнь – это не только болота и луковицы... В каждом приключении – своя
          магия, своя суматоха и, конечно, свой осел. Так что располагайся
          поудобнее, впереди целая история – с дружбой, парой-тройкой
          неожиданных поворотов и, может быть, даже счастливым концом.
        </p>
      </motion.div>
      <motion.button
        className="banner_button"
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 1.2 }}
      >
        Смотреть сейчас
      </motion.button>
    </motion.section>
  );
}

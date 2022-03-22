import React from "react";
import { ArrowRight, CircleFill } from "react-bootstrap-icons";
import woman from "../../assets/image/woman.png";
import { motion } from "framer-motion";
//styles
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.Header}>
      <div className="containerLayout">
        <div className={styles.HeaderRow}>
          <div className={styles.headerLeft}>
            <h3>
              <CircleFill size="10px" /> Black Friday 2022
            </h3>
            <h1>
              Make Tomorrow <br /> Beautiful
            </h1>
            <p>
              You cant resist Black Friday at 2022, where you can expect upto
              70% discounts in more than 100 shops!!
            </p>
            <button className={styles.headerLeftBtn}>
              Shop Now <ArrowRight size="20px" />
            </button>
          </div>
          <div className={styles.headerRight}>
            <motion.div
              initial={{ scale: 0, rotate: 180 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 20,
              }}
              whileInView={{ scale: 1, rotate: 0 }}
            >
              <img alt="" src={woman} />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

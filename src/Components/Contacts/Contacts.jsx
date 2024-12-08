import MailIcon from "/mail.svg";
import TelIcon from "/tel.svg";
import css from "./Contacts.module.css";
export const Contacts = () => {
  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        <li className={css.item}>
          <a className={css.link} href="mailto:apartak@gmail.com">
            <img src={MailIcon} className={css.logo} alt="envelope" />
            apartak@gmail.com
          </a>
        </li>
        <li className={css.item}>
          <a className={css.link} href="tel:+3809902384711">
            <img src={TelIcon} className={css.logo} alt="envelope" />
            +380 99 023 847 11
          </a>
        </li>
      </ul>
    </div>
  );
};

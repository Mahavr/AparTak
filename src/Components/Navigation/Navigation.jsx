import css from "./Navigation.module.css";
import { Logo } from "../Logo/Logo";
import { Contacts } from "../Contacts/Contacts";
import { LinkButton } from "../LinkButton/LinkButton";
export const Navigation = () => {
  return (
    <header className={css.header}>
      <div className={css.wrapper}>
        <nav className={css.nav}>
          <div>
            <LinkButton href={"/"}>Головна</LinkButton>
          </div>
          <div>
            <LinkButton href={"/apartments"}>Квартири</LinkButton>
          </div>
        </nav>
        <div>
          <Logo />
        </div>
        <address>
          <Contacts />
        </address>
      </div>
    </header>
  );
};

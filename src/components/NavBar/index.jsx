import styles from "./NavBar.module.scss";
import classNames from "classnames/bind";
import Button from "~/components/Button";
const cx = classNames.bind(styles);
const NavBar = () => {
  const ListAction = ["Product", "About us", "Features", "Contact Us"];
  return (
    <>
      <nav className={cx("wrapper")}>
        <div className={cx("inner")}>
          <div className={cx("logo")}>
            <h2>Besnik</h2>
            <p className={cx("dot")}>.</p>
          </div>
          <div className={cx("menu")}>
            <ul className={cx("list-action")}>
              {ListAction.map((item, index) => (
                <li key={index} className={cx("list-items__action")}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={cx("action")}>
            <Button>Sign In</Button>
            <Button primary>Sign Up</Button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

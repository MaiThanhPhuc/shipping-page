import styles from "./Button.module.scss";
import classNames from "classnames/bind";
import {Link} from "react-router-dom";
const cx = classNames.bind(styles);

const Button = ({
  to,
  href,
  primary,
  medium,
  link,
  children,
  onClick,
  ...passProps
}) => {
  let Comp = "button";
  const props = {
    onclick,
    ...passProps,
  };
  if (to) {
    props.onclick = to;
    Comp = Link;
  } else if (href) {
    props.onclick = href;
    Comp = "a";
  }

  const classes = cx("wrapper", {primary, link, medium});

  return (
    <>
      <Comp className={classes} {...passProps}>
        <span></span>
        {children}
      </Comp>
    </>
  );
};

export default Button;

import classnames from "classnames";

function Icon({ iconName, className, ...restProps }) {
  return (
    <svg
      className={classnames("icon", className)}
      aria-hidden="true"
      {...restProps}
    >
      <use xlinkHref={`#${iconName}`}></use>
    </svg>
  );
}

export default Icon;

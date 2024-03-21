import PropTypes from "prop-types";
const Link = ({ route }) => {
  return (
    <li className="mr-8 font-bold px-6 hover:bg-red-500 ">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

Link.PropTypes = {
  route: PropTypes.object,
};

export default Link;

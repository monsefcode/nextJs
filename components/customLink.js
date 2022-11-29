import React from "react";
// proptype
import PropTypes from "prop-types";
import Link from "next/link";
// ------------------------------------------------------------

const customLink = ({ href, label }) => {
  return (
    <Link href={href}>
      <div className="group h-[40px] p-2 overflow-hidden">
        <div className="flex flex-col item-center justify-center group-hover:-translate-y-10 transition duration-700">
          <span className="">{label}</span>
          <span className=" font-semibold">{label}</span>
        </div>
      </div>
    </Link>
  );
};

export default customLink;

customLink.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

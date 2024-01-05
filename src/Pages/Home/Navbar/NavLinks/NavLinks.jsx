import { NavLink } from "react-router-dom";

const NavLinks = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " rounded tracking-[2px] text-[15px]   font-extrabold hover:text-primary-green"
              : " font-semibold"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " rounded tracking-[2px] text-[15px]   font-extrabold hover:text-primary-green"
              : " font-semibold"
          }
        >
          Crazy offers !
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " rounded tracking-[2px] text-[15px]   font-extrabold hover:text-primary-green"
              : " font-semibold"
          }
        >
          Round Neck half sleeve
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " rounded tracking-[2px] text-[15px]   font-extrabold hover:text-primary-green"
              : " font-semibold"
          }
        >
          round neck full sleeve
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " rounded tracking-[2px] text-[15px]   font-extrabold hover:text-primary-green"
              : " font-semibold"
          }
        >
          joggers
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " rounded tracking-[2px] text-[15px]   font-extrabold hover:text-primary-green"
              : " font-semibold"
          }
        >
          hoodies
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " rounded tracking-[2px] text-[15px]   font-extrabold hover:text-primary-green"
              : " font-semibold"
          }
        >
          solid polo
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " rounded tracking-[2px] text-[15px]   font-extrabold hover:text-primary-green"
              : " font-semibold"
          }
        >
          v-neck
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " rounded tracking-[2px] text-[15px]   font-extrabold hover:text-primary-green"
              : " font-semibold"
          }
        >
          shorts
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " rounded tracking-[2px] text-[15px]   font-extrabold hover:text-primary-green"
              : " font-semibold"
          }
        >
          collections
        </NavLink>
      </li>
    </>
  );
  return (
    <div className=" px-10  my-8 leading-[-20px]">
      <ul className=" flex gap-9  tracking-wider   flex-wrap uppercase justify-center ">{navLinks}</ul>
      
    </div>
  );
};

export default NavLinks;

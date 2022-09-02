import { useEffect, RefObject, useState, useRef } from "react";
import "./Humburger.css"

const useOnClickOutside = (
  ref: RefObject<HTMLDivElement>,
  closeMenu: () => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (ref.current && event.target &&
        ref.current.contains(event.target as Node)
      ) {
        return;
      }
      closeMenu();
    };

    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, closeMenu]);
};

type Props = {
  open: boolean;
  setOpen?: (v: boolean) => void;
};

const Menu = (props: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  const node = useRef<HTMLDivElement>(null);
  useOnClickOutside(node, () => props.setOpen?.(false));
  return (
    <div ref={node}>
      ....
    </div>
  );
};

export const Hamburger = (props: Props) => (
  <div className="humburger"
    onClick={() => props.setOpen?.(!props.open)}
  >
    <div>HOME</div>
    <div>CONTACT</div>
  </div>
);
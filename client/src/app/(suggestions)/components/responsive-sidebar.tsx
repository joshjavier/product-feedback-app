"use client";

import { Drawer } from "vaul";
import CategoryRadioGroup from "./category-radio-group";
import IconHamburger from "@/icons/icon-hamburger.svg";
import { forwardRef, useRef, useState } from "react";
import { useDebounceCallback, useResizeObserver } from "usehooks-ts";
import clsx from "clsx";

const Header = forwardRef<HTMLDivElement, { toggle: () => void }>(
  (props, ref) => (
    <div
      ref={ref}
      className="md:hidden flex items-center justify-between bg-electric-violet text-white px-6 pt-4 pb-[15] max-sm:-mx-6 max-lg:-mx-10"
    >
      <div>
        <p className="font-bold text-[15px] tracking-[-0.19px]">
          Frontend Mentor
        </p>
        <h1 className="font-medium text-[13px] opacity-75">Feedback Board</h1>
      </div>
      <Drawer.Trigger onClick={props.toggle}>
        <IconHamburger />
      </Drawer.Trigger>
    </div>
  )
);

Header.displayName = "Header";

export default function ResponsiveSidebar() {
  const ref = useRef<HTMLDivElement>(null as unknown as HTMLDivElement);
  const [isDrawer, setDrawer] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const toggleDrawer = ({ width }: { width?: number }) => {
    if (width === 0) {
      setDrawer(false);
      setOpen(true);
    } else {
      setDrawer(true);
      setOpen(false);
    }
  };

  useResizeObserver({
    ref,
    box: "border-box",
    onResize: useDebounceCallback(toggleDrawer, 200),
  });

  return (
    <Drawer.Root direction="right" open={isOpen} handleOnly>
      <Header ref={ref} toggle={() => setOpen(!isOpen)} />
      <Drawer.Overlay
        className={clsx(
          { hidden: !isDrawer },
          "fixed inset-0 top-[72] bg-black/50"
        )}
      />
      <Drawer.Content
        className={clsx(
          "fixed top-[72] right-0 bottom-0 max-w-[271] bg-link-water p-6 z-50",
          { "contents static": !isDrawer }
        )}
      >
        <div className="grid gap-x-[10] gap-y-6 md:max-lg:grid-flow-col md:max-lg:auto-cols-fr lg:w-[255px]">
          <div className="max-md:hidden bg-electric-violet text-white rounded-[10] p-6 lg:min-h-[137] flex flex-col justify-end">
            <p className="font-bold text-xl/[normal] tracking-[-0.25px]">
              Frontend Mentor
            </p>
            <h1 className="font-medium text-[15px] opacity-75">
              Feedback Board
            </h1>
          </div>
          <div className="bg-white rounded-[10] p-6">
            <CategoryRadioGroup />
          </div>
          <div className="bg-white rounded-[10] p-6 pt-[19]">
            <p>Roadmap</p>
            <ul>
              <li>Planned 2</li>
              <li>In-Progress 3</li>
              <li>Live 1</li>
            </ul>
          </div>
        </div>
      </Drawer.Content>
    </Drawer.Root>
  );
}

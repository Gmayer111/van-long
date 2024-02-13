import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { TLinkItemList } from "src/types/nav";

type TLinkItemComponentProps = TLinkItemList & {
  isResponsive?: boolean;
  setDisplayResponsiveMenu: (value: boolean) => void;
};

export const LinkItemComponent = ({
  label,
  path,
  setDisplayResponsiveMenu,
}: TLinkItemComponentProps) => {
  const activePath = usePathname();
  const router = useRouter();

  const handleScrollToId = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    router.push("/");
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const element = document.getElementById(targetId);
    element?.scrollIntoView({
      behavior: "smooth",
    });
    setDisplayResponsiveMenu(false);
  };

  return (
    <li>
      <Link
        className={`${activePath === path ? "active" : ""} ${typeof label !== "string" ? "logo" : ""}`}
        scroll={false}
        href={path}
        onClick={
          label === "LE RESTAURANT"
            ? handleScrollToId
            : () => setDisplayResponsiveMenu(false)
        }
      >
        {label}
      </Link>
    </li>
  );
};

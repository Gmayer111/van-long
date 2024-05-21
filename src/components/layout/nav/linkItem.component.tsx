import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { TLabelNavValues, TLinkItemList } from "src/types/nav";

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
    const href = e.currentTarget.href
      .replace("http://localhost:3000", "")
      .split("#");

    const path = href[0];
    const id = href[1];
    router.push(path!);
    document.getElementById(id!)?.scrollIntoView({
      behavior: "smooth",
    });
    setDisplayResponsiveMenu(false);
  };

  const handleClickLink = (
    labelValue: TLabelNavValues,
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    switch (labelValue) {
      case "ACCUEIL" || "HOME":
        setDisplayResponsiveMenu(false);
        break;
      case "LE RESTAURANT" || "RESTAURANT":
      case "LA CARTE" || "MENU":
      case "NOUS TROUVER" || "FIND US":
        handleScrollToId(e);
        break;

      default:
        setDisplayResponsiveMenu(false);
        break;
    }
  };

  return (
    <li>
      <Link
        className={`${activePath === path.replace(/\/#\w*-\w*/gm, "") ? "active" : ""} ${typeof label !== "string" ? "logo" : ""}`}
        scroll={false}
        href={path}
        onClick={(e) => handleClickLink(label as TLabelNavValues, e)}
        aria-label={
          typeof label !== "string" ? "Logo cliquable de la navigation" : ""
        }
      >
        {label}
      </Link>
    </li>
  );
};

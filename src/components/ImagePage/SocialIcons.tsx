import { HStack, IconButton } from "@chakra-ui/react";
import {
  FaEnvelope,
  FaFacebook,
  FaPinterest,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { WallpaperObject } from "../HomePage/WallpaperCard";

export default function SocialIcons({
  wallpaper,
}: {
  wallpaper: WallpaperObject;
}) {
  const pageUrl = "https://wallpapers.fyi/images/" + wallpaper.id;
  const shareText = `Check out this awesome AI generated wallpaper!`;

  const encodedShareText = encodeURIComponent(shareText);
  const encodedPageUrl = encodeURIComponent(pageUrl);
  const shareItems = [
    {
      icon: <FaFacebook />,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedPageUrl}`,
      label: "Facebook",
    },
    {
      icon: <FaTwitter />,
      href: `https://twitter.com/intent/tweet?url=${encodedPageUrl}&text=${encodedShareText}`,
      label: "Twitter",
    },
    {
      icon: <FaPinterest />,
      href: `https://pinterest.com/pin/create/button/?url=${encodedPageUrl}&description=${encodedShareText}`,
      label: "Pinterest",
    },
    {
      icon: <FaEnvelope />,
      href: `mailto:?subject=${shareText}&body=${shareText} - ${pageUrl}`,
      label: "Share link",
    },
  ];

  return (
    <HStack>
      {shareItems.map((item) => (
        <IconButton
          key={item.label}
          icon={item.icon}
          as={"a"}
          href={item.href}
          aria-label={item.label}
          target={"_blank"}
          rel={"noopener noreferrer"}
        />
      ))}
    </HStack>
  );
}

import { Link as ChakraLink } from "@chakra-ui/react";

interface LinkProps {
  href: string;
  onLinkClick?: () => void;
  text: string
}

export const Link: React.FC<LinkProps> = ({ href, onLinkClick, text }) => {
  return <ChakraLink href={href}>{text}</ChakraLink>;
};

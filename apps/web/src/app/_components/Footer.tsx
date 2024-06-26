import {
  GitHubIcon,
  LogoIcon,
  TelegramIcon,
  TwitterIcon,
  Typography,
} from "design-system";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="sticky bottom-0 left-0 top-[100vh] flex w-full flex-col bg-white px-6 py-9 text-space-blue-900 dark:bg-void-black dark:text-asteroid-grey-200 sm:h-[7.125rem] sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-9 text-space-blue-900 dark:text-white">
        <div className="flex items-center gap-2">
          <Typography variant="body_text_14">In Partnership with</Typography>
          <LogoIcon />
        </div>
      </div>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
        <Link
          className="transition-colors hover:text-space-blue-source"
          href="/terms-of-use"
        >
          <Typography variant="body_text_14">Terms of use</Typography>
        </Link>
        <Link
          className="transition-colors hover:text-space-blue-source"
          href="/privacy"
        >
          <Typography variant="body_text_14">Privacy Policy</Typography>
        </Link>
        <Link
          className="transition-colors hover:text-space-blue-source"
          href="/legal-notice"
        >
          <Typography variant="body_text_14">Legal Notice</Typography>
        </Link>
        <Link
          className="transition-colors hover:text-space-blue-source"
          href="/faq"
        >
          <Typography variant="body_text_14">FAQ</Typography>
        </Link>
        {/* <Typography variant="button_text_l">Documentation</Typography> */}
        <Typography variant="body_text_14">
          © {new Date().getFullYear()} ArkProject
        </Typography>
        <div className="flex items-center gap-3">
          <a
            className="rounded-full transition-colors hover:text-space-blue-800 dark:hover:text-white"
            href="https://github.com/ArkProjectNFTs"
            rel="noreferrer"
            target="_blank"
          >
            <GitHubIcon />
          </a>
          <a
            className="rounded-full transition-colors hover:text-space-blue-800 dark:hover:text-white"
            href="https://t.me/arkprojectnfts"
            rel="noreferrer"
            target="_blank"
          >
            <TelegramIcon />
          </a>
          <a
            className="rounded-full transition-colors hover:text-space-blue-800 dark:hover:text-white"
            href="https://twitter.com/ArkProjectNFTs"
            rel="noreferrer"
            target="_blank"
          >
            <TwitterIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}

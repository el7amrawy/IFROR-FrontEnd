import { redirect } from "next/navigation";

export default function EmptyPage() {
  const targetUrl = process.env.NEXT_CHANNEL_REDIRECT_URL || "/default-channel";
  redirect(targetUrl);
}
// #1-1 styling 전역 css 적용
import '@/app/ui/global.css';

//폰트 불러오기
import {inter} from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* body 태그에 폰트 적용 */}
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}

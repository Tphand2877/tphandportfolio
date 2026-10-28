# Peter Phan (Thuận Phan) — Portfolio 

Portfolio VI/EN của Peter Phan (Thuận Phan) theo triết lý thiết kế **Executive Neo-Futurism**: *"Designed for Power. Engineered for the Future."* Định hướng Kỹ sư cầu nối (Bridge System Engineer — BrSE), Game Development và sáng lập công nghệ. Sử dụng HTML/CSS/JavaScript thuần, không runtime dependency, tối ưu hiệu năng và khả năng truy cập WCAG 2.2 AA.

## Chạy và kiểm tra

Yêu cầu Node.js:

```sh
npm run dev
npm run check
```

Mở http://127.0.0.1:4173. `check` kiểm tra cú pháp ba file JavaScript, không phải lint, type-check hay kiểm thử trình duyệt. Thư mục phục vụ/deploy là `dist/`.

## Cấu trúc và chỉnh sửa

- `dist/index.html`: nội dung tiếng Việt có thể đọc khi JavaScript không chạy; thứ tự Hero → ba cột mốc nổi bật → dự án TechSupport → dự án BusGo → About → Gallery → Journey (11 chương) → Contact.
- `dist/i18n.js`: nội dung tiếng Anh và chuyển ngôn ngữ/theme. Khóa `data-i18n` ổn định kết nối với `english`; không gắn bản dịch theo vị trí card. Thuộc tính `data-i18n-label`, `data-i18n-alt`, `data-i18n-content`, `data-i18n-caption` lần lượt dịch tên truy cập, alt, metadata và chú thích ảnh. `data-i18n-href` đổi liên kết CV theo ngôn ngữ; giá trị tiếng Việt vẫn nằm trong HTML để tải được khi tắt JavaScript. Khi thêm khóa ở HTML, thêm bản Anh tương ứng.
- `dist/app.js`: menu, bộ lọc và bộ đếm lấy từ gallery, native dialog, bàn phím/swipe, sao chép email, reveal/progress timeline và về đầu trang. BusGo có tab quản trị và dialog riêng cho ảnh dài, không trộn vào gallery nhiếp ảnh hoặc bộ đếm. Timeline hiển thị mặc định; chỉ bật reveal sau khi observer khởi tạo thành công. Reduced motion được theo dõi cả khi thay đổi trong phiên.
- `dist/preferences.js`: khôi phục theme/ngôn ngữ trước khi render. Không ép tắt khôi phục vị trí cuộn của trình duyệt.
- `dist/styles.css`, `dist/themes.css`: bố cục, tokens và theme. Menu compact dưới 1200px, gallery một cột dưới 551px, timeline có trục bên trái dưới 951px. Ba mốc chính dùng card toàn chiều rộng với hình ảnh hoặc khối giải thưởng; dưới 701px, card và dải cột mốc chuyển một cột. Header nằm trong luồng trang, không che nội dung.
- `dist/assets/`: ảnh gốc, biến thể WebP, `social-card.jpg` và hai CV PDF.

## Dữ kiện nội dung

ICTU là trường theo học chính, chương trình Cử nhân CNTT Quốc tế, nhập học 2025 và hiện năm 2. INTI Malaysia là chương trình mobility CNTT ba tháng năm 2026. TechSupport là sáng kiến S2S do Thuận sáng lập (Founder & CEO), đã được xác nhận đang hoạt động. Phần dự án mô tả dịch vụ, giao diện website và chuyên môn của Thuận theo thông tin được công bố tại https://tphand2877.github.io/techsupport/index.html. Việc quan sát giao diện tra cứu hoặc lịch hẹn không xác minh backend, giao dịch hay kết quả phục vụ; không tự thêm số liệu khách hàng, doanh thu hoặc kết quả kỹ thuật.

Các định hướng nghề nghiệp được phân biệt với chức danh hiện tại. Giải Khuyến khích THPT không ghi cấp thi chưa xác minh. Không đưa số lượng máy sửa hoặc bài toán đã giải khi chưa có dữ kiện.
Thông tin cá nhân xác nhận gồm: ngày sinh 28/07/2007, giới tính Nam, quê quán Nam Định — Ninh Bình, Việt Nam và số điện thoại liên hệ +84.916.426.992. Các thông tin này được thể hiện đồng bộ ở dải thông số tại Hero, mục About và mục Contact.

Ba cột mốc ngay dưới hero dẫn đến Giải Nhất Tin học cấp tỉnh (`#chapter-4`), dự án TechSupport (`#techsupport`) và INTI Mobility (`#chapter-10`). CTA dự án ở hero dẫn đến mục dự án (`#projects`). Đây là các liên kết khám phá nội dung, không phải nhãn chứng thực độc lập. Không thêm giấy khen/chứng nhận giả để trang trí.

Website TechSupport được mở từ ảnh preview và CTA dự án. Hồ sơ GitHub https://github.com/Tphand2877 nằm gần phần giới thiệu và trong phần liên hệ; đây là liên kết hồ sơ cá nhân, không được gắn nhãn là repository mã nguồn TechSupport. Các liên kết mở tab mới có `noopener noreferrer` và nhãn VI/EN thông báo hành vi này.

BusGo được giới thiệu theo README của dự án: ứng dụng web bán vé xe và vận hành bến xe, chuyển từ WPF sang ASP.NET Core Razor Pages, dùng SQL Server và phân bổ ghế theo giao dịch. Nút dự án dẫn đến repository `https://github.com/Tphand2877/BusGo`; không giả định có bản demo công khai hoặc khẳng định phần đóng góp cá nhân chưa xác nhận.

Cả TechSupport và BusGo đều có tiêu đề, tóm tắt, các đặc điểm, ảnh trang chủ và tab chuyển màn hình chi tiết; phần đặt lịch/tra cứu hoặc chọn ghế nằm phía dưới. Ảnh bìa được cắt ở phần xem trước để giảm chiều dài trang, nhưng trình xem hiển thị toàn bộ ảnh. Các ảnh dài còn lại cuộn trong khung. Tab hỗ trợ phím mũi tên trái/phải, Home/End; khi tắt JavaScript, tất cả màn hình vẫn hiển thị đầy đủ. Nhấn ảnh mở dialog xem toàn trang với nút bật/tắt phóng to; Escape, nút đóng hoặc nhấn nền đóng dialog và trả focus về ảnh. Ảnh xem trước, `srcset` và liên kết ảnh đồng bộ với ngôn ngữ VI/EN (và theme sáng/tối với BusGo).

Nút tải CV ở hero dùng `Thuan-Phan_CV.pdf` khi chọn VI và `Peter-Phan_CV.pdf` khi chọn EN. Hai tệp trong `dist/assets/` được sao chép nguyên bản từ `Meterials/`, không biên soạn lại nội dung CV hoặc đưa các thông tin mới trong CV sang những phần khác của website. Khi thay CV, cập nhật đúng bản deploy tương ứng.

## Ảnh và credit

- `photo_1.jpg`, `photo_2.jpg`: Thuận xác nhận tự chụp; nằm trong bộ lọc “Ảnh mình chụp”.
- `personal_1.jpg`, `personal_2.jpg`: chân dung Thuận, ghi “Tư liệu cá nhân”, không mặc định là self-portrait.
- `inti_friends.jpg`, `inti_1.jpg`: kỷ niệm INTI, ghi “Tư liệu cá nhân”. Chỉ bổ sung tên tác giả khi đã xác nhận.
- `hero-portrait-480.webp`, `hero-portrait-960.webp`, `hero-portrait-1600.webp`: tạo từ `Meterials/Personal_3.jpg`, xử lý hướng EXIF, crop vuông `(0, 600, 1728, 2328)` để tập trung vào Thuận bên laptop/sổ tay, sau đó thu nhỏ và bỏ EXIF. Không sửa ảnh gốc. Caption nằm ngoài ảnh, ghi tư liệu cá nhân; thông số camera chỉ còn ở gallery.
- Timeline tái sử dụng ảnh website TechSupport và `inti_friends` tại hai chương tương ứng. Screenshot TechSupport không bị crop; ảnh INTI crop theo bố cục, luôn kèm credit tư liệu cá nhân.
- `ts-{home|services|pricing|team|booking}-{vi|en}.webp`: 5 màn hình TechSupport gồm trang chủ (được crop chuẩn phần hero: thanh điều hướng, tiêu đề, laptop và nút hành động, loại bỏ phần tiêu đề danh mục bên dưới; kích thước 1600x766 và bản 800x383), dịch vụ, bảng giá, đội ngũ sáng lập và đặt lịch/tra cứu. Toàn bộ ảnh tự động chuyển giữa tiếng Việt và tiếng Anh qua thuộc tính `data-ts-screen`.
- `busgo-{screen}-{vi|en}-{light|dark}.webp`: năm màn hình `home`, `admin`, `schedules`, `reports`, `booking`, mỗi màn hình có đủ bốn tổ hợp ngôn ngữ/theme. Bản chính rộng 1600px; hậu tố `-800` rộng 800px, giữ nguyên tỷ lệ và toàn bộ nội dung. Ảnh trang chủ lấy từ 02/29, tổng quan từ 11/27, lịch chạy từ 14, báo cáo từ 15 trong `Meterials/BusGo`, cùng các bản `-en`/`-dark`. Các bản tối còn thiếu được chụp trực tiếp từ BusGo cục bộ; ảnh chọn ghế dùng `portfolio-booking-{vi|en}-{light|dark}.png`, cùng tài khoản demo `user` và ghế 1 chưa xác nhận. Không dùng bộ lọc để giả lập theme hay thay chữ trên ảnh. Ảnh PNG gốc giữ nguyên; các WebP tên cũ không còn dùng đã được thay thế. Số liệu demo không phải kết quả kinh doanh.
- Mỗi `.photo-card` có `data-photo` ổn định, `data-category`, `data-image` và `data-caption`. Thông số camera là tùy chọn; dialog ẩn trường này nếu thiếu. `photo_2` có EXIF Nikon D5100, 1/160 s, ISO 250; không dùng dữ liệu ống kính không hợp lệ.
- WebP tạo từ ảnh đã xử lý hướng EXIF, không phóng lớn và không giữ EXIF riêng tư. `srcset` dùng chiều rộng thực tế: file hậu tố `-1600` có thể nhỏ hơn1600px nếu ảnh gốc nhỏ. Ảnh gốc và `Meterials/` giữ nguyên.
- Các ảnh Unsplash `architecture`, `forest`, `landscape`, `street` không còn được sử dụng trên trang. File cũ được giữ nguyên, không coi là tác phẩm của Thuận. Nguồn lưu trữ: architecture — photo-1487958449943-2429e8be8625; landscape — photo-1464822759023-fed622ff2c3b; street — photo-1449824913935-59a10b8d2000; forest — photo-1448375240586-882707db888b.

## Chia sẻ và triển khai

`social-card.jpg` là ảnh chia sẻ1200×630 dùng hình cá nhân và thông tin ICTU/TechSupport. Canonical, `og:url`, `og:image` và `twitter:image` hiện giữ domain triển khai có sẵn trong dự án. Nếu đổi domain, cập nhật tất cả các URL tuyệt đối này cùng nhau trước khi deploy. Hai ngôn ngữ hiện dùng cùng URL; metadata được dịch khi chuyển EN nhưng không có URL/hreflang riêng.

Website không có biểu mẫu gửi dữ liệu, liên hệ qua email. Font Be Vietnam Pro và Cormorant Garamond tải từ Google Fonts, có font dự phòng. Lựa chọn theme/ngôn ngữ lưu ở localStorage; nếu bị chặn, nút vẫn hoạt động trong phiên.

## Kiểm tra khi cập nhật

Kiểm tra VI/EN và sáng/tối ở320,375,820 và1440px: không tràn ngang, menu không che/mất, hero có lời giới thiệu và CTA trước ảnh trên mobile. Thử ba liên kết cột mốc, GitHub ở hero và tải đúng CV PDF sau khi đổi ngôn ngữ. Kiểm tra card giải thưởng, TechSupport và INTI ở bố cục một/hai cột. Thử mọi bộ lọc, đếm ảnh, mở ảnh, mũi tên, Escape, nhấp nền và focus trở lại card. Dialog đóng không chiếm chiều cao hoặc nhận focus. Kiểm tra11 chương vẫn hiện khi tắt JavaScript hoặc bật reduced motion; thử chuyển reduced motion ngay trong phiên. Xác nhận credit và mọi liên kết/ảnh mới trước khi công bố.

Với BusGo, thử CTA từ hero và liên kết đến khu quản trị; chuyển cả ba tab bằng chuột và bàn phím. Cuộn đến cuối ảnh, mở ảnh đầy đủ, bật/tắt phóng to trên mobile, đóng bằng nút/Escape/nhấn nền và kiểm tra focus được trả lại. Thử đủ VI/sáng, VI/tối, EN/sáng, EN/tối: cả năm màn hình, bản responsive và ảnh phóng to phải cùng ngôn ngữ/theme; tải lại trang vẫn dùng lựa chọn đã lưu. Ảnh không tràn ngang trang, dialog đóng không chiếm bố cục. Khi tắt JavaScript, cả ba ảnh quản trị tiếng Việt/tối và liên kết xem ảnh trực tiếp phải còn dùng được.

Với TechSupport, chuyển VI/EN và xác nhận ảnh preview đổi sang bản tiếng Việt hoặc tiếng Anh tương ứng. Liên kết ảnh và nút "Mở website TechSupport" trỏ đến bản VI hoặc EN của website. Ảnh không phân biệt sáng/tối vì website gốc chỉ có một giao diện.

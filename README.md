# Peter Phan — Portfolio

Portfolio tiếng Việt của Thuận Phan (Peter Phan), phong cách Executive Luxury: nền đen than, điểm nhấn champagne, typography thanh lịch.

## Chạy trên máy

Yêu cầu Node.js. Không cần cài thư viện.

```sh
npm run dev
```

Mở http://127.0.0.1:4173. Kiểm tra cú pháp bằng `npm run check`.

## Chỉnh sửa

- `dist/index.html`: giới thiệu, hành trình, thông tin liên hệ và danh sách ảnh.
- `dist/styles.css`: màu sắc, bố cục, font chữ và hiển thị trên điện thoại.
- `dist/app.js`: bộ lọc ảnh, xem ảnh lớn, menu và sao chép email.
- `dist/i18n.js`: nội dung tiếng Anh, chuyển ngôn ngữ và điều khiển giao diện sáng/tối. Tiếng Việt lấy từ HTML, với các nhãn trang trí được bổ sung tại đây.
- `dist/preferences.js`: khôi phục lựa chọn trước khi trang hiển thị; mặc định theo màu hệ thống và dùng tiếng Việt.
- `dist/themes.css`: giao diện sáng và nút chuyển chế độ, ngôn ngữ.
- `dist/assets/`: ảnh cục bộ, có thể thay bằng ảnh của Thuận.

Ảnh hiện tại là ảnh minh họa từ Unsplash, không được trình bày là tác phẩm của Thuận Phan. Khi thêm tác phẩm thật, thay ảnh, tiêu đề, mô tả alt và ghi chú minh họa tương ứng ở gallery, hero và hộp xem ảnh.

Ảnh mẫu: architecture — photo-1487958449943-2429e8be8625; landscape — photo-1464822759023-fed622ff2c3b; street — photo-1449824913935-59a10b8d2000; forest — photo-1448375240586-882707db888b. Nguồn: images.unsplash.com.

Website không có biểu mẫu gửi dữ liệu; liên hệ qua email. Font Be Vietnam Pro và Cormorant Garamond tải từ Google Fonts, có font dự phòng.

Nút VI/EN và sáng/tối nằm ở thanh đầu trang, dùng được cả trên điện thoại. Tên tiếng Việt là Thuận Phan, tiếng Anh là Peter Phan. Lựa chọn được ghi nhớ riêng trên trình duyệt bằng localStorage; nếu bộ nhớ bị chặn, các nút vẫn hoạt động trong phiên hiện tại.

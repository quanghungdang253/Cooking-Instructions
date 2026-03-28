#  Cooking Instructions - Dự án Vue 3
Giới thiệu
Một website hướng dẫn nấu ăn hiện đại được xây dựng với Vue 3 và server laravel, giúp người dùng dễ dàng khám phá các công thức được phân loại, tìm kiếm nhanh chóng và trải nghiệm giao diện mượt mà, thân thiện với mọi thiết bị.

 **Video demo**: https://youtu.be/a6o6wAKwZJE



##  TÍNH NĂNG


👤 Người dùng (Client)
+ Hiển thị danh sách khóa học
+ Tìm kiếm khóa học theo từ khóa
+ Lọc khóa học (danh mục, giá,...)
+ Xem chi tiết khóa học
+ Thêm sản phẩm vào giỏ hàng
+ Quản lý giỏ hàng (thêm, xóa, cập nhật số lượng)
+ Đăng ký tài khoản
+ Đăng nhập bằng email/password (JWT)
+ Đăng nhập bằng Google (OAuth 2.0)

🔐 Xác thực & Phân quyền
+ Xác thực người dùng bằng JWT
+ Đăng nhập bằng Google OAuth 2.0
+ Phân quyền người dùng (User / Admin)
+ Bảo vệ API bằng token


🛠️ Quản trị (Admin)
+ Dashboard thống kê:
+ Tổng số khóa học
Tổng số đơn hàng
Quản lý khóa học (CRUD: thêm, sửa, xóa, xem)
Quản lý người dùng / học viên
Quản lý tài khoản đăng nhập
Quản lý đơn hàng


 ⚙️ Hệ thống / Backend
+ Xây dựng RESTful API bằng Laravel
+ Xử lý logic nghiệp vụ (giỏ hàng, xác thực,...)
+ Phân trang dữ liệu phía server
+ Tìm kiếm và lọc dữ liệu phía backend
+ Kết nối API với frontend (Vue.js)



##  Công nghệ sử dụng
**Frontend**

- Vue 3
- Vite
- Quản lý trạng thái( Pinia)
- Điều hướng( Vue Router)
- Gửi yêu cầu API( Axios )
- Tailwind CSS 
- Heroicons – Icon hiện đại


**Hosting Frontend** :  Vercel

**Backend**
- PHP (Vanilla)
**Cơ sở dữ liệu**
- mysql


##  Ảnh minh họa
 **Trang Admin**
 ![Trang Admin](./demo/img1.png) | ![Menu](./demo/img2.png) | ![Dark](./demo/img3.png) | ![Dark](./demo/img4.png) (./demo/img5.png) | ![Menu](./demo/img6.png) | ![Dark](./demo/img7.png) | ![Dark](./demo/img8.png) (./demo/img9.png) | ![Menu](./demo/img10.png) | ![Dark](./demo/img11.png)

 ![Dark](./demo/img12.png)
  ![Home](./demo/img13.png) | ![Details](./demo/img14.png) | ![Dark](./demo/img15.png) | ![Dark](./demo/img16.png)
  ![Home](./demo/img17.png) ![Home](./demo/img18.png) | ![Details](./demo/img19.png) | ![Dark](./demo/img20.png) | ![Dark](./demo/img21.png)
  ![Home](./demo/img22.png) ![Home](./demo/img23.png) | ![Details](./demo/img24.png) | ![Dark](./demo/img25.png) | ![Dark](./demo/img26.png)
  ![Home](./demo/img27.png) ![Home](./demo/img28.png) | ![Details](./demo/img29.png) | ![Dark](./demo/img30.png) | ![Dark](./demo/img31.png)

---
---

## Cách chạy dự án trên máy

```bash
# Clone dự án
git clone https://github.com/quanghungdang253/Cooking-Instructions.git

# Di chuyển vào thư mục dự án
cd Cooking-Instructions

# Cài đặt các package
npm install

# Chạy dự án
npm run dev

Lời cảm ơn
Cảm ơn bạn đã quan tâm và trải nghiệm dự án Cooking Instructions. Hy vọng website sẽ giúp bạn có thêm thật nhiều ý tưởng và cảm hứng cho những bữa ăn ngon miệng!